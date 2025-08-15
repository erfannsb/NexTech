import {
  Calendar,
  CirclePoundSterling,
  Minus,
  Plus,
  ShoppingCart,
  TicketPercent,
  Trash,
  Truck,
} from "lucide-react";
import { InputVariant1, InputVariant3 } from "../components/inputs";
import Table from "../components/tables";
import { useState } from "react";
import { CardVariant1 } from "../components/cards";
import { ButtonVariant2, ButtonVariant4 } from "../components/buttons";
import { useEffect } from "react";
import { fetchWithAuth } from "../../data/api";
import { DeleteOrderItem, GetOrderings } from "../../data/orders";
import useUIStore from "../ui_storage";
import { useNavigate } from "react-router-dom";

export default function WishList() {
  const [paying, setPaying] = useState();
  const [month, setMonth] = useState();
  const [shipping, setShipping] = useState();
  const [productInfo, setProductInfo] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [orderId, setOrderId] = useState(null);
  const activeUser = useUIStore((state) => state.active_user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWithAuth(() => GetOrderings());
      if (!response.ok) {
        return;
      }

      let data = await response.json();
      data = data[0];
      setOrderId(data.orderid);
      let items = data.items;

      console.log({ items, data });

      let info = [];

      for (let item of items) {
        const product = item.product;
        const quantity = item.quantity;
        const price = item.shop_product.price;
        info.push({
          id: item.id,
          company: product.brand,
          name: product.name,
          price: price,
          rate: product.rating,
          category: product.categories_names,
          quantity: quantity,
        });
      }

      setProductInfo(info);
      setQuantities(info.reduce((acc, i) => ({ ...acc, [i.id]: i.quantity })));
    };
    fetchData();

    console.log("activeUser", activeUser);
  }, []);

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      const res = await fetch(`/orders/orderItems/${itemId}/`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (!res.ok) {
        console.error("Failed to update quantity");
        return;
      }

      console.log(`Quantity updated to ${newQuantity}`);
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const wishListItems2D = productInfo.map((item) => [
    <span>{item.company}</span>,
    <span>{item.name}</span>,
    <span>{item.price}</span>,
    <span>{item.rate}</span>,
    <span>{item.category.join(" ")}</span>,
    <div className="flex  items-center">
      <div className="flex items-center mr-2 card-variant-1 p-[5px] rounded-xl w-fit">
        <Minus
          size={14}
          className="mr-2 cursor-pointer"
          color="#ddd"
          onClick={() => {
            const newQty = Math.max(
              1,
              (quantities[item.id] ?? item.quantity) - 1
            );
            setQuantities((prev) => ({ ...prev, [item.id]: newQty }));
            updateQuantity(item.id, newQty);
          }}
        />

        <input
          type="number"
          value={quantities[item.id] ?? item.quantity}
          className="outline-0 w-7 text-center"
          readOnly
        />

        <Plus
          size={14}
          className="ml-2 cursor-pointer"
          color="#ddd"
          onClick={() => {
            const newQty = (quantities[item.id] ?? item.quantity) + 1;
            setQuantities((prev) => ({ ...prev, [item.id]: newQty }));
            updateQuantity(item.id, newQty);
          }}
        />
      </div>
      <ButtonVariant2
        img={<Trash size={16} />}
        onClick={async () => {
          // Handle item removal logic here
          setProductInfo((prev) => prev.filter((i) => i.id !== item.id));
          setQuantities((prev) => {
            const newQuantities = { ...prev };
            delete newQuantities[item.id];
            return newQuantities;
          });

          const res = await fetchWithAuth(() => DeleteOrderItem(item.id));
          if (!res.ok) {
            console.error("Failed to delete item");
            return;
          }
          console.log("Item deleted successfully");
        }}
      />
    </div>,
  ]);

  const navigate = useNavigate();

  const DELIVERY_PRICE = shipping === "Express" ? 20 : 10; // Fixed delivery price
  const INTEREST_RATE = () => {
    if (paying === "Installment") {
      switch (month) {
        case "3 Months":
          return 0.03; // 3% interest rate for 3 months
        case "6 Months":
          return 0.05; // 5% interest rate for 6 months
        case "12 Months":
          return 0.07; // 7% interest rate for 12 months
        case "24 Months":
          return 0.1; // 10% interest rate for 24 months
        default:
          return 0; // No interest for other options
      }
    }
    return 0;
  }; // 10% interest rate for installment

  const totalprice = productInfo.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] ?? item.quantity),
    0
  );

  const totalItems = productInfo.reduce(
    (acc, item) => acc + (quantities[item.id] ?? item.quantity),
    0
  );

  const finalprice = () => {
    let price = totalprice + DELIVERY_PRICE;
    if (paying === "Installment") {
      price += price * INTEREST_RATE();
    }
    return price.toFixed(3);
  };

  const onConfirmPurchase = () => {
    if (!activeUser) {
      alert("Please log in to confirm your purchase.");
      return;
    }
    if (!paying || !shipping || (paying === "Installment" && !month)) {
      alert("Please select all payment and shipping options.");
      return;
    }

    if (
      activeUser.addressprovince === null ||
      activeUser.addresscity === null ||
      activeUser.addressstreet === null ||
      activeUser.postalcode === null
    ) {
      alert("Please complete your address information in settings.");
      return;
    }

    const res = fetchWithAuth(() => {
      return fetch(`/orders/orders/${orderId}/`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentmethod: paying,
          orderstatus: "Pending",
          is_confirmed: true,
        }),
      });
    });

    if (!res.ok) {
      console.error("Failed to confirm purchase");
      return;
    }
    console.log("Purchase confirmed successfully");
    console.log("res", res);

    // Redirect to a confirmation page or show a success message
  };

  return (
    <div className="mb-10 grid grid-cols-2  md:grid-template-rows: max-content max-content;  max-md:grid-template-rows: max-content max-content max-content; md:mx-10 gap-5">
      {/* Wish List table */}
      <div className="col-start-1 col-end-3">
        <h2 className="text-xl font-bold">Wish List</h2>
        <p className="text-[#B6B6B6] text-md mb-4">
          Manage your wish list here
        </p>
        {wishListItems2D.length === 0 ? (
          <p className="text-black text-md bg-red-400 w-fit p-2 rounded-md font-bold">
            No items in your wish list
          </p>
        ) : (
          <Table
            className="max-h-[60vh]"
            py={2}
            headerItems={[
              "Company",
              "Product",
              "Price",
              "Rate",
              "Category",
              "",
            ]}
            list={wishListItems2D}
          />
        )}
      </div>
      {/* Purchase */}
      <div className="flex flex-col gap-2 max-md:row-start-2 max-md:row-end-3 max-md:col-start-1 max-md:col-end-3">
        <h3 className="mt-3 font-black text-xl">Your Information</h3>
        <div className="grid grid-template-columns: max-content max-content; grid-template-rows: max-content max-content; gap-3">
          <CardVariant1
            text={
              activeUser?.addressprovince
                ? `${activeUser.addressprovince}, ${activeUser.addresscity}, ${activeUser.addressstreet}`
                : "No Address"
            }
            header="Address Review"
            color="bg-[#EEBF69]"
            className="col-start-1 col-end-3"
            hide_bg={true}
          />
          <CardVariant1
            text={activeUser?.postalcode || "No Postal Code"}
            header="Postal Code"
            color="bg-[#EE6969]"
            hide_bg={true}
          />
          <CardVariant1
            text="10 days "
            header="Estimated Delivery Time"
            color="bg-[#69EE69]"
            hide_bg={true}
          />

          <button
            className="underline text-[#6274F7] cursor-pointer w-fit text-sm mb-3"
            onClick={() => navigate("/settings")}
          >
            Edit Your Information
          </button>
        </div>
      </div>
      {/* Confirm */}

      <div className="md:self-end max-md:row-start-3 max-md:row-end-4 max-md:col-start-1 max-md:col-end-3">
        <h3 className="text-xl font-bold mt-3 mb-1">Purchase</h3>
        <div className="flex flex-col gap-2">
          <InputVariant1
            placeholder="Apply Coupan"
            img={<TicketPercent size={17} />}
            className="p-2 md:w-[250px] max-md:w-full mt-2"
          />
          <InputVariant3
            placeholder="Choosing Paying Option"
            img={<CirclePoundSterling size={17} />}
            className="p-2 text-sm md:w-[250px] max-md:w-full max-md:max-w-full"
            selected={paying}
            onSelect={setPaying}
            options={["Credit Card", "Installment", "Cash On Delivery"]}
          />
          {paying === "Installment" && (
            <InputVariant3
              placeholder="Choose Paying Month"
              img={<Calendar size={17} />}
              className="p-2 text-sm md:w-[250px] max-md:w-full max-md:max-w-full"
              selected={month}
              onSelect={setMonth}
              options={["3 Months", "6 Months", "12 Months", "24 Months"]}
            />
          )}
          <InputVariant3
            placeholder="Choosing Shipping Option"
            img={<Truck size={17} />}
            className="p-2 text-sm md:w-[250px] max-md:w-full max-md:max-w-full"
            selected={shipping}
            onSelect={setShipping}
            options={["Express", "Economic"]}
          />
        </div>
        <div className=" p-4 text-white mt-4  rounded-md">
          <h2 className="text-xl font-black mb-4">
            {totalItems} Items Selected
          </h2>
          <div className="flex flex-col">
            {paying === "Installment" && (
              <div className="flex justify-between my-2">
                <h3 className="font-bold text-md">Interest Rate:</h3>
                <h4 className="text-[#BEC4F4] font-bold">{INTEREST_RATE()}%</h4>
              </div>
            )}
            <div className="flex justify-between my-2">
              <h3 className="font-bold text-md">Products Total Price::</h3>
              <h4 className="text-[#BEC4F4] font-bold">${totalprice}</h4>
            </div>
            <div className="flex justify-between my-2">
              <h3 className="font-bold text-md">Delivery Price:</h3>
              <h4 className="text-[#BEC4F4] font-bold">${DELIVERY_PRICE}</h4>
            </div>
            <div className="flex justify-between border-t border-[#26262B] py-2 mt-2">
              <h3 className="font-bold text-md">Total Price: </h3>
              <h4 className="text-[#BEC4F4] font-bold text-lg">
                ${finalprice()}
              </h4>
            </div>
          </div>
          <ButtonVariant4
            className="ml-auto mt-2"
            text="Confirm And Purchase"
            img={<ShoppingCart size={16} />}
            onClick={onConfirmPurchase}
          />
        </div>
      </div>
    </div>
  );
}
