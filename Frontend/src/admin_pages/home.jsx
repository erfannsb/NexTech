import { Search } from "lucide-react";
import { InputVariant1 } from "../components/inputs";
import { ButtonVariant1 } from "../components/buttons";
import Table from "../components/tables";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  return (
    <div>
      {/* Charts */}
      <div className="flex">
        {/* Sales overview */}
        <SalesOverview className="w-min-[300px] w-[40%]" />
        {/* customer satisfaction */}
        <SatisfactionMeter className={"mx-3"} />
        {/* Trending Products */}
        <div> Trending Products</div>
      </div>
      <h3 className="mt-3 font-black text-xl mb-2">Recent Orders</h3>
      <div className="flex flex-wrap gap-2">
        <InputVariant1
          placeholder="Search"
          img={<Search size={15} />}
          className={"py-1 px-2 w-[200px]"}
        />
        <ButtonVariant1 text="pending" color={"bg-red-300"} />
        <ButtonVariant1 text="shipped" color={"bg-red-300"} />
        <ButtonVariant1 text="delivered" color={"bg-red-300"} />
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
        list={[["", "", "", "", "", ""]]}
      />
    </div>
  );
}

export function SatisfactionMeter({ className }) {
  const percentage = 95;
  const radius = 60;
  const stroke = 10;
  const startAngle = -135;
  const endAngle = 135;
  const arcAngle = endAngle - startAngle;
  const circumference = (Math.PI * radius * arcAngle) / 180;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <div
      className={` text-white p-6 rounded-xl w-72 text-center  ${className}`}
    >
      <h2 className="text-lg font-semibold">Customer Satisfaction</h2>
      <p className="text-sm text-gray-400 mb-4">
        How much people love your shop
      </p>

      <div className="relative w-36 h-36 mx-auto mb-4">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          {/* Arc Background */}
          <path
            d="M 40 120 A 60 60 0 1 1 120 120"
            fill="none"
            stroke="#1e1e1e"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          {/* Arc Foreground */}
          <path
            d="M 40 120 A 60 60 0 1 1 120 120"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 1s ease-out",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
        {/* Emoji in center */}
        <div className="absolute inset-0 flex items-center justify-center text-3xl">
          😊
        </div>
      </div>
      <div className="text-xl font-bold">{percentage}%</div>
      <div className="text-sm text-purple-400">Exelenet</div>
    </div>
  );
}

export function SalesOverview({ className }) {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className={`${className} flex flex-col`}>
      {/* header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-black text-lg">Sales Overview</h2>
        <h4 className="text-sm">Total Sales This Month: 20000$</h4>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#56577A"
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#CBD5E0", fontWeight: 700 }}
          />
          <YAxis tick={{ fontSize: 12, fill: "#CBD5E0" }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#7F90D0"
            strokeWidth="2px"
            fill="#3471eb"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#7F90D0"
            strokeWidth="2px"
            fill="#2847b5"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#7F90D0"
            strokeWidth="2px"
            fill="#1d327d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
