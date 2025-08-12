import { ArrowLeft, Bell, PanelLeft, Search, Settings } from "lucide-react";
import { ButtonVariant2 } from "../components/buttons";
import Header from "../components/header";
import { InputVariant1 } from "../components/inputs";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

export default function Form() {
  const navigate = useNavigate();
  const { type: typeParam } = useParams();
  return (
    <div className="grid grid-rows-2 grid-cols-1">
      {/* Top Left Corner of The Header */}
      <header className="border-r border-b border-[#26262B] text-white p-4 col-start-1 col-end-2 max-sm:col-end-4 row-start-1 row-end-2 flex items-center justify-between">
        <ButtonVariant2
          img={<ArrowLeft size={17} />}
          onClick={() => navigate("/")}
          className={" mr-3"}
        />
        <h1 className="text-2xl font-bold text-[#6274F7]">NexTech</h1>
        {/* toggle leftSideBar */}

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
      <div className="">
        {typeParam.toLocaleLowerCase() == "login" ? <Login /> : <></>}
      </div>
    </div>
  );
}

export function Login() {
  return <div>Login form is here dude</div>;
}
