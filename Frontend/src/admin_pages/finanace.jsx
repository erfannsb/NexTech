import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Label,
  Legend,
} from "recharts";
import { InputVariant1 } from "../components/inputs";
import { Plus, Search } from "lucide-react";
import { ButtonVariant1, ButtonVariant4 } from "../components/buttons";
import Table from "../components/tables";

export default function Finance() {
  //fetch top products

  const topProducts = [
    {
      img_src: "/msi_product.png",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
    },
    {
      img_src: "/msi_product.png",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
    },
    {
      img_src: "/msi_product.png",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
    },
    {
      img_src: "/msi_product.png",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
    },
    {
      img_src: "/msi_product.png",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
    },
    {
      img_src: "/msi_product.png",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
    },
    {
      img_src: "/msi_product.png",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
    },
    {
      img_src: "/msi_product.png",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
    },
  ];

  //fetch top categories
  const TopCategories = [
    {
      img_src: "/Category Images/cpu.svg",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
      percentage: 50,
    },
    {
      img_src: "/Category Images/cpu.svg",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
      percentage: -50,
    },
    {
      img_src: "/Category Images/cpu.svg",
      title: "MSI GeForce RTX",
      category: "Mouse",
      price: "1000",
      percentage: 50,
    },
  ];

  //fetch installments

  const installments = [
    {
      installmentNumber: 12312312331,
      customerName: "Mehrnoosh",
      loanType: "One-Year",
      totalAmount: 12000,
      interestRate: 5.5,
      startDate: "12/12/12",
      endDate: "12/2/2",
      monthlyPayment: 5,
      status: "Active",
    },
  ];

  // fetch payments

  const payments = [
    {
      paymentID: "2113312",
      customer: "Mehrnoosh",
      amount: 12000,
      type: "Online",
      method: "Paypal",
      status: "Success",
    },
  ];

  return (
    <div className="mb-10">
      <h2 className="font-bold text-lg">How much we earned</h2>
      {/* Charts and info */}
      <div className="flex max-lg:flex-col justify-between mt-4 gap-4">
        {/* All expenses */}
        <div className="flex flex-col card-variant-3 rounded-lg px-10 py-6  flex-1 items-center justify-center">
          <h3 className="font-bold">All Expenses</h3>
          <p className="text-gray-300 font-medium text-[12px]">
            Based on Categories
          </p>

          <div className="h-[200px] w-[200px]  my-4 relative">
            <AllExpensesChart />
            {/* Label */}
            <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="font-bold text-lg">$23,750</h3>
              <p className="text-[11px]">
                <span className=" text-green-300 font-medium">10%</span> +$150
                today
              </p>
            </div>
          </div>

          {/* info */}

          {[
            { type: "Google Ads", color: "#0088FE", value: 10000 },
            { type: "Instagram", color: "#00C49F", value: 5000 },
          ].map((e) => (
            <div className="flex items-center justify-between not-last:mb-2">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2`}
                  style={{ backgroundColor: e.color }}
                ></div>
                <h4 className="text-sm text-gray-500">{e.type}</h4>
              </div>
              <h5 className="font-medium ml-10 text-sm">${e.value}</h5>
            </div>
          ))}
        </div>

        {/* Top products */}
        <div className="flex flex-col card-variant-3 rounded-lg px-7 py-4 flex-1 overflow-y-auto max-h-[55vh]">
          <h3 className="font-bold">Top Product</h3>
          <p className="text-gray-300 font-medium text-[12px] mb-4">
            Top product in a period of time
          </p>

          {topProducts.map((e) => (
            <TopProduct
              img_src={e.img_src}
              title={e.title}
              category={e.category}
              price={e.price}
            />
          ))}
        </div>

        {/* Top Categories */}
        <div className="flex flex-col card-variant-3 rounded-lg px-7 py-4 flex-1 overflow-y-auto  ">
          <h3 className="font-bold">Top Category</h3>
          <p className="text-gray-300 font-medium text-[12px] mb-4">
            Top category in a period of time
          </p>

          {TopCategories.map((e) => (
            <TopCategory
              img_src={e.img_src}
              title={e.title}
              category={e.category}
              price={e.price}
              percentage={e.percentage}
            />
          ))}
        </div>
      </div>

      <div className="flex mt-10 gap-10 justify-around max-lg:flex-col">
        {/* Overview Payment */}
        <div className="">
          <h4 className="font-bold text-xl ">Overview KPIs</h4>
          <p className="text-gray-400 mb-6 font-medium">
            For all payment types
          </p>
          <div className="flex flex-col w-fit">
            {[
              {
                h: "💰 Total Revenue",
                p: 1000000,
              },
              {
                h: "🛍️ Total Orders Paid in Full",
                p: 1000000,
              },
              {
                h: "⏳ Total Installment Revenue",
                p: 1000000,
              },
              {
                h: "📈 Payment Growth",
                p: 1000000,
              },
              {
                h: "👤 Unique Paying Customers",
                p: 1000000,
              },
            ].map((e) => (
              <div className="flex justify-between items-center not-last:mb-3 not-last:border-b border-zinc-800 pb-3">
                <h4 className="font-medium text-gray-300 text-sm">{e.h}</h4>
                <h4 className="font-medium ml-[40px]">${e.p}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Table */}
        <div>
          <h4 className="font-bold text-xl ">Recent Payments</h4>
          <Table
            className="mt-3"
            headerItems={[
              "Payment ID",
              "Customer",
              "Amount",
              "Type",
              "Method",
              "Status",
            ]}
            list={payments.map((e) =>
              PaymentItem(
                e.paymentID,
                e.customer,
                e.amount,
                e.type,
                e.method,
                e.status
              )
            )}
          />
        </div>
      </div>

      {/* Installment Table */}
      <div className="mt-10">
        <h3 className="mt-1 font-black text-xl mb-2">Installment Overview</h3>
        <div className="flex flex-wrap gap-2">
          <InputVariant1
            placeholder="Search"
            img={<Search size={15} />}
            className={"py-1 px-2 w-[200px] text-sm"}
          />
          {["Active", "Overdue", "Paid"].map((e) => (
            <ButtonVariant1
              text={e}
              color={"bg-red-300"}
              className={"text-sm"}
            />
          ))}
        </div>

        <Table
          headerFontSize="sm"
          className="mt-5"
          headerItems={[
            "Installment Number",
            "Customer Name",
            "Loan Type",
            "Total Amount",
            "Interest Rate",
            "Start Date",
            "End Date",
            "Monthly Payment",
            "Status",
            "",
          ]}
          px={3}
          list={installments.map((e) =>
            InstallmentItem(
              e.installmentNumber,
              e.customerName,
              e.loanType,
              e.totalAmount,
              e.interestRate,
              e.startDate,
              e.endDate,
              e.monthlyPayment,
              e.status
            )
          )}
        />
      </div>
    </div>
  );
}

export function AllExpensesChart() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={600} className="relative">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          radius={10}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              radius={10}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export function TopProduct({ title, category, price, img_src }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        {/* Image */}
        <img src={img_src} alt="IMG" className=" mr-3 w-13 aspect-auto" />
        <div className="flex flex-col">
          {/* Title and category */}
          <h5 className="font-bold text-sm leading-none">{title}</h5>
          <h5 className="leading-4 font-medium text-gray-500 text-[11px]">
            {category}
          </h5>
        </div>
      </div>
      {/* price */}
      <h5 className="font-bold text-sm">${price}</h5>
    </div>
  );
}

export function TopCategory({ title, category, price, img_src, percentage }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        {/* Image */}
        <img src={img_src} alt="IMG" className=" mr-3 w-13 aspect-auto" />
        <div className="flex flex-col">
          {/* Title and category */}
          <h5 className="font-bold text-sm leading-none">{title}</h5>
          <h5 className="leading-4 font-medium text-gray-500 text-[11px]">
            {category}
          </h5>
        </div>
      </div>
      {/* price */}
      <div className="flex items-center">
        <h5 className="font-bold text-sm mr-2">${price}</h5>
        <div
          className={`${
            percentage > 0
              ? "bg-green-50 text-green-400"
              : "bg-red-50 text-red-500"
          } px-2   py-[2px] text-[10px] rounded-md`}
        >
          <h4>{percentage}%</h4>
        </div>
      </div>
    </div>
  );
}

export function InstallmentItem(
  installmentNumber,
  customerName,
  loanType,
  totalAmount,
  interestRate,
  startDate,
  endDate,
  monthlyPayment,
  status
) {
  let statusComp;

  if (status == "Active") {
    statusComp = (
      <div className="text-green-600 bg-green-50 w-fit px-2 pys-[2px] rounded-xl">
        {status}
      </div>
    );
  } else if (status == "Paid") {
    statusComp = <div className="text-cyan-600 bg-cyan-50">{status}</div>;
  } else if (status == "Overdue") {
    statusComp = <div className="text-orange-600 bg-orange-50">{status}</div>;
  }

  return [
    <h3>{installmentNumber}</h3>,
    <h3>{customerName}</h3>,
    <h3>{loanType}</h3>,
    <h3>{totalAmount}</h3>,
    <h3>{interestRate}</h3>,
    <h3>{startDate}</h3>,
    <h3>{endDate}</h3>,
    <h3>{monthlyPayment}</h3>,
    statusComp,
  ];
}

export function PaymentItem(paymentID, customer, amount, type, method, status) {
  let statusComp;

  if (status == "Success") {
    statusComp = (
      <div className="text-green-600 bg-green-50 rounded-full px-2 py-[2px]">
        {status}
      </div>
    );
  } else if (status == "Failed") {
    statusComp = <div className="text-orange-600 bg-orange-50">{status}</div>;
  }

  return [
    <h3>{paymentID}</h3>,
    <h3>{customer}</h3>,
    <h3>{amount}</h3>,
    <h3>{type}</h3>,
    <h3>{method}</h3>,
    statusComp,
  ];
}
