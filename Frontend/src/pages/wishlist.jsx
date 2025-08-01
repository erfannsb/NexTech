import {
  Calendar,
  CirclePoundSterling,
  Coins,
  CoinsIcon,
  Minus,
  Plus,
  ShoppingBasketIcon,
  ShoppingCart,
  Ticket,
  TicketPercent,
  Trash,
  Truck,
} from "lucide-react";
import { InputVariant1, InputVariant3 } from "../components/inputs";
import Table from "../components/tables";
import { useState } from "react";
import { CardVariant1 } from "../components/cards";
import {
  ButtonVariant1,
  ButtonVariant2,
  ButtonVariant3,
  ButtonVariant4,
} from "../components/buttons";

export default function WishList() {
  const [paying, setPaying] = useState();
  const [month, setMonth] = useState();
  const [shipping, setShipping] = useState();

  return (
    <div className="mb-10 grid grid-cols-2  md:grid-template-rows: max-content max-content;  max-md:grid-template-rows: max-content max-content max-content; md:mx-10 gap-5">
      {/* Wish List table */}
      <div className="col-start-1 col-end-3">
        <h2 className="text-xl font-bold">Wish List</h2>
        <p className="text-[#B6B6B6] text-md mb-4">
          Manage your wish list here
        </p>
        <Table
          className="max-h-[60vh]"
          py={1}
          headerItems={["Company", "Product", "Price", "Rate", "Category", ""]}
          list={[
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
            WishItem(
              "Nvidia",
              "./nvidia.png",
              "Cool Product",
              "1000",
              "4.4",
              "Super Cool",
              "3"
            ),
          ]}
        />
      </div>
      {/* Purchase */}
      <div className="flex flex-col gap-2 max-md:row-start-2 max-md:row-end-3 max-md:col-start-1 max-md:col-end-3">
        <h3 className="text-xl font-bold mt-3 mb-1">Purchase</h3>
        <InputVariant1
          placeholder="Apply Coupan"
          img={<TicketPercent size={17} />}
          className="p-2 w-fit max-md:w-full"
        />
        <InputVariant3
          placeholder="Choosing Paying Option"
          img={<CirclePoundSterling size={17} />}
          className="p-2 w-fit text-sm max-md:w-full max-md:max-w-full"
          selected={paying}
          onSelect={setPaying}
          options={["something", "things"]}
        />
        <InputVariant3
          placeholder="Choose Paying Month"
          img={<Calendar size={17} />}
          className="p-2 w-fit text-sm max-md:w-full max-md:max-w-full"
          selected={month}
          onSelect={setMonth}
          options={["something", "things"]}
        />
        <InputVariant3
          placeholder="Choosing Shipping Option"
          img={<Truck size={17} />}
          className="p-2 w-fit text-sm max-md:w-full max-md:max-w-full"
          selected={shipping}
          onSelect={setShipping}
          options={["something", "things"]}
        />

        <h3 className="mt-3 font-black text-xl">Your Information</h3>
        <div className="grid grid-template-columns: max-content max-content; grid-template-rows: max-content max-content; gap-3">
          <CardVariant1
            text="Felan Street, Besar Alley, Building Blah, Second Floor"
            header="Address Review"
            color="bg-[#EEBF69]"
            className="col-start-1 col-end-3"
            hide_bg={true}
          />
          <CardVariant1
            text="12102931301"
            header="Postal Code"
            color="bg-[#EE6969]"
            hide_bg={true}
          />
          <CardVariant1
            text="10 days "
            header="Estimated Delivery Time"
            color="bg-[#69EE69]"
            hide_bg={true}
          />

          <button className="underline text-[#6274F7] cursor-pointer w-fit text-sm mb-3">
            Edit Your Information
          </button>
        </div>
      </div>
      {/* Confirm */}

      <div className="md:self-end max-md:row-start-3 max-md:row-end-4 max-md:col-start-1 max-md:col-end-3">
        <div className="bg-[rgba(24,23,27,0.69)] p-4 text-white border border-[#26262B] rounded-md">
          <h2 className="text-lg font-bold">13 Items Selected</h2>
          <div className="flex flex-col">
            <div className="flex justify-between my-2">
              <h3 className="font-bold text-md">Interest Rate:</h3>
              <h4 className="text-[#BEC4F4] font-bold">10%</h4>
            </div>
            <div className="flex justify-between my-2">
              <h3 className="font-bold text-md">Products Total Price::</h3>
              <h4 className="text-[#BEC4F4] font-bold">20.000$</h4>
            </div>
            <div className="flex justify-between my-2">
              <h3 className="font-bold text-md">Delivery Price:</h3>
              <h4 className="text-[#BEC4F4] font-bold">15$</h4>
            </div>
            <div className="flex justify-between border-t border-[#26262B] py-2 mt-2">
              <h3 className="font-bold text-md">Total Price: </h3>
              <h4 className="text-[#BEC4F4] font-bold text-lg">22.015$</h4>
            </div>
          </div>
          <ButtonVariant4
            className="ml-auto mt-2"
            text="Confirm And Purchase"
            img={<ShoppingCart size={16} />}
          />
        </div>
      </div>
    </div>
  );
}

function WishItem(
  CompanyName,
  CompanyImg,
  ProductName,
  Price,
  Rate,
  Category,
  Quantity = 1
) {
  const [quantity, setQuantity] = useState(Quantity);
  return [
    <div className="flex items-center my-4">
      <div className="p-1 bg-[rgb(24,23,27)] rounded-md flex justify-between items-center">
        <img src={CompanyImg} alt="company" className="w-6 h-auto" />
      </div>
      <h3 className="ml-2 text-[14px]">{CompanyName}</h3>
    </div>,
    <h3>{ProductName}</h3>,
    <h3>{Price}</h3>,
    <h3>{Rate}</h3>,
    <h3>{Category}</h3>,
    <div className="flex justify-center items-center">
      <div className="flex items-center mr-2 card-variant-1 p-[5px] rounded-xl">
        <Minus
          size={14}
          className="mr-2 cursor-pointer"
          color="#ddd"
          onClick={() => setQuantity(parseInt(quantity) - 1)}
        />
        <input
          type="number"
          defaultValue={1}
          value={quantity}
          className="outline-0 w-7 text-center"
        />
        <Plus
          size={14}
          className="ml-2 cursor-pointer"
          color="#ddd"
          onClick={() => setQuantity(parseInt(quantity) + 1)}
        />
      </div>
      <ButtonVariant2 img={<Trash size={16} />} />
    </div>,
  ];
}
