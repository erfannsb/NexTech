import { KeyRound, RedoDot, Trash } from "lucide-react";
import { ButtonVariant3 } from "../components/buttons";
import { Input } from "../components/inputs";

export default function Settings() {
  return (
    <div className="flex justify-center">
      <div className="w-[400px] flex flex-col">
        <h3 className="font-bold text-lg">Account Information</h3>
        <p className="text-md text-[#B6B6B6]">
          Click On Each Field You Wish To Update
        </p>

        <div className="grid mt-4 grid-cols-2 gap-3">
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email" className="col-start-1 col-end-3" />
          <Input label="Phone Number" className="col-start-1 col-end-3" />
          <Input label="Postal Code" className="col-start-1 col-end-3" />
          <Input label="Province" />
          <Input label="City" />
          <Input label="Streat" className="col-start-1 col-end-3" />
          <Input label="Address Details" className="col-start-1 col-end-3" />
        </div>
        <ButtonVariant3
          text="Update"
          img={<RedoDot />}
          className="ml-auto mt-3"
        />

        <div className="flex flex-col mt-5">
          <h3 className="font-bold text-lg">Password Reset</h3>
          <p className="text-md text-[#B6B6B6]">
            Fill This Form If You Wish To Change Your Password
          </p>
          <Input label="Current Password" className={"mt-3"} />
          <Input label="New Password" className={"mt-3"} />
          <Input label="Confirm New Password" className={"mt-3"} />
          <ButtonVariant3
            text="Update Password"
            img={<KeyRound />}
            className={"ml-auto mt-4"}
          />
        </div>

        <div className="mt-10 flex flex-col justify-center items-center border-[#26262B] border p-2 rounded-lg h-[200px]">
          <h3 className="font-bold text-xl mb-3">Delete Account Box</h3>
          <p className="text-center text-sm text-[#B6B6B6] font-light">
            In Case You Want To Remove Your Account You Can Click On the Button
            Below
          </p>
          <ButtonVariant3
            text={"Delete Account"}
            img={<Trash />}
            className={"mt-3"}
          />
        </div>
      </div>
    </div>
  );
}
