import { LucideShoppingBasket, Star } from "lucide-react";
import { useState } from "react";
import { ButtonVariant3 } from "./buttons";
import { useNavigate } from "react-router";

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
}) {
  const [colorBGForCompany, setColorBGForCompany] = useState("");
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/product/${id}`);
      }}
      className="py-3 border border-[#212121] rounded-lg cursor-pointer hover:scale-[1.01] transition hover:border-[#444444]"
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
      <img
        className="w-full max-w-[300px] p-6 h-max-[300px] mx-auto object-contain"
        src={productImg}
        alt="product Image"
      />
      {/* footer */}
      <div className="flex justify-between flex-col px-4 ">
        <p className="font-medium text-lg mb-2 text-[#ededed]">{price}</p>

        <h3 className="text-lg font-extrabold">{title}</h3>
        <div className="flex items-center justify-end mt-auto">
          <ButtonVariant3
            text="Add"
            img={<LucideShoppingBasket size={16} />}
            className="text-sm"
          />
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
