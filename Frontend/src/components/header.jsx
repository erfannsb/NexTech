import { PanelLeft, Search, Bell, Settings, LogIn } from "lucide-react";
import { ButtonVariant1, ButtonVariant2, ButtonVariant4 } from "./buttons";
import { InputVariant1 } from "./inputs";
import useUIStore from "../ui_storage";
import { isLoggedIn } from "../../data/users";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const isLeftSidebarOpen = useUIStore((state) => state.leftSidebarOpen);
  const toggleLeftSideBar = useUIStore((state) => state.setLeftSidebarOpen);
  const [loggedIn, setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await isLoggedIn();
      console.log(response);
      if (response) {
        setLogged(response);
      } else {
        setLogged(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      {/* Top Left Corner of The Header */}
      <header className="border-r border-b border-[#26262B] text-white p-4 col-start-1 col-end-2 max-sm:col-end-4 row-start-1 row-end-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#6274F7] ">NexTech</h1>
        {/* toggle leftSideBar */}
        <ButtonVariant2
          img={<PanelLeft size={17} />}
          onClick={() => toggleLeftSideBar(!isLeftSidebarOpen)}
        />
      </header>
      {/* Top Right Corner of The Header */}
      <header className="border-b border-[#26262B] flex items-center justify-between text-white p-4 col-start-2 col-end-4 row-start-1 row-end-2 max-sm:hidden">
        {/* Profile */}
        {loggedIn ? (
          <div className="flex items-center h-full max-lg:hidden">
            <img
              src="/pic.png"
              alt="Profile"
              className="aspect-auto h-full rounded-full mr-3"
            />
            <span className="text-sm font-medium">
              {loggedIn.firstname} {loggedIn.lastname}
            </span>
            <div className="bg-[#26262B] ml-4 w-[1px] h-full"></div>
          </div>
        ) : (
          <div className="flex gap-2">
            <ButtonVariant4
              text={"Login"}
              img={<LogIn size={15} />}
              className={"rounded-md text-[11px]"}
              textsize="11"
              onClick={() => {
                navigate("/form/login/");
              }}
            />
            <ButtonVariant1
              text={"Sign Up"}
              className={"text-[11px]"}
              onClick={() => {
                navigate("/form/signup/");
              }}
            />
          </div>
        )}

        {/* Header Search Buttons and other Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <InputVariant1
            placeholder="Search Here..."
            className="w-[200px] p-2 "
            img={<Search strokeWidth={1.5} size={17} />}
          />
          <ButtonVariant2
            className="relative"
            img={
              <>
                <Bell strokeWidth={1.5} size={17} />
                <div className="bg-[#6274F7] w-5 h-5 rounded-full flex justify-center items-center text-sm absolute top-[-8px] right-[-8px]">
                  1
                </div>
              </>
            }
          />
          <ButtonVariant2 img={<Settings strokeWidth={1.5} size={17} />} />
        </div>
      </header>
    </>
  );
}
