import { Check, Pencil, Plus, Search, Trash, X } from "lucide-react";
import {
  ButtonVariant1,
  ButtonVariant2,
  ButtonVariant4,
} from "../components/buttons";
import { InputVariant1 } from "../components/inputs";
import Table from "../components/tables";
import { OrderItems } from "./home";

export default function ProductManageMent() {
  //fetching orders
  const RecentOrders = [
    {
      orderNumber: "123123131",
      customerName: "Some Guy",
      status: "Delivered",
      dateNtime: "123/123/1",
      price: 1000,
    },
    {
      orderNumber: "123123131",
      customerName: "Some Guy",
      status: "Delivered",
      dateNtime: "123/123/1",
      price: 1000,
    },
    {
      orderNumber: "123123131",
      customerName: "Some Guy",
      status: "Delivered",
      dateNtime: "123/123/1",
      price: 1000,
    },
    {
      orderNumber: "123123131",
      customerName: "Some Guy",
      status: "Delivered",
      dateNtime: "123/123/1",
      price: 1000,
    },
  ];

  return (
    <div>
      <h3 className="mt-1 font-black text-xl mb-2">Recent Orders</h3>
      <div className="flex flex-wrap gap-2">
        <InputVariant1
          placeholder="Search"
          img={<Search size={15} />}
          className={"py-1 px-2 w-[200px] text-sm"}
        />
        {["Pending", "Shipped", "Delivered"].map((e) => (
          <ButtonVariant1 text={e} color={"bg-red-300"} className={"text-sm"} />
        ))}
      </div>

      <Table
        className="mt-3"
        headerItems={[
          "Order Number",
          "Customer Name",
          "Status",
          "Date & Time",
          "Total Price",
        ]}
        list={RecentOrders.map((e) =>
          OrderItems(
            e.customerName,
            e.customerName,
            e.status,
            e.dateNtime,
            e.price
          )
        )}
      />
    </div>
  );
}

export function ProductItem(
  productName,
  productCompany,
  price,
  installable,
  inventoryStock
) {
  return [
    <h2>{productName}</h2>,
    <h2>{productCompany}</h2>,
    <h2>{price}</h2>,
    <h2>{installable ? <Check size={17} /> : <X size={17} />}</h2>,
    <div className="flex items-center">
      <h2>{inventoryStock}</h2>
    </div>,
    <div className="flex">
      <ButtonVariant2 img={<Pencil size={12} />} />
      <ButtonVariant2 img={<Trash size={12} />} className={"ml-2"} />
    </div>,
  ];
}
