import { Check, Pencil, Trash } from "lucide-react";
import { ButtonVariant2, ButtonVariant4 } from "../components/buttons";
import { Input } from "../components/inputs";
import Table from "../components/tables";

export default function Discount() {
  //fetch discounts

  const discounts = [
    {
      discountName: "something",
      discountPercentage: 12,
      startTime: "12/12/12",
      endTime: "12/11/12",
    },
  ];

  return (
    <div>
      {/* Adding Discount */}
      <h3 className="font-bold text-lg">Add a new Discount</h3>
      <div className="grid grid-cols-2 grid-rows-3 gap-3  max-sm:w-full sm:w-fit mt-2 min-w-[40vw]">
        <Input
          label="Discount Name"
          className="col-start-1 col-end-3"
          type="text"
        />

        <Input
          label="Discount Percentage"
          className="col-start-1 col-end-3"
          type="number"
        />

        <Input label="Start Time" type="date" />
        <Input label="End Time" type="date" />
        <ButtonVariant4
          text={"Submit"}
          img={<Check />}
          className="h-fit w-fit col-start-2 justify-self-end mt-1"
        />
      </div>

      {/* Table of Discounts */}
      <div>
        <h3 className="font-bold text-lg my-3">All Discounts</h3>
        <Table
          headerItems={[
            "Discount Name",
            "Discount Percentage",
            "Start Time",
            "End Time",
            "",
          ]}
          list={discounts.map((e) =>
            DiscountItem(
              e.discountName,
              e.discountPercentage,
              e.startTime,
              e.endTime
            )
          )}
        />
      </div>
    </div>
  );
}

export function DiscountItem(
  discountName,
  discountPercentage,
  startTime,
  endTime
) {
  return [
    <h3>{discountName}</h3>,
    <h3>{discountPercentage}%</h3>,
    <h3>{startTime}</h3>,
    <h3>{endTime}</h3>,
    <div className="flex gap-2">
      <ButtonVariant2 img={<Pencil size={16} />} />
      <ButtonVariant2 img={<Trash size={16} />} />
    </div>,
  ];
}
