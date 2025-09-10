import { Pencil, RedoDot, Trash } from "lucide-react";
import { ButtonVariant2, ButtonVariant3 } from "../components/buttons";
import { Input } from "../components/inputs";
import Table from "../components/tables";
import { useState, useEffect, useRef, useCallback } from "react";
import { fetchWithAuth } from "./../../data/api";
import useUIStore from "./../ui_storage";
import { useNavigate } from "react-router-dom";
import { GetShop, UpdateShop } from "../../data/shops";
export default function Settigns() {
  const [hasShop, setHasShop] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const activeUser = useUIStore((state) => state.active_user);
  const navigate = useNavigate();

  // Use refs for form inputs to avoid unnecessary re-renders
  const shopNameRef = useRef("");
  const shopDescriptionRef = useRef("");
  const shopidRef = useRef("");

  const fetchShopData = useCallback(async () => {
    try {
      setError(null);
      let res = await fetchWithAuth(() =>
        fetch(`/shops/shopAdmin/?adminid=${activeUser.customerid}`)
      );
      if (!res.ok) {
        throw new Error("Failed to fetch shop admin data");
      }
      res = await res.json();
      console.log({ res });

      if (res.length === 0) {
        setHasShop(false);
        return;
      }

      const shopid = res[0].shopid;
      const shopRes = await fetchWithAuth(() => GetShop(shopid));
      if (!shopRes.ok) {
        throw new Error("Failed to fetch shop data");
      }
      const shopResData = await shopRes.json();
      console.log({ shopResData });

      // Update refs instead of state
      shopNameRef.current = shopResData.shopname;
      shopDescriptionRef.current = shopResData.postalcode;
      shopidRef.current = shopResData.shopid;
      setHasShop(true);
    } catch (err) {
      console.error("Error fetching shop data:", err);
      setError(err.message);
    }
  }, [activeUser.customerid]);

  useEffect(() => {
    fetchShopData();
  }, [fetchShopData]);

  const onUpdate = useCallback(async () => {
    if (!shopidRef.current) {
      setError("No shop ID available");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const shopRes = await fetchWithAuth(() =>
        UpdateShop(shopidRef.current, {
          shopname: shopNameRef.current,
          postalcode: shopDescriptionRef.current,
          adminid: activeUser.customerid,
        })
      );

      if (!shopRes.ok) {
        throw new Error("Failed to update shop");
      }

      const shopResData = await shopRes.json();
      console.log({ shopResData });
      setSuccess(true);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Error updating shop:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

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

              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Shop updated successfully!
                </div>
              )}

              <Input
                label="Store name"
                className="my-2"
                defaultValue={shopNameRef.current}
                onChange={(e) => (shopNameRef.current = e.target.value)}
              />
              <Input
                label="Store Postal Code"
                defaultValue={shopDescriptionRef.current}
                onChange={(e) => (shopDescriptionRef.current = e.target.value)}
              />

              <ButtonVariant3
                text={isLoading ? "Updating..." : "Update"}
                img={<RedoDot />}
                className="ml-auto mt-3"
                onClick={onUpdate}
                disabled={isLoading}
              />
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
