import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { InputVariant1, InputVariant2 } from "../components/inputs";
import { ButtonVariant1 } from "../components/buttons";
import { ShoppingCard } from "../components/cards";
function Explore() {
  const [showCategory, setShowCategory] = useState(true);
  const [showBrands, setShowBrands] = useState(true);

  return (
    <div>
      {/* Search Section */}
      <h1 className="text-[#E6E9FF] font-black text-lg mb-3">
        Search Your Favorite Product Here!
      </h1>
      <div className="flex flex-wrap gap-2">
        {/* Search Input */}
        <InputVariant1
          placeholder="Search Here..."
          className="w-[200px] py-[5px] px-2"
          img={<Search strokeWidth={1.5} size={17} />}
        />
        {/* Filtering */}
        <ButtonVariant1
          color={"bg-red-300"}
          text="Most Viewed"
          className={"text-[12px]"}
          py={"1"}
        />
        <ButtonVariant1
          color={"bg-red-300"}
          text="Most Viewed"
          className={"text-[12px]"}
          py={"1"}
        />{" "}
        <ButtonVariant1
          color={"bg-red-300"}
          text="Most Viewed"
          className={"text-[12px]"}
          py={"1"}
        />{" "}
        <ButtonVariant1
          color={"bg-red-300"}
          text="Most Viewed"
          className={"text-[12px]"}
          py={"1"}
        />{" "}
        <ButtonVariant1
          color={"bg-red-300"}
          text="Most Viewed"
          className={"text-[12px]"}
          py={"1"}
        />
        <ButtonVariant1
          color={"bg-red-300"}
          text="Most Viewed"
          className={"text-[12px]"}
          py={"1"}
        />
        {/* Price Range */}
        <div className="flex items-center">
          <InputVariant2
            placeholder="From"
            className="max-w-[50px]"
            defaultValue="10000"
          />
          <h4 className="text-sm mx-2">Price Range</h4>
          <InputVariant2
            placeholder="To"
            className="max-w-[50px]"
            defaultValue="1000000"
          />
        </div>
      </div>
      {/* Category Section */}
      <h3
        className="text-[#E6E9FF] font-black text-lg my-3 flex items-center cursor-pointer"
        onClick={() => setShowCategory(!showCategory)}
      >
        Categories{" "}
        {showCategory ? (
          <ChevronUp size={15} className="ml-1" />
        ) : (
          <ChevronDown size={15} className="ml-1" />
        )}
      </h3>
      <div className={showCategory ? "flex flex-col" : "hidden"}>
        {/* General Categories */}
        <div className="flex gap-2">
          {[
            { name: "Graphic Card", pic: "something.png" },
            { name: "Motherboard" },
            { name: "Motherboard" },
            { name: "Motherboard" },
            { name: "Motherboard" },
            { name: "Motherboard" },
            { name: "Motherboard" },
          ].map((e, i) => (
            <div className="card-variant-1 flex flex-col justify-center items-center flex-1 max-w-[150px] aspect-square rounded-md">
              <img src={e.pic} alt="img" />
              <p className="text-sm">{e.name}</p>
            </div>
          ))}
        </div>

        {/* Sub Categories */}
        <div className="flex gap-2 mt-2">
          {["Gaming", "Workstations", "Mobile"].map((e, i) => (
            <ButtonVariant1 color={"bg-red-300"} text={e} className="text-sm" />
          ))}
        </div>
      </div>
      {/* Brand Section */}
      <h3
        className="text-[#E6E9FF] font-black text-lg my-3 flex items-center cursor-pointer"
        onClick={() => setShowBrands(!showBrands)}
      >
        Brands{" "}
        {showBrands ? (
          <ChevronUp size={15} className="ml-1" />
        ) : (
          <ChevronDown size={15} className="ml-1" />
        )}
      </h3>
      <div className={showBrands ? "flex gap-2" : "hidden"}>
        {[
          { pic: "./nvidia.png", name: "NVIDIA" },
          { pic: "./nvidia.png", name: "NVIDIA" },
        ].map((e, i) => (
          <ButtonVariant1
            py={1}
            px={3}
            text={
              <div className="flex items-center">
                <div className="p-1 bg-[rgb(24,23,27)] rounded-md aspect-auto w-10 flex justify-between items-center">
                  <img src={e.pic} alt="company" className="w-5 h-auto" />
                </div>
                <p className="text-sm ml-1">{e.name}</p>
              </div>
            }
          />
        ))}
      </div>

      {/* Product Section */}
      <div className="my-4 flex-wrap flex gap-3">
        {[
          {
            companyImg: "./nvidia.png",
            companyName: "NVIDIA",
            productImg: "./test_product.png",
            title: "MSI GeForce RTX™ 5090 32G VENTUS 3X OC",
            rate: "4.5",
            price: "10000$",
          },
          {
            companyImg: "./nvidia.png",
            companyName: "NVIDIA",
            productImg: "./test_product.png",
            title: "MSI GeForce RTX™ 5090 32G VENTUS 3X OC",
            rate: "4.5",
            price: "10000$",
          },
          {
            companyImg: "./nvidia.png",
            companyName: "NVIDIA",
            productImg: "./test_product.png",
            title: "MSI GeForce RTX™ 5090 32G VENTUS 3X OC",
            rate: "4.5",
            price: "10000$",
          },
          {
            companyImg: "./nvidia.png",
            companyName: "NVIDIA",
            productImg: "./test_product.png",
            title: "MSI GeForce RTX™ 5090 32G VENTUS 3X OC",
            rate: "4.5",
            price: "10000$",
          },
          {
            companyImg: "./nvidia.png",
            companyName: "NVIDIA",
            productImg: "./test_product.png",
            title: "MSI GeForce RTX™ 5090 32G VENTUS 3X OC",
            rate: "4.5",
            price: "10000$",
          },
        ].map((e, i) => (
          <ShoppingCard
            companyImg={e.companyImg}
            companyName={e.companyName}
            productImg={e.productImg}
            title={e.title}
            rate={e.rate}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Explore);
