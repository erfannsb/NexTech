import Table from "../components/tables";
import { ButtonVariant2, ButtonVariant3 } from "../components/buttons";
import { ArrowUpRight, Euro } from "lucide-react";
import { CardVariant1 } from "../components/cards";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../data/api";
import { GetOrderings } from "../../data/orders";

export default function Order() {
  const [ordersHistory, setOrdersHistory] = useState([]);
  const [currentOrderItems, setCurrentOrderItems] = useState([]); // Renamed for clarity
  const [currentOrderData, setCurrentOrderData] = useState(null); // Added for order info
  const [installment, setInstallment] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchWithAuth(() => GetOrderings());
      if (!res.ok) {
        console.error("request failed");
        return;
      }
      let orders = await res.json();
      orders = orders.filter((e) => e.is_confirmed);

      let current_order = orders.filter((e) =>
        ["Pending", "Processing", "Shipped"].includes(e.orderstatus)
      )[0];

      // fetching history of orders

      let history_orders = orders.filter((e) =>
        ["Delivered", "Cancelled"].includes(e.orderstatus)
      );

      setOrdersHistory(history_orders);
      if (current_order) {
        // Store both the items and the full order data
        setCurrentOrderItems(current_order.items || []);
        setCurrentOrderData(current_order); // Store the full order object
        console.log({ current_order });

        // checking if current order has any installment
        setInstallment(current_order.installment);
      }
    };
    fetchData();
  }, []);

  const wishListItems2D = [...currentOrderItems].map((item) => [
    <span>{item.product.brand}</span>,
    <span>{item.product.name}</span>,
    <span>{item.shop_product.price}</span>,
    <span>{item.product.rating}</span>,
    <span>{item.product.categories_names?.join(" ")}</span>,
    <div className="flex  items-center">
      <div className="flex items-center mr-2 card-variant-1 p-[5px] rounded-xl w-fit">
        <input
          type="number"
          value={item.quantity}
          className="outline-0 w-7 text-center"
          readOnly
        />
      </div>
    </div>,
  ]);

  const historyList = [...ordersHistory].map((item) => [
    <span>{item.orderid}</span>,
    <span>
      {item.items
        .slice(0, 3)
        .map((e) => e.product.name)
        .join(", ")}
    </span>,
    <span>{item.orderdate}</span>,
    <span>{item.orderstatus}</span>,
  ]);

  console.log(historyList);

  return (
    <div className="md:mx-10">
      <h2 className="font-bold text-lg">Order List</h2>
      <p className="font-light text-md text-[#B6B6B6] mb-3">
        List of things you ordered recently
      </p>

      {currentOrderItems?.length != 0 ? (
        <Table
          className="max-h-[60vh]"
          py={2}
          headerItems={[
            "Company",
            "Product",
            "Price",
            "Rate",
            "Category",
            "Quantity",
          ]}
          list={wishListItems2D}
        />
      ) : (
        <p className="bg-red-400 p-2 w-fit rounded-md font-bold text-black">
          No order yet
        </p>
      )}
      {/* Order State */}
      {currentOrderItems?.length != 0 && (
        <>
          <h2 className="font-bold text-lg my-3">Order State</h2>
          <div className="flex max-sm:flex-col">
            {/* Order Info */}
            <div className="flex flex-col max-sm:mb-3">
              <CardVariant1
                text={currentOrderData?.orderid}
                header={"Order ID"}
                color={"bg-red-300"}
                hide_bg={true}
              />
              <CardVariant1
                text={"10 Days"}
                header={"Estimated Delivery Time"}
                color={"bg-red-300"}
                hide_bg={true}
              />
              <CardVariant1
                text={currentOrderData?.shipping?.shippingmethod || ""}
                header={"Shipping Method"}
                color={"bg-red-300"}
                hide_bg={true}
              />
              <CardVariant1
                text={"-"}
                header={"Payment Method"}
                color={"bg-red-300"}
                hide_bg={true}
              />
            </div>
            {/* State of Order */}
            <div className="card-variant-1 flex flex-col items-center sm:mx-4 justify-center rounded-lg p-3 sm:max-w-[300px] max-sm:mb-3">
              <h3 className="font-bold ">{currentOrderData?.orderstatus} ⏳</h3>
              <p className="font-light text-sm my-2 text-[#C4C2C2] text-center">
                Lorem ipsum dolor sit amet komm tanzen ich will nicht komm
                spatzirieren ich will nicht stoppen sie jetzt
              </p>
            </div>

            {/* Installment Status */}
            {installment && (
              <div className="flex flex-col sm:w-[300px] bg-[rgba(24,23,27,0.69)] p-4 text-white border border-[#26262B] rounded-md">
                <h3 className="font-bold text-lg">Installment Status</h3>
                <div className="flex justify-between w-full mt-3">
                  <p className="text-[#898989] text-sm">Total Price</p>
                  <h3 className="text-sm">{installment?.totalprice}</h3>
                </div>
                <div className="flex justify-between w-full mt-3">
                  <p className="text-[#898989] text-sm">Paid Months</p>
                  <h3 className="text-sm">{installment?.monthspaid}</h3>
                </div>{" "}
                <div className="flex justify-between w-full mt-3">
                  <p className="text-[#898989] text-sm">Total Months</p>
                  <h3 className="text-sm">{installment?.installmentmonths}</h3>
                </div>
                <div className="flex justify-between w-full mt-3">
                  <p className="text-[#898989] text-sm">Installment Status</p>
                  <h3 className="text-sm">{installment?.installmentstatus}</h3>
                </div>
                <ButtonVariant3
                  text={"Pay Now"}
                  img={<Euro />}
                  className={"ml-auto mt-auto"}
                />
              </div>
            )}
          </div>
        </>
      )}

      {/* Order History */}
      <h2 className="font-bold text-lg mt-8">Order History</h2>
      <p className="font-light text-sm text-[#B6B6B6] mb-4">
        List of things you ordered recently
      </p>
      {historyList.length === 0 ? (
        <p className="bg-red-400 p-2 w-fit rounded-md font-bold text-black">
          No order history yet
        </p>
      ) : (
        <Table
          py={2}
          headerItems={["OrderID", "Order Items", "Date", "Order Status"]}
          list={historyList}
        />
      )}
    </div>
  );
}

function OrderItem(
  CompanyName,
  CompanyImg,
  ProductName,
  Price,
  Rate,
  Category,
  Quantity = 1
) {
  return [
    <div className="flex items-center my-2 sm:my-4">
      <div className="p-1 bg-[rgb(24,23,27)] rounded-md flex justify-between items-center">
        <img src={CompanyImg} alt="company" className="w-6 h-auto" />
      </div>
      <h3 className="ml-2 text-[14px]">{CompanyName}</h3>
    </div>,
    <h3>{ProductName}</h3>,
    <h3>{Price}</h3>,
    <h3>{Rate}</h3>,
    <h3>{Category}</h3>,
    <div className="flex items-center card-variant-1 p-[5px] w-8 h-8 rounded-full justify-center">
      <h3>{Quantity}</h3>
    </div>,
  ];
}

function OrderHistoryItem(OrderID, OrderItems = [], Date, TotalPrice) {
  return [
    <h3 className="my-4">{OrderID}</h3>,
    <h3>{OrderItems.slice(0, 3).join(",")}</h3>,
    <h3>{Date}</h3>,
    <h3>{TotalPrice}</h3>,
    <ButtonVariant2 img={<ArrowUpRight size={15} />} />,
  ];
}
