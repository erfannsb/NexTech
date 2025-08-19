import { ArrowUpRight, Database, Search } from "lucide-react";
import { InputVariant1 } from "../components/inputs";
import { ButtonVariant1, ButtonVariant2 } from "../components/buttons";
import Table from "../components/tables";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../data/api";
import useUIStore from "./../ui_storage";
export default function Home() {
  const [shop_orders, set_shop_orders] = useState([]);
  const shop_products = useUIStore((state) => state.shop_products);
  const shop_orders_UIStore = useUIStore((state) => state.shop_orders);
  const activeUser = useUIStore((state) => state.active_user);
  const active_shop = useUIStore((state) => state.active_shop);
  const setActiveShop = useUIStore((state) => state.setActiveShop);
  const setShopOrders = useUIStore((state) => state.setShopOrders);
  const setShopProducts = useUIStore((state) => state.setShopProducts);
  const [currentOrderFilter, setOrderFilter] = useState(false);

  const DELIVERY_PRICE = (shipping) =>
    shipping.toLowerCase() === "express" ? 20 : 10; // Fixed delivery price

  const totalprice = (orderItems) =>
    orderItems.reduce(
      (acc, item) => acc + parseFloat(item.shop_product.price) * item.quantity,
      0
    );

  const totalItems = (orderItem) =>
    orderItem.reduce((acc, item) => acc + item.quantity, 0);

  const finalprice = (totalPrice, shipping) => {
    let price = totalPrice + DELIVERY_PRICE(shipping);
    return price;
  };

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetchWithAuth(() =>
        fetch(`/shops/shops/?adminid=${activeUser.customerid}`)
      );
      if (!res.ok) {
        console.error("fetching from shopAdmin failed");
        return;
      }
      res = await res.json();
      if (res.length == 0) {
        setActiveShop(false);
      } else {
        setActiveShop(res[0]);
      }
      console.log(res[0]);
      let resFromOrders = await fetchWithAuth(() =>
        fetch(`/shops/shops/${res[0].shopid}/orders/`, {
          method: "GET",
          credentials: "include",
        })
      );
      if (!resFromOrders.ok) {
        console.error("Fetching orders failed");
        return;
      }
      resFromOrders = await resFromOrders.json();
      let newOrders = resFromOrders;
      for (let order of newOrders) {
        if (order.paymentmethod == "Installment") {
          continue;
        }
        let ordertotalprice = totalprice(order.items);
        order["final_price"] = finalprice(
          ordertotalprice,
          order.shipping.shippingmethod
        );
      }
      setShopOrders(newOrders);
      set_shop_orders(newOrders);
      console.log({ resFromOrders, newOrders });

      let resFromProducts = await fetchWithAuth(
        () => fetch(`/shops/shops/${res[0].shopid}/products/`),
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
      console.log({ resFromProducts });
    };
    fetchData();
  }, []);
  // fetching Recent Orders
  const RecentOrders = [
    {
      orderNumber: "123123131",
      customerName: "Some Guy",
      status: "Delivered",
      dateNtime: "123/123/1",
      price: 1000,
    },
    {
      orderNumber: "123123131",
      customerName: "Some Guy",
      status: "Delivered",
      dateNtime: "123/123/1",
      price: 1000,
    },
    {
      orderNumber: "123123131",
      customerName: "Some Guy",
      status: "Delivered",
      dateNtime: "123/123/1",
      price: 1000,
    },
    {
      orderNumber: "123123131",
      customerName: "Some Guy",
      status: "Delivered",
      dateNtime: "123/123/1",
      price: 1000,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (currentOrderFilter == "All") {
        set_shop_orders(shop_orders_UIStore);
      } else {
        let resFromOrders = await fetchWithAuth(() =>
          fetch(
            `/shops/shops/${active_shop.shopid}/orders/?status=${currentOrderFilter}`,
            {
              method: "GET",
              credentials: "include",
            }
          )
        );
        if (!resFromOrders.ok) {
          console.error("Fetching orders failed");
          return;
        }
        resFromOrders = await resFromOrders.json();
        let newOrders = resFromOrders;
        for (let order of newOrders) {
          if (order.paymentmethod == "Installment") {
            continue;
          }
          let ordertotalprice = totalprice(order.items);
          order["final_price"] = finalprice(
            ordertotalprice,
            order.shipping.shippingmethod
          );
        }
        set_shop_orders(newOrders);
      }
    };
    fetchData();
  }, [currentOrderFilter]);

  return (
    <div>
      {/* Charts */}
      <div className="flex mt-5 max-md:flex-col max-md:items-center max-md:mb-7">
        {/* Sales overview */}
        <SalesOverview className="md:w-min-[300px] md:w-[40%] max-md:w-full h-[300px]" />
        {/* customer satisfaction */}
        <SatisfactionMeter shop_rate={active_shop?.rating} />
        {/* Trending Products */}
        <TrendingProduct className={"max-md:w-[100%]"} />
      </div>
      <h3 className="mt-3 font-black text-xl mb-2">Recent Orders</h3>
      <div className="flex flex-wrap gap-2">
        {["All", "Pending", "Shipped", "Delivered"].map((e) => (
          <ButtonVariant1
            text={e}
            color={"bg-red-300"}
            className={`text-sm ${
              currentOrderFilter == e ? "card-active" : ""
            }`}
            onClick={() => setOrderFilter(e)}
          />
        ))}
      </div>
      {shop_orders.length > 0 ? (
        <Table
          className="mt-3"
          headerItems={[
            "Order Number",
            "Customer Name",
            "Status",
            "Date & Time",
            "Total Price",
          ]}
          list={shop_orders?.map((e) =>
            OrderItems(
              e.orderid,
              `${e.customer.firstname} ${e.customer.lastname}`,
              e.orderstatus,
              e.orderdate,
              e.paymentmethod == "Installment"
                ? e.installment.totalprice
                : e.final_price
            )
          )}
        />
      ) : (
        <p className="font-bold text-sm mt-3">Nothing found</p>
      )}
    </div>
  );
}

export function SatisfactionMeter({ shop_rate = 0, className }) {
  // Map 0–5 -> 0–100
  const percentage = Math.min(Math.max((shop_rate / 5) * 100, 0), 100);

  const radius = 60;
  const stroke = 10;
  const startAngle = -155;
  const endAngle = 155;
  const arcAngle = endAngle - startAngle;
  const circumference = (Math.PI * radius * arcAngle) / 180;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  // Dynamic mood/label
  let mood = "😐";
  let label = "Average";
  if (shop_rate >= 4.5) {
    mood = "🤩";
    label = "Excellent";
  } else if (shop_rate >= 3.5) {
    mood = "😊";
    label = "Good";
  } else if (shop_rate >= 2.5) {
    mood = "😐";
    label = "Okay";
  } else if (shop_rate >= 1.5) {
    mood = "😟";
    label = "Poor";
  } else {
    mood = "😡";
    label = "Terrible";
  }

  return (
    <div className={`text-white p-6 rounded-xl w-72 text-center ${className}`}>
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
          {mood}
        </div>
      </div>
      <div className="text-xl font-bold">{percentage.toFixed(0)}%</div>
      <div className="text-sm text-purple-400">{label}</div>
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
      <div className="flex justify-between items-center">
        <h2 className="font-black text-lg">Sales Overview</h2>
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
          <Legend
            verticalAlign="top"
            iconType="circle"
            align="left"
            iconSize={10}
            height={40}
          />

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

export function TrendingProduct({ className, sales, orders }) {
  const data = [
    {
      name: "Page A",
      pv: 2400,
    },
    {
      name: "Page B",
      pv: 1398,
    },
    {
      name: "Page C",
      pv: 9800,
    },
    {
      name: "Page D",
      pv: 3908,
    },
    {
      name: "Page E",
      pv: 4800,
    },
    {
      name: "Page F",
      pv: 3800,
    },
    {
      name: "Page G",
      pv: 4300,
    },
  ];

  return (
    <div className="flex flex-col justify-center">
      {/* Chart */}
      <div className="w-full h-[120px] py-3 bg-[linear-gradient(96.23deg,_rgba(98,_116,_247,_0.32)_53.15%,_rgba(43,_46,_72,_0.32)_101.52%,_rgba(127,_144,_208,_0)_200.56%)] rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <YAxis tick={{ fontSize: 12, fill: "#CBD5E0" }} axisLine={false} />
            <Tooltip />
            <Bar
              dataKey="pv"
              barSize={3}
              fill="#FFFFFF"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Info */}
      <h3 className="font-bold text-lg mt-3">Trending Products</h3>
      <p className="font-medium text-gray-400">
        <span className="text-[#36DCF6]">(+23)</span> than last week
      </p>
      {/* statistics */}
      <div className="flex justify-between gap-5 mt-6">
        {["Sales", "Orders", "Top tags", "Mood Insights"].map((e) => (
          <div className=" self-end">
            <div className="flex items-center">
              <div className="bg-gray-600 h-5 flex justify-center items-center rounded-sm aspect-square mr-1">
                <Database size={14} />
              </div>
              <p className="text-gray-400 text-[12px] font-bold">{e}</p>
            </div>
            <h3 className="font-bold mt-[2px] border-b-3 border-[#0A2348]">
              32,984
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OrderItems(
  orderNumber,
  customerName,
  status,
  dateNtime,
  price
) {
  let statusComp = null;

  if (status == "Delivered") {
    statusComp = (
      <div className="text-green-600 bg-green-50 w-fit px-2 pys-[2px] rounded-xl">
        {status}
      </div>
    );
  } else if (status == "Shipped") {
    statusComp = (
      <div className="text-cyan-600 bg-cyan-50  w-fit px-2 pys-[2px] rounded-xl">
        {status}
      </div>
    );
  } else if (status == "Pending") {
    statusComp = (
      <div className="text-orange-600 bg-orange-50  w-fit px-2 pys-[2px] rounded-xl">
        {status}
      </div>
    );
  }
  return [
    <h3>{orderNumber}</h3>,
    <h3>{customerName}</h3>,
    statusComp,
    <h3>{dateNtime}</h3>,
    <h3>${price}</h3>,
  ];
}
