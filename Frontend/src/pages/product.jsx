import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Table from "./../components/tables";
import { ChevronDown, ChevronUp, ShoppingBasket, Store } from "lucide-react";
import {
  ButtonVariant1,
  ButtonVariant2,
  ButtonVariant3,
  ButtonVariant4,
} from "./../components/buttons";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { CardVariant1 } from "../components/cards";

function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [moreDetails, setMoreDetails] = useState(false);

  const shops = [
    ["ShopOne", "Very good", 1000],
    ["ShopOne", "Very good", 1000],
    ["ShopOne", "Very good", 1000],
  ];

  return (
    <div className="grid grid-cols-[35%_65%] mx-4 grid-rows-1 gap-4 mb-20">
      {/* left column */}
      <div className="flex flex-col">
        {/* Main Image Slider */}
        <div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="flex items-center justify-center max-h-[70vh]"
          >
            <SwiperSlide className="flex justify-center items-center h-full">
              <img
                src="msi_product.png"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-3"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Details Table */}
        <div className="mt-4">
          <Table
            className="font-bold"
            footer={TableFooter({
              averageRate: 4.5,
              ratedNum: 100,
              price: 1000,
            })}
            headerItems={[
              <div className="flex items-center">
                <Store className="mr-2" size={16} /> Shop
              </div>,
              "Performance",
              "Price",
              "",
            ]}
            px={3}
            py={3}
            list={shops.map((e) => ShopItemGenerator(e[0], e[1], e[2]))}
          />
        </div>
      </div>
      {/* right column */}
      <div className="mx-5">
        {/* Category */}
        <div className="text-[#959595] text-md">
          Graphic Cards / MSI / Gaming GPUs
        </div>
        {/* Product Title */}
        <h1 className="my-2 font-black text-2xl">
          MSI GeForce RTX™ 5090 32G VENTUS 3X OC
        </h1>
        {/* Product Company */}
        <div className="flex items-center my-4">
          <div className="p-1 bg-[rgb(24,23,27)] rounded-md flex justify-between items-center">
            <img src={"./nvidia.png"} alt="company" className="w-6 h-auto" />
          </div>
          <h3 className="ml-2 text-[14px]">Company name</h3>
        </div>
        {/* Product Description */}
        <p className="text-[#E6E6E6] mt-2 text-md font-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu libero
          tortor. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        {/* Colors */}
        <div>
          <h3 className="text-[#E6E9FF] font-black text-2xl mt-8 mb-4">
            Colors
          </h3>
          <ul className="flex gap-3 mb-3">
            <li className={`bg-red-200 w-8 h-8 rounded-full`}></li>
            <li className={`bg-blue-200 w-8 h-8 rounded-full`}></li>
            <li className={`bg-gray-200 w-8 h-8 rounded-full`}></li>
            <li className={`bg-yellow-200 w-8 h-8 rounded-full`}></li>
          </ul>
        </div>
        {/* Product Details */}
        <div>
          <h3 className="text-[#E6E9FF] font-black text-2xl mt-8 mb-4">
            Details
          </h3>
          <div className="flex flex-wrap gap-3">
            {Array(5)
              .fill({ key: "VRAM", value: "32GB" })
              .map((val, ind) => (
                <CardVariant1
                  color={"bg-red-300"}
                  text={val.value}
                  header={val.key}
                  className={"min-w-[120px]"}
                />
              ))}
            {moreDetails &&
              Array(5)
                .fill({ key: "VRAM", value: "32GB" })
                .map((val, ind) => (
                  <CardVariant1
                    color={"bg-red-300"}
                    text={val.value}
                    header={val.key}
                    className={"min-w-[120px]"}
                  />
                ))}
          </div>
          <ButtonVariant3
            text={moreDetails ? "Show Less Details" : "Show More Details"}
            className="my-7 text-sm"
            img={moreDetails ? <ChevronUp /> : <ChevronDown />}
            onClick={() => setMoreDetails(!moreDetails)}
          />
        </div>
        {/* Comment */}
        <div className="text-[#E6E9FF] font-black text-2xl mt-8 mb-4">
          Comment
        </div>
        <div className="flex flex-col items-end">
          <textarea
            placeholder="Write Your Comment"
            className="card-variant-1 p-2 w-full rounded-lg font-light text-sm resize-none min-h-[100px]"
            draggable="false"
          />
          <ButtonVariant1 text="Submit" className="text-[13px] mt-2" />
        </div>

        <div className="flex flex-col">
          <Comment reply={Array(4).fill(<Comment />)} />
          <Comment />
        </div>
        <ButtonVariant3
          text="Show More Comment"
          className="text-[12px]"
          img={<ChevronDown />}
        />
      </div>
    </div>
  );
}

export function Comment({ reply }) {
  return (
    <div className="flex flex-col w-full my-5">
      <div className="flex w-full">
        {/* profile */}
        <img
          src=""
          alt=""
          className=" bg-gray-600 h-10 w-10 rounded-full object-cover"
        />
        {/* content */}
        <div className="w-full">
          <div className="flex justify-between w-full">
            <div className="flex">
              <h4 className="text-[#7F7F7F] font-medium mx-2 text-sm">
                Erfan Nasibi
              </h4>
              <p className="font-light mx-1 text-sm">
                I'm Literally Astonished How Cool This is
              </p>
            </div>
            <h5 className="text-[#7F7F7F] font-light text-sm ">1 weeks ago</h5>
          </div>
          {/* buttons */}
          <div className="flex mt-2 text-[12px]">
            <button className="text-[#7F7F7F] mx-2 hover:text-[#969696] cursor-pointer ">
              Reply
            </button>
            <h4>stars</h4>
          </div>
        </div>
      </div>
      {/* reply */}
      {reply && (
        <div className="ml-[19px] pl-5 my-3 border-l border-gray-600">
          {reply}
        </div>
      )}
    </div>
  );
}

// generate each list item
export function ShopItemGenerator(shopName, performance, price) {
  const performances = {
    "Very good": "#96C8A7",
    Bad: "#EE6969",
  };

  return [
    <div>{shopName}</div>,
    <div style={{ color: performances[performance] }}>{performance}</div>,
    <p>{price}</p>,
    <ButtonVariant2
      img={<ShoppingBasket size={14} />}
      className="rounded-xl"
    />,
  ];
}

export function TableFooter({ averageRate, ratedNum, price }) {
  const ratingRef = useRef(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ratingRef.current.contains(event.target)) {
        setRating(0);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div>
      {/* Review */}
      <div className="flex w-full justify-between items-center border-b-[1px] border-[#26262B] pb-4 mb-4">
        {/* Average Rate */}
        <div className="flex flex-col items-center ">
          <h1 className="text-[45px]">{averageRate}</h1>
          {/* Stars */}
          <h3>Stars here</h3>
        </div>
        <h4 className="max-w-[100px] text-right text-gray-400 text-[12px] font-normal">
          <span className="font-black">{ratedNum}</span> People Rated This
          Product
        </h4>
      </div>
      {/* Price */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-bold text-2xl">{price}$</h1>
          <h5>Selected From RTX WEX</h5>
        </div>
        <ButtonVariant4 text="Add" img={<ShoppingBasket />} className="h-fit" />
      </div>
    </div>
  );
}

export default React.memo(Product);
