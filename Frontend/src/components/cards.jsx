import { LucideShoppingBasket, Star } from "lucide-react";
import { useState } from "react";
import { ButtonVariant3 } from "./buttons";
import { useNavigate } from "react-router";
import { fetchWithAuth } from "../../data/api";
import useUIStore from "../ui_storage";
import { GetOrderings, PostOrdering, PostOrderItem } from "../../data/orders";
export function CardVariant1({
  header,
  text,
  color,
  className,
  hide_bg = false,
}) {
  return (
    <div
      className={`h-fit ${
        hide_bg ? "" : "card-variant-1"
      } px-3 py-2 rounded-lg ${className}`}
    >
      <div className="flex items-center">
        <div className={`rounded-full w-2 h-2 mr-2 sm:mr-3 ${color}`}></div>
        <div className="card-header text-[#898989] sm:text-sm max-sm:text-[12px]">
          {header}
        </div>
      </div>
      <div className="mt-1 font-md max-sm:text-sm">{text}</div>
    </div>
  );
}

export function ShoppingCard({
  companyName,
  companyImg,
  productImg,
  title,
  rate,
  price,
  id,
  shops,
  is_available,
}) {
  const [colorBGForCompany, setColorBGForCompany] = useState("");
  const navigate = useNavigate();
  const activeUser = useUIStore((state) => state.active_user);
  const setBasketNumber = useUIStore((state) => state.setBasketNumber);
  const basketNumber = useUIStore((state) => state.basketNumber);

  const addToBasket = async () => {
    let orderID;

    if (!activeUser) {
      navigate("/form/login");
    }
    // getting customer orders
    const res = await fetchWithAuth(() => GetOrderings());
    if (!res.ok) {
      console.error("Failed to add to basket:", res.statusText);
      return;
    }
    let data = await res.json();

    data = data?.filter((e) => e.is_confirmed == false);

    // if no order is created yet create one
    if (data.length === 0) {
      const newOrder = await fetchWithAuth(() =>
        PostOrdering({
          customerid: activeUser.customerid,
        })
      );

      if (!newOrder.ok) {
        console.error("Failed to create new order:", newOrder.statusText);
        return;
      }
      const orderData = await newOrder.json();

      orderID = orderData.orderid;
    } else {
      orderID = data[0].orderid;
    }

    let shopId = shops[0].shopid; // first shop because it's the default (lowest price sorted before)

    const resFromShopProduct = await fetch(
      `/shops/shopProduct/?shopid=${shopId}&productid=${id}`
    );

    console.log("resFromShopProduct", resFromShopProduct);
    if (!resFromShopProduct.ok) {
      console.error(
        "Failed to fetch shop product:",
        resFromShopProduct.statusText
      );
      return;
    }

    const dataFromShopProduct = await resFromShopProduct.json();
    console.log("dataFromShopProduct", dataFromShopProduct);
    let shopProductId = dataFromShopProduct[0].id;

    let resFromIFThereWasAnOrderItem = await fetchWithAuth(() =>
      GetOrderings()
    );
    let dataFromOrder = await resFromIFThereWasAnOrderItem.json();

    dataFromOrder = dataFromOrder?.filter((e) => e.is_confirmed == false);

    if (dataFromOrder.length > 0) {
      let items = dataFromOrder[0].items;
      let existingItem = items.find(
        (item) => item.shopproductid === shopProductId
      );
      if (existingItem) {
        // If the item already exists in the order, increment its quantity
        const updatedQuantity = existingItem.quantity + 1;
        const resUpdate = await fetchWithAuth(() =>
          fetch(`/orders/orderItems/${existingItem.id}/`, {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: updatedQuantity,
              orderid: orderID,
              shopproductid: shopProductId,
            }),
          })
        );
        if (!resUpdate.ok) {
          console.error("Failed to update order item:", resUpdate.statusText);
          return;
        } else {
          setBasketNumber(basketNumber + 1);
          return;
        }
      }
    }

    const resFromOrderItem = await fetchWithAuth(() =>
      PostOrderItem({
        quantity: 1,
        shopproductid: shopProductId,
        orderid: orderID,
      })
    );

    console.log("resFromOrderItem", resFromOrderItem);

    setBasketNumber(basketNumber + 1);
  };

  return (
    <div
      onClick={() => {
        navigate(`/product/${id}`);
      }}
      className="flex flex-col justify-between py-3 border border-[#212121] rounded-lg cursor-pointer hover:scale-[1.01] transition hover:border-[#444444]"
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center py-2 px-2 to-black w-full`}
          style={{
            background: `linear-gradient(90deg, rgba(${
              colorBGForCompany || "255,255,255"
            }, 0.55) 0%, rgba(${
              colorBGForCompany || "255,255,255"
            }, 0) 35.58%)`,
          }}
        >
          <div className="p-1 bg-[rgb(24,23,27)] rounded-md w-fit flex justify-between items-center">
            <img src={companyImg} alt="c" className="w-7 h-auto" />
          </div>
          <h4 className="ml-2 font-medium text-sm">{companyName}</h4>
        </div>
        {/* rating */}
        <div className="flex pr-4  items-center text-sm text-[#898989]">
          <Star size={17} className="mr-2" /> {rate}
        </div>
      </div>
      {/* middle */}
      <div className=" p-6 ">
        <img
          className="w-full max-w-[300px]h-max-[300px] mx-auto object-contain"
          src={productImg}
          alt="product Image"
        />

        <h3 className="text-lg font-extrabold mt-2">{title}</h3>
        <p className="font-medium text-lg mt-1 text-[#ededed]">${price}</p>
      </div>

      {/* footer */}
      <div className="flex justify-between flex-col px-4 ">
        <div className="flex items-center justify-end mt-auto">
          {is_available ? (
            <ButtonVariant3
              text="Add"
              img={<LucideShoppingBasket size={16} />}
              className="text-sm"
              onClick={(e) => {
                e.stopPropagation();
                addToBasket();
              }}
            />
          ) : (
            <span className="text-red-300 text-sm p-2">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
