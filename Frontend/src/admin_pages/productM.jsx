import { Check, Pencil, Plus, Search, Trash, X } from "lucide-react";
import {
  ButtonVariant1,
  ButtonVariant2,
  ButtonVariant4,
} from "../components/buttons";
import { InputVariant1 } from "../components/inputs";
import Table from "../components/tables";
import useUIStore from "../ui_storage";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../data/api";
export default function ProductManageMent() {
  const shop_products = useUIStore((state) => state.shop_products);
  const setShopProducts = useUIStore((state) => state.setShopProducts);
  const active_shop = useUIStore((state) => state.active_shop);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log({ shop_products, active_shop });
      let resFromProducts = await fetchWithAuth(
        () => fetch(`/shops/shops/${active_shop.shopid}/products/`),
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!resFromProducts.ok) {
        console.error("Fetching Products Failed");
        return;
      }
      resFromProducts = await resFromProducts.json();
      setShopProducts(resFromProducts);
      setProducts(resFromProducts);
      console.log({ resFromProducts });
    };
    fetchData();
  }, []);

  console.log(shop_products);
  //fetching products

  return (
    <div>
      <h3 className="mt-1 font-black text-xl mb-2">Shop Inventory</h3>
      <div className="flex flex-wrap gap-2">
        <InputVariant1
          placeholder="Search"
          img={<Search size={15} />}
          className={"py-1 px-2 w-[200px] text-sm"}
        />

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
          "Rate",
          "Inventory stock",
          "Sells",
        ]}
        list={products?.map((e) =>
          ProductItem(
            e.name,
            e.brand,
            e.shop_products,
            e.rating,
            active_shop.shopid
          )
        )}
      />
    </div>
  );
}

export function ProductItem(
  productName,
  productCompany,
  shop_products,
  rate,
  shopid
) {
  const shopproduct = shop_products.filter((e) => e.shopid == shopid)[0];
  console.log(shopproduct);
  return [
    <h2>{productName}</h2>,
    <h2>{productCompany}</h2>,
    <h2>{shopproduct.price}</h2>,
    <h2>{rate}</h2>,
    <div className="flex items-center">
      <h2>{shopproduct.stockquantity}</h2>
    </div>,
    <div>{shopproduct.sells}</div>,
    <div className="flex">
      <ButtonVariant2 img={<Pencil size={12} />} />
      <ButtonVariant2 img={<Trash size={12} />} className={"ml-2"} />
    </div>,
  ];
}
