import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { InputVariant1, InputVariant2 } from "../components/inputs";
import { ButtonVariant1 } from "../components/buttons";
import { ShoppingCard } from "../components/cards";
import { GetCategories } from "../../data/products";

function buildQueryString(filters) {
  const params = new URLSearchParams();

  if (filters.search) params.append("search", filters.search);
  if (filters.category) params.append("category", filters.category);
  if (filters.subCategory) params.append("sub_category", filters.subCategory);
  if (filters.brand) params.append("brand", filters.brand);
  if (filters.priceFrom) params.append("price_min", filters.priceFrom);
  if (filters.priceTo) params.append("price_max", filters.priceTo);
  if (filters.sortBy) params.append("ordering", filters.sortBy); // backend sorting

  return params.toString();
}

function Explore() {
  const [showCategory, setShowCategory] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [activeFilterButton, setActiveFilterButton] = useState("mostRelevant");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setSubCategory] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    category: null,
    subCategory: null,
    brand: null,
    priceFrom: null,
    priceTo: null,
    sortBy: "mostRelevant",
  });

  // Fetch Categories

  const Categories_Images = {
    cpu: "./Category Images/cpu.svg",
    gpu: "./Category Images/gc.svg",
    motherboard: "./Category Images/mb.svg",
    ram: "./Category Images/ram.svg",
    "storage device": "./Category Images/sd.svg",
    "power supply": "./Category Images/psu.svg",
    "cooling system": "./Category Images/cs.svg",
  };

  const [Categories, setCategories] = useState([]);

  const [subCategories, setsubCategory] = useState([]);

  const Brands_images = {
    nvidia: "./nvidia.png",
    intel: "./nvidia.png",
    amd: "./nvidia.png",
  };

  const Brands = ["Nvidia", "Intel", "AMD"];

  //fetch products

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = buildQueryString(filters);
      const res = await fetch(`/products/products/?${query}`);
      const data = await res.json();
      console.log(data);
      setProducts(data || []);
    };

    fetchProducts();
  }, [filters]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetCategories();

      let categories = [];
      let subCategories = [];
      for (let cat of data) {
        if (cat.parentcategory == null) {
          categories.push(cat);
        } else {
          if (subCategories[cat.parentcategory] == null) {
            subCategories[cat.parentcategory] = [];
          } else {
            subCategories[cat.parentcategory].push(cat);
          }
        }
      }
      setCategories(categories);
      setsubCategory(subCategories);
    };

    fetchProducts();
  }, []);

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
          className="w-[300px] py-[5px] px-2 max-sm:py-2 max-sm:w-full"
          img={<Search strokeWidth={1.5} size={17} />}
          onChange={(e) => {
            const d = e.target.value;
            setFilters({
              ...filters,
              search: d,
            });
          }}
        />
        {/* Filtering */}
        <ButtonVariant1
          color={"bg-[#EA5151]"}
          text="Most Relevant"
          className={`text-[12px]  ${
            activeFilterButton == "mostRelevant" ? "card-active" : ""
          }`}
          onClick={() => {
            setActiveFilterButton("mostRelevant");
            setFilters({ ...filters, sortBy: "mostRelevant" });
          }}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#EE6969]"}
          text="Most Viewed"
          className={`text-[12px]  ${
            activeFilterButton == "mostViewed" ? "card-active" : ""
          }`}
          onClick={() => {
            setActiveFilterButton("mostViewed");
            setFilters({ ...filters, sortBy: "mostViewed" });
          }}
          py={"2"}
        />{" "}
        <ButtonVariant1
          color={"bg-[#EEBF69]"}
          text="Newest"
          className={`text-[12px] ${
            activeFilterButton == "newest" ? "card-active" : ""
          }`}
          onClick={() => {
            setActiveFilterButton("newest");
            setFilters({ ...filters, sortBy: "newest" });
          }}
          py={"2"}
        />{" "}
        <ButtonVariant1
          color={"bg-[#D8EE69]"}
          text="Most Sells"
          className={`text-[12px]  ${
            activeFilterButton == "mostSelles" ? "card-active" : ""
          }`}
          onClick={() => {
            setActiveFilterButton("mostSelles");
            setFilters({ ...filters, sortBy: "mostSelles" });
          }}
          py={"2"}
        />{" "}
        <ButtonVariant1
          color={"bg-[#95EE69]"}
          text="Cheapest"
          className={`text-[12px]  ${
            activeFilterButton == "cheapest" ? "card-active" : ""
          }`}
          onClick={() => {
            setActiveFilterButton("cheapest");
            setFilters({ ...filters, sortBy: "cheapest" });
          }}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#69EEB4]"}
          text="Most Expensive"
          className={`text-[12px]  ${
            activeFilterButton == "mostExpensive" ? "card-active" : ""
          }`}
          onClick={() => {
            setActiveFilterButton("mostExpensive");
            setFilters({ ...filters, sortBy: "mostExpensive" });
          }}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#69EEEE]"}
          text="Fastest Delivery"
          className={`text-[12px]  ${
            activeFilterButton == "fastestDelivery" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("fastestDelivery")}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#6988EE]"}
          text="Recommended"
          className={`text-[12px]  ${
            activeFilterButton == "recommended" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("recommended")}
          py={"2"}
        />
        <ButtonVariant1
          color={"bg-[#8C69EE]"}
          text="Best"
          className={`text-[12px]  ${
            activeFilterButton == "best" ? "card-active" : ""
          }`}
          onClick={() => setActiveFilterButton("best")}
          py={"2"}
        />
      </div>

      {/* Advance Filters */}

      <h4
        className="mt-3 text-sm text-zinc-400 flex items-center cursor-pointer hover:text-zinc-200"
        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
      >
        {!showAdvancedFilters ? "Show" : "Hide"} Advance Filters
        {!showAdvancedFilters ? (
          <ChevronDown size={15} className="ml-1" />
        ) : (
          <ChevronUp size={15} className="ml-1" />
        )}
      </h4>
      {showAdvancedFilters && (
        <>
          {/* Price Range */}
          <h3
            className="text-[#E6E9FF] font-black text-base my-3 flex items-center cursor-pointer max-sm:text-sm"
            onClick={() => setShowPriceRange(!showPriceRange)}
          >
            Price Range
            {showPriceRange ? (
              <ChevronUp size={15} className="ml-1" />
            ) : (
              <ChevronDown size={15} className="ml-1" />
            )}
          </h3>
          {showPriceRange && (
            <div className="flex items-center flex-wrap gap-2">
              <InputVariant2
                placeholder="From"
                defaultValue="0"
                onChange={(e) => {
                  const d = e.target.value;
                  setFilters({
                    ...filters,
                    priceFrom: parseInt(d),
                  });
                }}
              />
              <InputVariant2
                placeholder="To"
                defaultValue="100000000"
                onChange={(e) => {
                  const d = e.target.value;
                  setFilters({
                    ...filters,
                    priceTo: parseInt(d),
                  });
                }}
              />
            </div>
          )}

          {/* Category Section */}
          <h3
            className="text-[#E6E9FF] font-black text-base my-3 flex items-center cursor-pointer max-sm:text-base"
            onClick={() => setShowCategory(!showCategory)}
          >
            Categories
            {showCategory ? (
              <ChevronUp size={15} className="ml-1" />
            ) : (
              <ChevronDown size={15} className="ml-1" />
            )}
          </h3>

          <div className={showCategory ? "flex flex-col" : "hidden"}>
            <button
              onClick={() => {
                setFilters({ ...filters, category: null });
                setActiveCategory(null);
              }}
              className={`text-sm w-fit  items-center mb-3 text-gray-200 hover:text-gray-400 cursor-pointer transition duration-100 ${
                activeCategory == null ? "hidden" : "flex"
              }`}
            >
              <X size={15} className="mr-1" /> Clear Category
            </button>
            {/* General Categories */}
            <div className="flex gap-2 flex-wrap">
              {Categories.map((e, i) => (
                <div
                  className={`card-variant-3 flex md:flex-col justify-center items-center flex-1 max-w-[150px] md:aspect-square rounded-md hover:scale-[1.01] transition duration-150 cursor-pointer max-md:py-1 max-md:px-2  ${
                    activeCategory == e.categoryid ? "card-active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(e.categoryid);
                    setFilters({
                      ...filters,
                      category: e.categoryid,
                    });
                  }}
                >
                  <img
                    src={Categories_Images[e.categoryname.toLocaleLowerCase()]}
                    alt="img"
                    className="md:w-[50%] max-md:w-[40px] min-w-[20px] mb-2 aspect-auto select-none "
                  />
                  <p className="text-sm px-2 select-none text-center max-xl:text-[10px] max-md:no-eclipse">
                    {e.categoryname}
                  </p>
                </div>
              ))}
            </div>

            {/* Sub Categories */}
            <div className="flex gap-2 mt-2 flex-wrap">
              {activeCategory != null &&
                subCategories[activeCategory].map((e, i) => (
                  <ButtonVariant1
                    color={"bg-red-300"}
                    text={e.categoryname}
                    onClick={() => {
                      setSubCategory(e.categoryname);
                      setFilters({
                        ...filters,
                        category: e.categoryid,
                      });
                    }}
                    className={`${
                      activeSubCategory == e.categoryname ? "card-active-2" : ""
                    } text-sm max-md:text-[11
                
                px]`}
                    hover={false}
                  />
                ))}
            </div>
          </div>
          {/* Brand Section */}
          <h3
            className="text-[#E6E9FF] font-black text-base my-3 flex items-center cursor-pointer max-sm:text-base"
            onClick={() => {
              setShowBrands(!showBrands);
            }}
          >
            Brands
            {showBrands ? (
              <ChevronUp size={15} className="ml-1" />
            ) : (
              <ChevronDown size={15} className="ml-1" />
            )}
          </h3>

          <div className={showBrands ? "flex flex-col" : "hidden"}>
            <button
              onClick={() => {
                setActiveBrand(null);

                setFilters({
                  ...filters,
                  brand: null,
                });
              }}
              className={`text-sm w-fit  items-center mb-3 text-gray-200 hover:text-gray-400 cursor-pointer transition duration-100 ${
                activeBrand == null ? "hidden" : "flex"
              }`}
            >
              <X size={15} className="mr-1" /> Clear Category
            </button>
            <div className="flex gap-2">
              {Brands.map((e, i) => (
                <ButtonVariant1
                  px={3}
                  className={activeBrand == e ? "card-active-2" : ""}
                  onClick={() => {
                    setActiveBrand(e);
                    setFilters({
                      ...filters,
                      brand: e,
                    });
                  }}
                  py={2}
                  text={
                    <div className="flex items-center">
                      <div className=" bg-[rgb(24,23,27)] rounded-md aspect-auto p-1 flex justify-center items-center">
                        <img
                          src={Brands_images[e.toLocaleLowerCase()]}
                          alt="company"
                          className="w-5 h-auto"
                        />
                      </div>
                      <p className="text-[12px] ml-1">{e}</p>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </>
      )}
      {/* Product Section */}
      <div className="my-4 grid  grid-cols-4 gap-3 max-xl:grid-cols-3 max-md:grid-cols-1">
        {products.map((e, i) => {
          const sortedShops = [...e.shop_products].sort(
            (a, b) => a.price - b.price
          );
          const lowestPrice = sortedShops[0]?.price || 0; // optional fallback

          return (
            <ShoppingCard
              id={e.productid}
              companyImg={Brands_images[e.brand.toLowerCase()]}
              companyName={e.brand}
              productImg={e.thumbnail}
              title={e.name}
              rate={e.rating}
              shops={sortedShops}
              price={lowestPrice}
              is_available={e.is_available}
            />
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Explore);
