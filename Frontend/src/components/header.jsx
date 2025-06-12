import { PanelLeft, Search, Bell, Settings, LifeBuoy } from "lucide-react";
import { ButtonVariant2 } from "./buttons";
import { InputVariant1 } from "./inputs";

export default function Header() {
  return (
    <>
      {/* Top Left Corner of The Header */}
      <header className=" text-white p-4 col-start-1 col-end-2 row-start-1 row-end-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#6274F7]">NexTech</h1>
        <ButtonVariant2 img={<PanelLeft />} />
      </header>
      {/* Top Right Corner of The Header */}
      <header className="flex items-center justify-between text-white p-4 col-start-2 col-end-4 row-start-1 row-end-2">
        {/* Profile */}
        <div className="flex items-center">
          <img
            src="/pic.png"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-sm font-medium">John Doe</span>
        </div>
        {/* Header Search Buttons and other Actions */}
        <div className="flex items-center gap-2">
          <InputVariant1
            placeholder="Search Here..."
            img={<Search strokeWidth={1.5} />}
          />
          <ButtonVariant2 img={<Bell strokeWidth={1.5} />} />
          <ButtonVariant2 img={<Settings strokeWidth={1.5} />} />
          <ButtonVariant2 img={<LifeBuoy strokeWidth={1.5} />} />
        </div>
      </header>
    </>
  );
}
