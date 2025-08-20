import { Check, Pencil, Trash } from "lucide-react";
import { ButtonVariant2, ButtonVariant4 } from "../components/buttons";
import { Input } from "../components/inputs";
import Table from "../components/tables";
import { useEffect, useRef, useState } from "react";
import { fetchWithAuth } from "../../data/api";
import {
  DeleteDiscount,
  GetDiscount,
  GetDiscounts,
  PostDiscount,
} from "../../data/shops";
import useUIStore from "../ui_storage";

export default function Discount() {
  const nameRef = useRef(null);
  const codeRef = useRef(null);
  const percentageRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const [isError, setError] = useState(false);
  const active_shop = useUIStore((state) => state.active_shop);
  const [discounts, setDiscounts] = useState([]);
  //fetch discounts

  const onSubmit = async () => {
    const name = nameRef.current.value;
    const code = codeRef.current.value;
    const percentage = percentageRef.current.value;
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;

    if (!name || !code || !percentage || !startDate || !endDate) {
      setError("All Fields Are Required");
      retrun;
    }

    let res = await fetchWithAuth(() =>
      PostDiscount({
        discountcode: code,
        discountvalue: percentage,
        discountname: name,
        discountstarttime: startDate,
        discountendtime: endDate,
        shopid: active_shop.shopid,
      })
    );
    if (!res.ok) {
      console.error("Posting Discount Failed");
      return;
    }
    res = await res.json();
    setDiscounts([...discounts, res]);
    console.log(res);
  };

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetchWithAuth(() => GetDiscounts(active_shop.shopid));
      if (!res.ok) {
        console.error("Failed to fetch discounts");
        return;
      }
      res = await res.json();
      console.log(res);
      setDiscounts(res);
    };
    fetchData();
  }, []);

  const onDiscountDelete = async (id) => {
    let res = await fetchWithAuth(() => DeleteDiscount(id));
    if (!res.ok) {
      console.error("Failed to delete discount");
    }
    setDiscounts((prev) => {
      return prev.filter((e) => e.discountid != id);
    });
  };

  const onDiscountUpdate = async (id) => {};

  return (
    <div>
      {/* Adding Discount */}
      <h3 className="font-bold text-lg">Add a new Discount</h3>
      <div className="grid grid-cols-2 grid-rows-3 gap-3  max-sm:w-full sm:w-fit mt-2 min-w-[40vw]">
        <Input
          label="Discount Name"
          className="col-start-1 col-end-3"
          type="text"
          ref={nameRef}
        />
        <Input
          ref={codeRef}
          label="Discount Code"
          className="col-start-1 col-end-3"
          type="text"
        />

        <Input
          ref={percentageRef}
          label="Discount Percentage"
          className="col-start-1 col-end-3"
          type="number"
        />

        <Input label="Start Time" type="date" ref={startDateRef} />
        <Input label="End Time" type="date" ref={endDateRef} />
        {/* Form Error */}
        {isError && (
          <div className="text-[12px] mb-2 text-red-400">* {isError}</div>
        )}
        <ButtonVariant4
          text={"Submit"}
          img={<Check />}
          onClick={onSubmit}
          className="h-fit w-fit col-start-2 justify-self-end mt-1"
        />
      </div>

      {/* Table of Discounts */}
      <div>
        <h3 className="font-bold text-lg my-3">All Discounts</h3>
        {discounts.length > 0 ? (
          <Table
            headerItems={[
              "Discount Name",
              "Discount Code",
              "Discount Percentage",
              "Start Time",
              "End Time",
              "",
            ]}
            list={discounts.map((e) =>
              DiscountItem(
                e.discountname,
                e.discountcode,
                e.discountvalue,
                e.discountstarttime,
                e.discountendtime,
                e.discountid,
                onDiscountDelete``
              )
            )}
          />
        ) : (
          <p className="font-bold text-sm mt-3">Nothing found</p>
        )}
      </div>
    </div>
  );
}

export function DiscountItem(
  discountName,
  discountCode,
  discountPercentage,
  startTime,
  endTime,
  discountid,
  onDiscountDelete
) {
  return [
    <h3>{discountName}</h3>,
    <h3>{discountCode}</h3>,
    <h3>{discountPercentage}%</h3>,
    <h3>{startTime}</h3>,
    <h3>{endTime}</h3>,
    <div className="flex gap-2">
      {/* <ButtonVariant2
        img={<Pencil size={16} />}
        onClick={() => onDiscountUpdate(discountid)}
      /> */}
      {/* I'm going to add this later */}
      <ButtonVariant2
        img={<Trash size={16} />}
        onClick={() => onDiscountDelete(discountid)}
      />
    </div>,
  ];
}
