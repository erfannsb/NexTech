import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Cross,
  CrossIcon,
  Delete,
  Search,
  X,
} from "lucide-react";
import { InputVariant1, InputVariant2 } from "../components/inputs";
import {
  ButtonVariant1,
  ButtonVariant2,
  ButtonVariant3,
} from "../components/buttons";
import { ShoppingCard } from "../components/cards";
function Explore() {
  const [showCategory, setShowCategory] = useState(true);
  const [showBrands, setShowBrands] = useState(true);
  const [activeFilterButton, setActiveFilterButton] = useState("mostRelevant");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setSubCategory] = useState(null);

  // Fetch Categories

  const Categories = [
    { name: "CPU", pic: "./Category Images/cpu.svg" },
    { name: "Graphic Card", pic: "./Category Images/gc.svg" },
    { name: "Motherboard", pic: "./Category Images/mb.svg" },
    { name: "RAM", pic: "./Category Images/ram.svg" },
    { name: "Storage Devices", pic: "./Category Images/sd.svg" },
    { name: "Power Supply Unit", pic: "./Category Images/psu.svg" },
    { name: "Cooling Systems", pic: "./Category Images/cs.svg" },
  ];

  const subCategories = {
    CPU: ["Dual-Core", "Quad-Core", "With iGPU", "12th Gen"],
    "Graphic Card": ["Single Fan", "Full-size", "Mini ITX"],
    Motherboard: ["DDR4", "DDR5", "PCIe x16"],
    RAM: ["4GB", "16GB", "2666 MHz", "6000 MHz"],
    "Storage Devices": ["HDD", " SATA SSD", "NVMe SSD"],
    "Power Supply Unit": ["500W-650W", "Non-Modular", "Fully Modular"],
    "Cooling Systems": ["Air Cooler", "AIO Liquid Cooler"],
  };

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
          className="w-[300px] py-[5px] px-2"
          img={<Search strokeWidth={1.5} size={17} />}
        />
        {/* Filtering */}
        <ButtonVariant1
          color={"bg-[#EA5151]"}
          text="Most Relevant"
          className={`text-[12px] ${
            activeFilterButton == "mostRelevant" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("mostRelevant")}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#EE6969]"}
          text="Most Viewed"
          className={`text-[12px] ${
            activeFilterButton == "mostViewed" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("mostViewed")}
          py={"2"}
        />{" "}
        <ButtonVariant1
          color={"bg-[#EEBF69]"}
          text="Newest"
          className={`text-[12px] ${
            activeFilterButton == "newest" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("newest")}
          py={"2"}
        />{" "}
        <ButtonVariant1
          color={"bg-[#D8EE69]"}
          text="Most Sells"
          className={`text-[12px] ${
            activeFilterButton == "mostSelles" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("mostSelles")}
          py={"2"}
        />{" "}
        <ButtonVariant1
          color={"bg-[#95EE69]"}
          text="Cheapest"
          className={`text-[12px] ${
            activeFilterButton == "cheapest" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("cheapest")}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#69EEB4]"}
          text="Most Expensive"
          className={`text-[12px] ${
            activeFilterButton == "mostExpensive" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("mostExpensive")}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#69EEEE]"}
          text="Fastest Delivery"
          className={`text-[12px] ${
            activeFilterButton == "fastestDelivery" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("fastestDelivery")}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#6988EE]"}
          text="Recommended"
          className={`text-[12px] ${
            activeFilterButton == "recommended" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("recommended")}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#8C69EE]"}
          text="Best"
          className={`text-[12px] ${
            activeFilterButton == "best" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("best")}
          py={"2"}
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
          {Categories.map((e, i) => (
            <div
              className={`card-variant-1 flex flex-col justify-center items-center flex-1 max-w-[150px] aspect-square rounded-md hover:scale-[1.01] transition duration-150 cursor-pointer ${
                activeCategory == e.name ? "card-active" : ""
              }`}
              onClick={() => setActiveCategory(e.name)}
            >
              <img
                src={e.pic}
                alt="img"
                className="w-[50%] min-w-[50px] mb-2 aspect-square select-none"
              />
              <p className="text-sm select-none">{e.name}</p>
            </div>
          ))}
        </div>

        {/* Sub Categories */}
        <div className="flex gap-2 mt-2">
          {activeCategory != null &&
            subCategories[activeCategory].map((e, i) => (
              <ButtonVariant1
                color={"bg-red-300"}
                text={e}
                onClick={() => setSubCategory(e.name)}
                className={
                  "text-sm " + activeSubCategory == e.name ? "card-active" : ""
                }
                hover={false}
              />
            ))}
        </div>

        <ButtonVariant3
          img={<X size={15} />}
          text={"Clear Category"}
          className={activeCategory == null ? "hidden" : "blcok mt-3"}
          onClick={() => setActiveCategory(null)}
        />
      </div>
      {/* Brand Section */}
      <h3
        className="text-[#E6E9FF] font-black text-lg my-3 flex items-center cursor-pointer"
        onClick={() => setShowBrands(!showBrands)}
      >
        Brands
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
            px={3}
            py={2}
            text={
              <div className="flex items-center">
                <div className=" bg-[rgb(24,23,27)] rounded-md aspect-auto p-1 flex justify-center items-center">
                  <img src={e.pic} alt="company" className="w-5 h-auto" />
                </div>
                <p className="text-[12px] ml-1">{e.name}</p>
              </div>
            }
          />
        ))}
      </div>

      {/* Product Section */}
      <div className="my-4 grid  grid-cols-4 gap-3">
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
