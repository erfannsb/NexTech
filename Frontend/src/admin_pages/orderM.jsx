import { ArrowUpRight, X } from "lucide-react";
import { ButtonVariant1, ButtonVariant2 } from "../components/buttons";
import { InputVariant3 } from "../components/inputs";
import Table from "../components/tables";
import useUIStore from "../ui_storage";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../data/api";
import { GetOrdering, UpdateOrdering } from "../../data/orders";
import { GlassCard } from "../components/cards";

export default function ProductManageMent() {
  const [shop_orders, setOrders] = useState([]);
  const active_shop = useUIStore((state) => state.active_shop);
  const [currentOrderFilter, setOrderFilter] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false); // store the id of order
  const [selectedStatus, setStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let resFromOrders = await fetchWithAuth(() =>
        fetch(`/shops/shops/${active_shop.shopid}/orders/`, {
          method: "GET",
          credentials: "include",
        })
      );
      if (!resFromOrders.ok) {
        console.error("Fetching orders failed");
        return;
      }
      resFromOrders = await resFromOrders.json();
      let newOrders = resFromOrders;
      for (let order of newOrders) {
        if (order.paymentmethod == "Installment") {
          continue;
        }
        let ordertotalprice = totalprice(order.items);
        order["final_price"] = finalprice(
          ordertotalprice,
          order.shipping.shippingmethod
        );
      }
      setOrders(newOrders);
      console.log({ resFromOrders, newOrders });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (currentOrderFilter == "All") {
        let resFromOrders = await fetchWithAuth(() =>
          fetch(`/shops/shops/${active_shop.shopid}/orders/`, {
            method: "GET",
            credentials: "include",
          })
        );
        if (!resFromOrders.ok) {
          console.error("Fetching orders failed");
          return;
        }
        resFromOrders = await resFromOrders.json();
        let newOrders = resFromOrders;
        for (let order of newOrders) {
          if (order.paymentmethod == "Installment") {
            continue;
          }
          let ordertotalprice = totalprice(order.items);
          order["final_price"] = finalprice(
            ordertotalprice,
            order.shipping.shippingmethod
          );
        }
        setOrders(newOrders);
      } else {
        let resFromOrders = await fetchWithAuth(() =>
          fetch(
            `/shops/shops/${active_shop.shopid}/orders/?status=${currentOrderFilter}`,
            {
              method: "GET",
              credentials: "include",
            }
          )
        );
        if (!resFromOrders.ok) {
          console.error("Fetching orders failed");
          return;
        }
        resFromOrders = await resFromOrders.json();
        let newOrders = resFromOrders;
        for (let order of newOrders) {
          if (order.paymentmethod == "Installment") {
            continue;
          }
          let ordertotalprice = totalprice(order.items);
          order["final_price"] = finalprice(
            ordertotalprice,
            order.shipping.shippingmethod
          );
        }
        setOrders(newOrders);
      }
    };
    fetchData();
  }, [currentOrderFilter]);

  const onOrderOpen = async (orderid) => {
    let res = await fetchWithAuth(() => GetOrdering(orderid));
    if (!res.ok) {
      console.error("Error occured while fetching order");
      setMoreInfo(false);
      return;
    }
    res = await res.json();
    setStatus(res.orderstatus);
    setMoreInfo(res);
    console.log(res);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchWithAuth(() =>
        UpdateOrdering(moreInfo.orderid, {
          orderstatus: selectedStatus,
        })
      );
      if (!res.ok) {
        console.error("failed to update order");
      }
      setOrders((prev) => {
        return prev.map((e) => {
          if (e.orderid == moreInfo.orderid) {
            return { ...e, orderstatus: selectedStatus }; // Return modified object
          }
          return e; // Return unchanged object
        });
      });
    };
    fetchData();
  }, [selectedStatus]);

  return (
    <div className="relative h-full mb-20">
      <h3 className="mt-1 font-black text-xl mb-2">Recent Orders</h3>
      <div className="flex flex-wrap gap-2">
        {["All", "Pending", "Shipped", "Delivered"].map((e) => (
          <ButtonVariant1
            text={e}
            color={"bg-red-300"}
            className={`text-sm ${
              currentOrderFilter == e ? "card-active" : ""
            }`}
            onClick={() => setOrderFilter(e)}
          />
        ))}
      </div>
      {/* Specific Order Information */}
      {moreInfo && (
        <GlassCard
          className="absolute top-[50%] left-[50%] h-fit w-[500px] -translate-x-1/2 -translate-y-1/2"
          children={
            <div className="flex flex-col">
              <div className="flex w-full justify-between p-3">
                <h3 className="font-medium text-gray-300">Order Info</h3>
                <X
                  size={16}
                  className="cursor-pointer"
                  onClick={() => setMoreInfo(false)}
                />
              </div>
              {/* Info */}
              <div className="flex flex-col px-4 pb-3">
                {[
                  { key: "OrderID", value: moreInfo.orderid },
                  {
                    key: "Customer Name",
                    value: `${moreInfo.customer.firstname} ${moreInfo.customer.lastname}`,
                  },
                  {
                    key: "Customer Address",
                    value: `${moreInfo.customer.addressprovince}, ${moreInfo.customer.addresscity}, ${moreInfo.customer.addressstreet}, ${moreInfo.customer.addressdetails}`,
                  },
                  {
                    key: "Customer Phone Number",
                    value: moreInfo.customer.phonenumber,
                  },
                  {
                    key: "Customer Postal Code",
                    value: moreInfo.customer.postalcode,
                  },
                  {
                    key: "Order",
                    value: moreInfo.items
                      .map((e) => `${e.quantity} ${e.product.name} `)
                      .join(", "),
                  },
                  {
                    key: "Price",
                    value: `$${
                      moreInfo.paymentmethod == "Installment"
                        ? moreInfo.installment.totalprice
                        : moreInfo.final_price
                    }`,
                  },
                  {
                    key: "Shipping Method",
                    value: moreInfo.shipping.shippingmethod,
                  },
                  {
                    key: "Payment Method",
                    value: moreInfo.paymentmethod,
                  },
                ].map((e) => (
                  <div className="flex justify-between items-center not-last:border-b border-neutral-600 py-2">
                    <h3 className="font-bold text-sm">{e.key}</h3>
                    <p className="font-light text-[12px]  py-[2px] px-2 max-w-[200px] text-right">
                      {e.value}
                    </p>
                  </div>
                ))}
                <div className="flex justify-between items-center not-last:border-b border-neutral-600 py-2">
                  <h3 className="font-bold text-sm">Order Status</h3>
                  <p className="font-light text-[12px]  py-[2px] px-2 max-w-[200px] text-right">
                    <InputVariant3
                      selected={selectedStatus}
                      onSelect={setStatus}
                      options={[
                        "Pending",
                        "Processing",
                        "Shipped",
                        "Delivered",
                        "Cancelled",
                      ]}
                    />
                  </p>
                </div>
              </div>
            </div>
          }
        />
      )}
      {shop_orders.length > 0 ? (
        <Table
          className="mt-3"
          headerItems={[
            "Order Number",
            "Customer Name",
            "Status",
            "Date & Time",
            "Total Price",
          ]}
          list={shop_orders?.map((e) =>
            OrderItems(
              e.orderid,
              `${e.customer.firstname} ${e.customer.lastname}`,
              e.orderstatus,
              e.orderdate,
              e.paymentmethod == "Installment"
                ? e.installment.totalprice
                : e.final_price,
              onOrderOpen
            )
          )}
        />
      ) : (
        <p className="font-bold text-sm mt-3">Nothing found</p>
      )}
    </div>
  );
}

export function OrderItems(
  orderNumber,
  customerName,
  status,
  dateNtime,
  price,
  onOpen
) {
  let statusComp = null;

  if (status == "Delivered") {
    statusComp = (
      <div className="text-green-600 bg-green-50 w-fit px-2 pys-[2px] rounded-xl">
        {status}
      </div>
    );
  } else if (status == "Shipped") {
    statusComp = (
      <div className="text-cyan-600 bg-cyan-50  w-fit px-2 pys-[2px] rounded-xl">
        {status}
      </div>
    );
  } else if (status == "Pending") {
    statusComp = (
      <div className="text-orange-600 bg-orange-50  w-fit px-2 pys-[2px] rounded-xl">
        {status}
      </div>
    );
  } else if (status == "Processing") {
    statusComp = (
      <div className="text-yellow-600 bg-yellow-50  w-fit px-2 pys-[2px] rounded-xl">
        {status}
      </div>
    );
  }
  return [
    <h3>{orderNumber}</h3>,
    <h3>{customerName}</h3>,
    statusComp,
    <h3>{dateNtime}</h3>,
    <h3>${price}</h3>,
    <ButtonVariant2
      img={<ArrowUpRight size={13} />}
      onClick={() => onOpen(orderNumber)}
    />,
  ];
}
