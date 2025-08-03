import { Check, Pencil, Plus, Search, Trash, X } from "lucide-react";
import {
  ButtonVariant1,
  ButtonVariant2,
  ButtonVariant4,
} from "../components/buttons";
import { InputVariant1 } from "../components/inputs";
import Table from "../components/tables";
import { ShoppingCard } from "../components/cards";

export default function ProductManageMent() {
  //fetching products

  const products = [
    {
      productName: "Something in you and Me",
      productCompany: "Nvidia",
      price: "1000",
      installable: true,
      inventoryStock: "100",
    },
  ];

  return (
    <div>
      <h3 className="mt-1 font-black text-xl mb-2">Shop Inventory</h3>
      <div className="flex flex-wrap gap-2">
        <InputVariant1
          placeholder="Search"
          img={<Search size={15} />}
          className={"py-1 px-2 w-[200px] text-sm"}
        />
        {["Pending", "Shipped", "Delivered"].map((e) => (
          <ButtonVariant1 text={e} color={"bg-red-300"} className={"text-sm"} />
        ))}

        <ButtonVariant4
          className={"ml-auto"}
          text={"Add Product"}
          img={<Plus size={18} />}
        />
      </div>

      <Table
        className="mt-5"
        headerItems={[
          "Product Name",
          "Product Company",
          "Price",
          "Installable",
          "Inventory stock",
        ]}
        list={products.map((e) =>
          ProductItem(
            e.productName,
            e.productCompany,
            e.price,
            e.installable,
            e.inventoryStock
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
