import Table from "../components/tables";
import { ButtonVariant2, ButtonVariant3 } from "../components/buttons";
import {
  ArrowBigRight,
  ArrowUpRight,
  Euro,
  EuroIcon,
  Hourglass,
} from "lucide-react";
import { CardVariant1 } from "../components/cards";
export default function Order() {
  return (
    <div>
      <h2 className="font-bold text-lg">Order List</h2>
      <p className="font-light text-md text-[#B6B6B6] mb-3">
        List of things you ordered recently
      </p>

      <Table
        className="max-h-[60vh]"
        py={1}
        headerItems={[
          "Company",
          "Product",
          "Price",
          "Rate",
          "Category",
          "Quantity",
        ]}
        list={[
          OrderItem(
            "Nvidia",
            "./nvidia.png",
            "Cool Product",
            "1000",
            "4.4",
            "Super Cool",
            "3"
          ),
          OrderItem(
            "Nvidia",
            "./nvidia.png",
            "Cool Product",
            "1000",
            "4.4",
            "Super Cool",
            "3"
          ),
          OrderItem(
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

      {/* Order State */}
      <h2 className="font-bold text-lg my-3">Order State</h2>
      <div className="flex">
        {/* State of Order */}
        <div className="card-variant-1 flex flex-col items-center justify-center rounded-lg p-3 max-w-[300px] ">
          <h3 className="font-bold ">Pending ⏳</h3>
          <p className="font-light text-sm my-2 text-[#C4C2C2] text-center">
            Lorem ipsum dolor sit amet komm tanzen ich will nicht komm
            spatzirieren ich will nicht stoppen sie jetzt
          </p>
        </div>
        {/* Order Info */}
        <div className="flex flex-col mx-3 gap-3">
          <CardVariant1
            text={"something"}
            header={"Order ID"}
            color={"bg-red-300"}
          />
          <CardVariant1
            text={"something"}
            header={"Estimated Delivery Time"}
            color={"bg-red-300"}
          />
          <CardVariant1
            text={"something"}
            header={"Shipping Method"}
            color={"bg-red-300"}
          />
          <CardVariant1
            text={"something"}
            header={"Payment Method"}
            color={"bg-red-300"}
          />
        </div>
        {/* Installment Status */}
        <div className="flex flex-col w-[300px] bg-[rgba(24,23,27,0.69)] p-4 text-white border border-[#26262B] rounded-md">
          <h3 className="font-bold text-lg">Installment Status</h3>
          <div className="flex justify-between w-full mt-3">
            <p className="text-[#898989] text-sm">Paid Months</p>
            <h3 className="text-sm">0</h3>
          </div>
          <div className="flex justify-between w-full mt-3">
            <p className="text-[#898989] text-sm">Paid Months</p>
            <h3 className="text-sm">0</h3>
          </div>{" "}
          <div className="flex justify-between w-full mt-3">
            <p className="text-[#898989] text-sm">Paid Months</p>
            <h3 className="text-sm">0</h3>
          </div>
          <ButtonVariant3
            text={"Pay Now"}
            img={<Euro />}
            className={"ml-auto mt-auto"}
          />
        </div>
      </div>

      {/* Order History */}
      <h2 className="font-bold text-lg mt-8">Order History</h2>
      <p className="font-light text-sm text-[#B6B6B6] mb-4">
        List of things you ordered recently
      </p>

      <Table
        py={1}
        headerItems={["OrderID", "Order Items", "Date", "Total Price", ""]}
        list={[
          OrderHistoryItem(
            "123123123",
            ["p1", "p2", "p3", "p4"],
            "12/21/12",
            "1200"
          ),
          OrderHistoryItem(
            "123123123",
            ["p1", "p2", "p3", "p4"],
            "12/21/12",
            "1200"
          ),
        ]}
      />
    </div>
  );
}

function OrderItem(
  CompanyName,
  CompanyImg,
  ProductName,
  Price,
  Rate,
  Category,
  Quantity = 1
) {
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
    <div className="flex items-center card-variant-1 p-[5px] w-8 h-8 rounded-full justify-center">
      <h3>{Quantity}</h3>
    </div>,
  ];
}

function OrderHistoryItem(OrderID, OrderItems = [], Date, TotalPrice) {
  return [
    <h3 className="my-4">{OrderID}</h3>,
    <h3>{OrderItems.slice(0, 3).join(",")}</h3>,
    <h3>{Date}</h3>,
    <h3>{TotalPrice}</h3>,
    <ButtonVariant2 img={<ArrowUpRight size={15} />} />,
  ];
}
