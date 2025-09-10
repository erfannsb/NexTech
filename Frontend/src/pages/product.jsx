import React, { useState, useRef, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Table from "./../components/tables";
import {
  ChevronDown,
  ChevronUp,
  CircleOff,
  ShoppingBasket,
  Store,
} from "lucide-react";
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
import {
  GetDetails,
  GetImageurlProducts,
  GetProduct,
  GetComments,
} from "../../data/products";
import { useParams } from "react-router";
import { fetchWithAuth } from "../../data/api";
import { GetOrderings, PostOrdering, PostOrderItem } from "../../data/orders";
import useUIStore from "./../ui_storage";
function Product() {
  const [moreDetails, setMoreDetails] = useState(false);
  const [screenIsSmall, setScreenIsSmall] = useState(window.innerWidth < 768);
  const { id: productIdParam } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState(false);
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const commentRef = useRef(null);
  const [commentError, setCommentError] = useState(false);

  const onComment = async () => {
    const commentText = commentRef.current.value;

    if (!commentText) {
      setCommentError("Comment cannot be empty");
      return;
    }

    const res = await fetchWithAuth(() =>
      fetch("/products/comment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productid: productIdParam,
          commenttext: commentText,
        }),
      })
    );
    if (res.ok) {
      let data = await res.json();
      setComments((prevComments) => [
        {
          commentnum: data.commentnum,
          customer_name: data.customer_name,
          commenttext: data.commenttext,
          formatted_date: data.formatted_date,
          rating: data.rating,
          replies: [],
        },
        ...prevComments,
      ]);
      setCommentError("");
    } else {
      setCommentError(res.error || "Failed to submit comment");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProduct(productIdParam);
      setProduct(data);
      const images = await GetImageurlProducts(productIdParam);
      setImages(images);
      const details = await GetDetails(productIdParam);
      setDetails(details);
      const comments = await GetComments(productIdParam);
      setComments(comments);
    };
    fetchData();

    const handleResize = () => {
      setScreenIsSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [productIdParam]);

  const detailColors = useMemo(() => {
    return details.map(() => {
      const colors = [
        "bg-red-400",
        "bg-blue-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-purple-400",
        "bg-pink-400",
        "bg-indigo-400",
        "bg-teal-400",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    });
  }, [details]);

  return (
    <div className="grid xl:grid-cols-[35%_65%] max-xl:grid-cols-[50%_50%] max-md:grid-cols-[100%] md:mx-4 grid-rows-1 gap-4 mb-20">
      {/* left column */}
      {!screenIsSmall && (
        <LeftColumn
          images={images}
          rating={product.rating}
          product={product}
          shops={product.shop_products}
          countedrates={product.countedrates}
        />
      )}

      {/* right column */}
      <div className="mx-5 max-md:row-start-1">
        {/* Category */}
        <div className="text-[#959595] text-md">
          {product.categories_names?.join(" / ")}
        </div>
        {/* Product Title */}
        <h1 className="my-2 font-black text-2xl">{product.name}</h1>
        {/* Product Company */}
        <div className="flex items-center my-4">
          <div className="p-1 bg-[rgb(24,23,27)] rounded-md flex justify-between items-center">
            <img src={"/nvidia.png"} alt="company" className="w-6 h-auto" />
          </div>
          <h3 className="ml-2 text-[14px]">{product.brand}</h3>
        </div>
        {screenIsSmall && <LeftColumn images={images} />}
        {/* Product Description */}
        <p className="text-[#E6E6E6] mt-2 text-md font-md">
          {product.description}
        </p>

        {/* Product Details */}
        <div>
          <h3 className="text-[#E6E9FF] font-black text-2xl mt-8 mb-4">
            Details
          </h3>
          <div className="flex flex-wrap gap-3">
            {details.slice(0, 5).map((val, ind) => (
              <CardVariant1
                key={ind}
                color={detailColors[ind] || "bg-gray-400"}
                text={val.attributevalue}
                header={val.attributename}
                className={"min-w-[120px]"}
              />
            ))}
            {moreDetails &&
              details
                .slice(5)
                .map((val, ind) => (
                  <CardVariant1
                    key={ind + 5}
                    color={detailColors[ind + 5] || "bg-gray-400"}
                    text={val.attributevalue}
                    header={val.attributename}
                    className={"min-w-[120px]"}
                  />
                ))}
          </div>
          {details.length > 5 && (
            <ButtonVariant3
              text={moreDetails ? "Show Less Details" : "Show More Details"}
              className="my-7 text-sm"
              img={moreDetails ? <ChevronUp /> : <ChevronDown />}
              onClick={() => setMoreDetails(!moreDetails)}
            />
          )}
        </div>
        {/* Comment */}
        <div className="text-[#E6E9FF] font-black text-2xl mt-8 mb-4">
          Comment
        </div>
        <div className="flex flex-col items-end">
          <textarea
            ref={commentRef}
            placeholder="Write Your Comment"
            className="card-variant-1 p-2 w-full rounded-lg font-light text-sm resize-none min-h-[100px]"
            draggable="false"
          />
          <ButtonVariant1
            text="Submit"
            className="text-[13px] mt-2"
            onClick={onComment}
          />
        </div>
        {commentError && (
          <div className="text-red-500 text-sm mt-2">{commentError}</div>
        )}

        <div className="flex flex-col">
          {Array.isArray(comments) || comments.length > 0 ? (
            comments.map((comment) => (
              <Comment
                key={comment.commentnum}
                name={comment.customer_name}
                text={comment.commenttext}
                date={comment.formatted_date}
                stars={comment.rating}
                replies={comment.replies}
              />
            ))
          ) : (
            <div className="flex justify-center items-center">
              No Comment Yet
            </div>
          )}
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

// Images and Shops
export function LeftColumn({ images, rating, product, shops, countedrates }) {
  const activeUser = useUIStore((state) => state.active_user);
  const setBasketNumber = useUIStore((state) => state.setBasketNumber);
  const basketNumber = useUIStore((state) => state.basketNumber);
  const addToBasket = async (shopid) => {
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

    let shopId = shopid;

    const resFromShopProduct = await fetch(
      `/shops/shopProduct/?shopid=${shopId}&productid=${product.productid}`
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

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  shops = shops?.sort((a, b) => a.price - b.price);
  return (
    <div className="flex flex-col mb-5">
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
          {Array.isArray(images) &&
            images.map((e, idx) => (
              <SwiperSlide
                key={(e && e.image_url) || idx}
                className="flex justify-center items-center h-full"
              >
                <img
                  src={(e && e.image_url) || undefined}
                  alt="product"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
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
          {Array.isArray(images) &&
            images.map((e, idx) => (
              <SwiperSlide key={(e && e.image_url) || idx}>
                <img src={(e && e.image_url) || undefined} alt="thumb" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* Details Table */}
      {shops?.length > 0 ? (
        <div className="mt-4">
          <Table
            className="font-bold"
            responsive={false}
            footer={
              <TableFooter
                averageRate={rating}
                ratedNum={countedrates}
                price={shops[0]?.price}
                shop={shops[0]?.shop}
                addToBasket={addToBasket}
              />
            }
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
            list={(Array.isArray(shops) ? shops : []).map((sp) =>
              ShopItemGenerator(
                sp?.shop?.shopname,
                sp?.shop?.rating,
                sp?.shop?.shopid,
                sp?.price,
                addToBasket
              )
            )}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h3 className="text-[#E6E9FF] font-bold text-lg py-3 px-4 mt-8 mb-4 bg-neutral-900 rounded-lg w-full flex items-center gap-2">
            <CircleOff size={16} className="mr-1" /> Not Available Right Now
          </h3>
        </div>
      )}
    </div>
  );
}

export function Comment({ replies, name, text, date, stars }) {
  return (
    <div className="flex flex-col w-full my-5">
      <div className="flex w-full">
        {/* profile */}
        <div className=" bg-gray-600 h-[40px] w-[40px] rounded-full"></div>
        {/* content */}
        <div className="w-full">
          <div className="flex justify-between w-full">
            <div className="flex">
              <h4 className="text-[#7F7F7F] font-medium mx-2 text-sm">
                {name}
              </h4>
              <p className="font-light mx-1 text-sm">{text}</p>
            </div>
            <h5 className="text-[#7F7F7F] font-light text-sm ">{date}</h5>
          </div>
          {/* buttons */}
          <div className="flex mt-2 text-[12px]">
            <button className="text-[#7F7F7F] mx-2 hover:text-[#969696] cursor-pointer ">
              Reply
            </button>
            <h4>{stars}</h4>
          </div>
        </div>
      </div>
      {/* replies */}
      {replies && replies.length > 0 && (
        <div className="ml-[19px] pl-5 my-3 border-l border-gray-600">
          {replies.map((reply) => (
            <Comment
              key={reply.commentnum}
              name={reply.customer_name}
              text={reply.commenttext}
              date={reply.formatted_date}
              stars={reply.rating}
              replies={reply.replies}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// generate each list item
export function ShopItemGenerator(
  shopName,
  performance,
  shopid,
  price,
  onBasketClick
) {
  const performances = {
    "Very good": "#96C8A7",
    Good: "#96C8A7",
    Average: "#96C8A7",
    Bad: "#EE6969",
  };

  if (performance > 4) {
    performance = "Very good";
  } else if (performance > 3) {
    performance = "Good";
  } else if (performance > 2) {
    performance = "Average";
  } else {
    performance = "Bad";
  }

  return [
    <div>{shopName}</div>,
    <div style={{ color: performances[performance] }}>{performance}</div>,
    <p>${price}</p>,
    <ButtonVariant2
      onClick={() => onBasketClick(shopid)}
      img={<ShoppingBasket size={14} />}
      className="rounded-xl"
    />,
  ];
}

export function TableFooter({
  averageRate,
  ratedNum,
  price,
  shop,
  addToBasket,
}) {
  const ratingRef = useRef(null);
  const [rating, setRating] = useState(0);

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
          <h1 className="font-bold text-2xl">${price}</h1>
          <h5>Selected From {shop?.shopname}</h5>
        </div>
        <ButtonVariant4
          onClick={() => addToBasket(shop?.shopid)}
          text="Add"
          img={<ShoppingBasket />}
          className="h-fit"
        />
      </div>
    </div>
  );
}

export default React.memo(Product);
