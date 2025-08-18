import { Pencil, Trash } from "lucide-react";
import { ButtonVariant2 } from "../components/buttons";
import { Input } from "../components/inputs";
import Table from "../components/tables";
import { useState, useEffect } from "react";
import { fetchWithAuth } from "./../../data/api";
import useUIStore from "./../ui_storage";
import { useNavigate } from "react-router-dom";
export default function Settigns() {
  const [hasShop, setHasShop] = useState(null);
  const activeUser = useUIStore((state) => state.active_user);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetchWithAuth(() =>
        fetch(`/shops/shopAdmin/?adminid=${activeUser.customerid}`)
      );
      if (!res.ok) {
        console.error("fetching from shopAdmin failed");
        return;
      }
      res = await res.json();
      if (res.length == 0) {
        setHasShop(false);
      } else {
        setHasShop(true);
      }
    };
    fetchData();
  });

  return (
    <div className="px-10">
      <div className="flex mt-[100px]  w-full max-md:flex-col max-md:items-center">
        {/* Store settings */}
        <div className="md:w-[40%] w-full">
          <h3 className="font-bold text-lg">Store Information</h3>
          {hasShop ? (
            <>
              <p className="text-gray-300 text-sm">
                Click On Each Field You Wish To Update
              </p>

              <Input label="Store name" className="my-2" />
              <Input label="Store description" />
            </>
          ) : (
            <p
              className="text-sm font-bold text-blue-400 underline cursor-pointer"
              onClick={() => navigate("/form/createshop")}
            >
              Please create a shop first
            </p>
          )}
        </div>

        {/* Payment Gateways method */}
        <div className="md:w-[40%] md:ml-20 w-full max-md:mt-10">
          <h3 className="font-bold text-lg">Payment Gateways Actions</h3>
          <p className="text-gray-300 text-sm">
            Enable Payment Gateways you wish to use in your store
          </p>

          <div className="mt-4">
            <div className="flex items-center my-2">
              <input type="checkbox" id="paypal" className="mr-2" />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div className="flex items-center my-2">
              <input type="checkbox" id="stripe" className="mr-2" />
              <label htmlFor="stripe">Stripe</label>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Permissions */}
      <div className="mt-10">
        <h3 className="font-bold text-lg">User Role Permissions</h3>
        <p className="text-gray-300 text-sm">Manage admins here</p>

        <Table
          className="mt-4"
          headerItems={["Name", "Email", "Role", "Actions", ""]}
          // list={.map((admin) =>
          //   AdminItem(admin.name, admin.email, admin.role, admin.actions)
          // )}
        />
      </div>
    </div>
  );
}

export function AdminItem(name, email, role, actions) {
  return [
    <h3>{name}</h3>,
    <p>{email}</p>,
    <p>{role}</p>,
    <p>{actions}</p>,
    <div className="flex">
      <ButtonVariant2 img={<Pencil size={15} />} />
      <ButtonVariant2 className="ml-2" img={<Trash size={15} />} />
    </div>,
  ];
}
