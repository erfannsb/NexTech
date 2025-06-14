import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Table from "./../components/tables";
import { ShoppingBasket, Store } from "lucide-react";
import { ButtonVariant2, ButtonVariant4 } from "./../components/buttons";
import { Rating } from "@smastrom/react-rating";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const shops = [
    ["ShopOne", "Very good", 1000],
    ["ShopOne", "Very good", 1000],
    ["ShopOne", "Very good", 1000],
  ];

  return (
    <div className="grid grid-cols-[40%_60%] grid-rows-1 gap-4">
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
            className="flex items-center justify-center"
          >
            <SwiperSlide className="flex justify-center items-center h-full">
              <img src="msi_product.png" />
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
      <div>
        {/* Category */}
        <div>Category</div>
        {/* Product Title */}
        <h1>Title</h1>
        {/* Product Company */}
        <div>
          <img alt="company image" />
          <h3>Company name</h3>
        </div>
        {/* Product Description */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu libero
          tortor. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        {/* Colors */}
        <div>
          <h3>Colors</h3>
          <ul>
            <li>l</li>
            <li>l</li>
            <li>l</li>
          </ul>
        </div>
        {/* Product Details */}
        <div>
          <h3>Details</h3>
          <div>blah blah</div>
        </div>
        {/* Comment */}
        <div>Comment</div>
      </div>
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
      <div className="flex w-full justify-between items-end border-b-[1px] border-[#26262B] pb-4 mb-4">
        {/* Average Rate */}
        <div className="flex flex-col items-center ">
          <h1 className="text-[45px]">{averageRate}</h1>
          <div className="flex h-[20px] w-[100px]">
            <Rating value={rating} onChange={setRating} />
          </div>
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
