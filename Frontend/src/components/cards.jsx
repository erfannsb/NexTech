import { LucideShoppingBasket, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonVariant3 } from "./buttons";

export function CardVariant1({ header, text, color, className }) {
  return (
    <div className={`h-fit card-variant-1 px-3 py-2 rounded-lg ${className}`}>
      <div className="flex items-center">
        <div className={`rounded-full w-2 h-2 mr-3 ${color}`}></div>
        <div className="card-header text-[#898989] text-sm">{header}</div>
      </div>
      <div className="mt-1 font-md">{text}</div>
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
}) {
  const [colorBGForCompany, setColorBGForCompany] = useState("");

  useEffect(
    () => async () => {
      const img = `http://localhost:5173/${companyImg}`;
      const res = await fetch(
        `/api/dominant-color/?url=${encodeURIComponent(img)}`,
      );
      const data = await res.json();
      if (!data.error) {
        setColorBGForCompany(data.color.join(","));
      }
      console.log(data.color.join(","));
    },
    [],
  );

  return (
    <div className="py-3 bg-[rgba(24,23,27,0.69)] rounded-md max-w-[30%]">
      {/* header */}
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center py-2 px-2 to-black w-full`}
          style={{
            background: `linear-gradient(90deg, rgba(${colorBGForCompany || "255,255,255"}, 0.55) 0%, rgba(${colorBGForCompany || "255,255,255"}, 0) 35.58%)`,
          }}
        >
          <div className="p-2 bg-[rgb(24,23,27)] rounded-md aspect-square w-fit flex justify-between items-center">
            <img src={companyImg} alt="company" className="w-7 h-auto" />
          </div>
          <h4 className="ml-2 font-bold">{companyName}</h4>
        </div>
        {/* rating */}
        <div className="flex pr-4  items-center text-[#898989]">
          <Star size={17} className="mr-2" /> {rate}
        </div>
      </div>
      {/* middle */}
      <img
        className="w-full max-w-[400px] p-6 h-max-[300px] object-contain"
        src={productImg}
        alt="product Image"
      />
      {/* footer */}
      <div className="flex justify-between flex-col px-4 ">
        <h3 className="text-2xl font-extrabold">{title}</h3>
        <div className="flex items-center justify-between mt-3">
          <p className="font-bold text-xl text-[#6274F7]">{price}</p>
          <ButtonVariant3 text="Add" img={<LucideShoppingBasket />} />
        </div>
      </div>
    </div>
  );
}
