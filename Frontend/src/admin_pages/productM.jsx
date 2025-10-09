import { Check, Pencil, Plus, Search, Trash, X } from "lucide-react";
import {
  ButtonVariant1,
  ButtonVariant2,
  ButtonVariant4,
} from "../components/buttons";
import { InputVariant1 } from "../components/inputs";
import Table from "../components/tables";
import useUIStore from "../ui_storage";
import { useEffect, useRef, useState } from "react";
import { fetchWithAuth } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { DeleteProduct } from "../../data/products";
export default function ProductManageMent() {
  const navigate = useNavigate();
  const shop_products = useUIStore((state) => state.shop_products);
  const setShopProducts = useUIStore((state) => state.setShopProducts);
  const active_shop = useUIStore((state) => state.active_shop);
  const [products, setProducts] = useState([]);
  const searchRef = useRef(null);

  const onEdit = (id) => {
    navigate(`/form/createproduct/?productid=${id}`);
  };

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

  const onSearchChange = async () => {
    const search_value = searchRef.current.value;
    let resFromProducts = await fetchWithAuth(
      () =>
        fetch(
          `/shops/shops/${active_shop.shopid}/products/?name=${search_value}`
        ),
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
    setProducts(resFromProducts);
    console.log({ resFromProducts });
  };

  return (
    <div>
      <h3 className="mt-1 font-black text-xl mb-2">Shop Inventory</h3>
      <div className="flex flex-wrap gap-2">
        <InputVariant1
          ref={searchRef}
          placeholder="Search"
          img={<Search size={15} />}
          className={"py-1 px-2 w-[200px] text-sm"}
          onChange={onSearchChange}
        />

        <ButtonVariant4
          className={"ml-auto"}
          text={"Add Product"}
          img={<Plus size={18} />}
          onClick={() => navigate("/form/createproduct")}
        />
      </div>
      {products.length > 0 ? (
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
              active_shop.shopid,
              e.productid,
              onEdit
            )
          )}
        />
      ) : (
        <p className="font-bold text-sm mt-3">Nothing found</p>
      )}
    </div>
  );
}

export function ProductItem(
  productName,
  productCompany,
  shop_products,
  rate,
  shopid,
  productid,
  onEdit
) {
  const shopproduct = shop_products.filter((e) => e.shopid == shopid)[0];
  console.log(shopproduct);
  console.log({ productid });

  const onDelete = async (id) => {
    await fetchWithAuth(() => DeleteProduct(id));
    location.reload();
  };

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
      <ButtonVariant2
        img={<Pencil size={12} />}
        onClick={() => onEdit(productid)}
      />
      <ButtonVariant2
        img={<Trash size={12} />}
        className={"ml-2"}
        onClick={() => onDelete(productid)}
      />
    </div>,
  ];
}
