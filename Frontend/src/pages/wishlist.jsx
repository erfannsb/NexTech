import {
  Calendar,
  CirclePoundSterling,
  Coins,
  CoinsIcon,
  ShoppingBasketIcon,
  ShoppingCart,
  Ticket,
  TicketPercent,
  Truck,
} from "lucide-react";
import { InputVariant1, InputVariant3 } from "../components/inputs";
import Table from "../components/tables";
import { useState } from "react";
import { CardVariant1 } from "../components/cards";
import { ButtonVariant3, ButtonVariant4 } from "../components/buttons";

export default function WishList() {
  const [paying, setPaying] = useState();
  const [month, setMonth] = useState();
  const [shipping, setShipping] = useState();

  return (
    <div className="grid grid-cols-2 grid-rows-2 mx-10 gap-5">
      {/* Wish List table */}
      <div className="col-start-1 col-end-3">
        <h2 className="text-lg font-bold">Wish List</h2>
        <p className="text-[#B6B6B6] text-md mb-2">
          Manage your wish list here
        </p>
        <Table
          headerItems={["Company", "Product", "Price", "Rate", "Category", ""]}
          list={[["blah", "blah", "blah", "blah", "blah", "blah"]]}
        />
      </div>
      {/* Purchase */}
      <div className="flex flex-col gap-2">
        <h3>Purchase</h3>
        <InputVariant1
          placeholder="Apply Coupan"
          img={<TicketPercent size={17} />}
          className="p-2 w-fit"
        />
        <InputVariant3
          placeholder="Choosing Paying Option"
          img={<CirclePoundSterling size={17} />}
          className="p-2 w-fit text-sm"
          selected={paying}
          onSelect={setPaying}
          options={["something", "things"]}
        />
        <InputVariant3
          placeholder="Choose Paying Month"
          img={<Calendar size={17} />}
          className="p-2 w-fit text-sm"
          selected={month}
          onSelect={setMonth}
          options={["something", "things"]}
        />
        <InputVariant3
          placeholder="Choosing Shipping Option"
          img={<Truck size={17} />}
          className="p-2 w-fit text-sm"
          selected={shipping}
          onSelect={setShipping}
          options={["something", "things"]}
        />

        <button className="underline text-[#6274F7] cursor-pointer w-fit text-sm">
          Edit Your Information
        </button>
        <div className="grid grid-template-columns: max-content max-content; grid-template-rows: max-content max-content; gap-3">
          <CardVariant1
            text="Felan Street, Besar Alley, Building Blah, Second Floor"
            header="Address Review"
            color="bg-[#EEBF69]"
            className="col-start-1 col-end-3"
          />
          <CardVariant1
            text="12102931301"
            header="Postal Code"
            color="bg-[#EE6969]"
          />
          <CardVariant1
            text="10 days "
            header="Estimated Delivery Time"
            color="bg-[#69EE69]"
          />
        </div>
      </div>
      {/* Confirm */}

      <div className="self-end">
        <div className="bg-[rgba(24,23,27,0.69)] p-4 text-white border border-[#26262B] rounded-md">
          <h2 className="text-lg font-bold">13 Items Selected</h2>
          <div className="flex flex-col">
            <div className="flex justify-between my-2">
              <h3>Interest Rate:</h3> <h4>10%</h4>
            </div>
            <div className="flex justify-between my-2">
              <h3>Interest Rate:</h3> <h4>10%</h4>
            </div>
            <div className="flex justify-between my-2">
              <h3>Interest Rate:</h3> <h4>10%</h4>
            </div>
            <div className="flex justify-between border-t border-[#26262B] pt-2 mt-2">
              <h3>Interest Rate:</h3> <h4>10%</h4>
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



function WishLi