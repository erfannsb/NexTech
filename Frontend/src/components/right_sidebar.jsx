import { ArrowUpRight, Plus, ShoppingCart, Trash2, Truck } from "lucide-react";
import { ButtonVariant1, ButtonVariant2, ButtonVariant3 } from "./buttons";
import { useState, useEffect, useRef } from "react";
import Table from "./tables";
import useUIStore from "../ui_storage";
export default function RightSidebar() {
  const isRightSideBarOpen = useUIStore((state) => state.rightSidebarOpen);

  const images = [
    "test_product.png",
    "test_product.png",
    "test_product.png",
    "test_product.png",
    "test_product.png",
  ];
  const containerRef = useRef(null);
  const deliveryRef = useRef(null);
  const [maxImages, setMaxImages] = useState(images.length);

  useEffect(() => {
    function updateMaxImages() {
      if (!containerRef.current || !deliveryRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const deliveryWidth = deliveryRef.current.offsetWidth;

      // Available width for images
      const availableWidth = containerWidth - deliveryWidth - 16; // 16px margin between images and text

      const imageWidth = 40; // 10rem = 40px (tailwind w-10)
      const overlap = 8; // because -ml-2 means 8px overlap between images
      // Effective width per additional image (except first one)
      const effectiveImageWidth = imageWidth - overlap;

      if (availableWidth < imageWidth) {
        // no image fits
        setMaxImages(0);
        return;
      }

      // 1 image always fits, next images take less space due to overlap
      // Formula: 1 * imageWidth + (n-1) * effectiveImageWidth <= availableWidth
      const n =
        Math.floor((availableWidth - imageWidth) / effectiveImageWidth) + 1;

      setMaxImages(Math.min(n, images.length));
    }

    updateMaxImages();
    window.addEventListener("resize", updateMaxImages);
    return () => window.removeEventListener("resize", updateMaxImages);
  }, [images.length]);

  const ListItems = [
    ["nvidia.png", "Nvidia RTX 5090Ti", 1000, 1],
    ["nvidia.png", "Nvidia RTX 5090Ti", 1000, 4],
    ["nvidia.png", "Nvidia RTX 5090Ti", 1000, 1],
    ["nvidia.png", "Nvidia RTX 5090Ti", 1000, 2],
  ];

  const ConvertedList = ListItems.map((e, i) => {
    return WishListRowMaker(e[0], e[1], e[2], e[3]);
  });

  return (
    <div
      className={`${
        isRightSideBarOpen ? "flex" : "hidden"
      } flex-col h-full overflow-hidden sidebar col-start-3 col-end-4 row-start-2 row-end-3 p-4`}
    >
      {/* Header 1 */}
      <div className="flex justify-between items-center">
        <div className={`font-black text-xl`}>Current Order</div>
      </div>
      {/* Order Items div */}
      <div className="card-variant-3 py-4 px-3 mt-3 rounded-md">
        {/* List of order items */}
        <div
          ref={containerRef}
          className="flex items-center justify-between w-full"
          style={{ maxWidth: "400px" }} // or your container width
        >
          <div className="flex items-center">
            {images.slice(0, maxImages).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Avatar ${i + 1}`}
                className={`w-10 h-10 rounded-full object-cover border border-[#26262B] shrink-0 ${
                  i !== 0 ? "-ml-2" : ""
                }`}
              />
            ))}
          </div>
          <p
            ref={deliveryRef}
            className="text-[12px] w-[100px] text-gray-400 text-right mr-2"
          >
            Delivery within 10 days
          </p>
        </div>

        <ButtonVariant1
          text="In Transmit"
          className="rounded-xl text-gray-300 text-[12px] mt-5 mb-1"
          img={<Truck size={16} />}
        />

        {/* details */}
        <div className="flex items-end justify-between">
          {/* number of selected items */}
          <div className="">
            <p className="font-black text-md ml-1 mt-2">N Selected Items</p>
            <h3 className="font-black text-lg ml-1 mb-1 text-blue-300">
              3000$
            </h3>
          </div>
          <ButtonVariant3
            text="Show more"
            img={<ArrowUpRight />}
            className={"ml-3 text-[11px] w-[100px]"}
          />
        </div>
      </div>
      {/* Current Wish List */}
      {/* header */}
      <div className="flex justify-between items-center my-3 ">
        <h3 className="font-black text-xl">Wish List</h3>
        <button className="underline text-[#6274F7] cursor-pointer">
          View All
        </button>
      </div>
      <Table
        headerFontWeight="medium"
        headerFontSize="sm"
        headerItems={["Company", "Product", "Price", "Quantity"]}
        list={ConvertedList}
        className=" overflow-y-auto max-h-full text-sm"
        py={3}
        px={2}
        footer={
          <>
            <div className="flex items-end justify-between">
              {/* number of selected items */}
              <div className="">
                <p className="font-black text-lg">N Selected Items</p>
                <h3 className="font-black">3000$</h3>
              </div>
              <ButtonVariant3
                text="Purchase"
                img={<ShoppingCart />}
                className={"ml-3 text-[11px] w-[100px]"}
              />
            </div>
          </>
        }
      />
    </div>
  );
}

export function WishListRowMaker(companyImg, productTilte, price, quantity) {
  return [
    <div className=" bg-[rgb(24,23,27)] rounded-md w-fit p-1">
      <img src={companyImg} alt="company" className="w-6" />
    </div>,
    <h3 className="text-[11px] font-light">{productTilte}</h3>,
    <h3 className="text-[11px] font-light">{price}</h3>,
    <h4 className="w-full text-center text-[11px] font-light">{quantity}</h4>,
  ];
}
