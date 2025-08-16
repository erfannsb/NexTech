import { KeyRound, RedoDot, Trash } from "lucide-react";
import { ButtonVariant3 } from "../components/buttons";
import { Input } from "../components/inputs";
import useUIStore from "../ui_storage";
import { useEffect, useRef, useState } from "react";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhoneNumber,
} from "../../utils/validate";
import { fetchWithAuth } from "../../data/api";
import { DeleteCustomer, PatchCustomer, PostCustomer } from "../../data/users";

export default function Settings() {
  const firstNRef = useRef(null);
  const lastNRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const postalCodeRef = useRef(null);
  const provinceRef = useRef(null);
  const cityRef = useRef(null);
  const streetRef = useRef(null);
  const addressDetailsRef = useRef(null);
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmNewPasswordRef = useRef(null);
  const activeUser = useUIStore((state) => state.active_user);
  const [errros, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    postalCode: false,
    province: false,
    city: false,
    street: false,
    addressDetails: false,
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  const [accountUpdateResult, setAccountUpdateResult] = useState({
    message: "",
    success: false,
    hidden: true,
  });
  const [passwordUpdateResult, setPasswordUpdateResult] = useState({
    message: "",
    success: false,
    hidden: true,
  });

  useEffect(() => {
    console.log(activeUser);
    if (activeUser) {
      firstNRef.current.value = activeUser.firstname || "";
      lastNRef.current.value = activeUser.lastname || "";
      emailRef.current.value = activeUser.emailaddress || "";
      phoneRef.current.value = activeUser.phonenumber || "";
      postalCodeRef.current.value = activeUser.postalcode || "";
      provinceRef.current.value = activeUser.addressprovince || "";
      cityRef.current.value = activeUser.addresscity || "";
      streetRef.current.value = activeUser.addressstreet || "";
      addressDetailsRef.current.value = activeUser.addressdetails || "";
    }
  }, []);

  const onAccountUpdate = async () => {
    const firstName = firstNRef.current.value.trim();
    const lastName = lastNRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phoneNumber = phoneRef.current.value.trim();
    const postalCode = postalCodeRef.current.value.trim();
    const province = provinceRef.current.value.trim();
    const city = cityRef.current.value.trim();
    const street = streetRef.current.value.trim();
    const addressDetails = addressDetailsRef.current.value.trim();

    let errors = {
      firstName: !isValidName(firstName) ? "Invalid first name" : false,
      lastName: !isValidName(lastName) ? "Invalid last name" : false,
      email: !isValidEmail(email) ? "Invalid email address" : false,
      phoneNumber:
        phoneNumber && !isValidPhoneNumber(phoneNumber)
          ? "Invalid phone number"
          : false,
      postalCode: postalCode.length < 5 ? "Invalid postal code" : false,
      province: !isValidName(province) ? "Invalid province name" : false,
      city: !isValidName(city) ? "Invalid city name" : false,
      street: false,
      addressDetails: false,
      currentPassword: false,
      newPassword: false,
      confirmNewPassword: false,
    };

    setErrors(errors);

    if (Object.values(errors).some((val) => val === true)) {
      console.error("Validation failed");
      return;
    }

    const res = await fetchWithAuth(() =>
      PatchCustomer(activeUser.customerid, {
        firstname: firstName,
        lastname: lastName,
        emailaddress: email,
        phonenumber: phoneNumber,
        postalcode: postalCode,
        addressprovince: province,
        addresscity: city,
        addressstreet: street,
        addressdetails: addressDetails,
      })
    );

    if (!res.ok) {
      console.error("Failed to update account information");
      setAccountUpdateResult({
        message: "Failed to update account information. Please try again.",
        success: false,
        hidden: false,
      });
      return;
    }

    setAccountUpdateResult({
      message: "Account information updated successfully!",
      success: true,
      hidden: false,
    });

    // Call API to update account information
  };

  const onPasswordUpdate = async () => {
    const currentPassword = currentPasswordRef.current.value.trim();
    const newPassword = newPasswordRef.current.value.trim();
    const confirmNewPassword = confirmNewPasswordRef.current.value.trim();

    let errors = {
      currentPassword: !currentPassword
        ? "Current password is required"
        : false,
      newPassword: !isValidPassword(newPassword)
        ? "New password must be at least 8 characters long"
        : false,
      confirmNewPassword:
        newPassword !== confirmNewPassword ? "Passwords do not match" : false,
    };

    setErrors(errors);
    if (Object.values(errors).some((val) => val === true)) {
      console.error("Validation failed for password update");
      return;
    }

    const resPasswordVerify = await fetchWithAuth(() =>
      fetch("/users/auth/password/verify/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: currentPassword }),
      })
    );

    if (!resPasswordVerify.ok) {
      setErrors((prev) => ({
        ...prev,
        currentPassword: "Current password is incorrect",
      }));
      console.error("Current password verification failed");
      setPasswordUpdateResult({
        message: "Current password is incorrect. Please try again.",
        success: false,
        hidden: false,
      });
      return;
    }

    console.log(activeUser);

    const res = await fetchWithAuth(() =>
      PatchCustomer(activeUser.customerid, { password: newPassword })
    );

    if (!res.ok) {
      console.error("Failed to update password");
      setPasswordUpdateResult({
        message: "Failed to update password. Please try again.",
        success: false,
        hidden: false,
      });
      return;
    }

    console.log("Password update response:", res);
    setPasswordUpdateResult({
      message: "Password updated successfully!",
      success: true,
      hidden: false,
    });
  };

  const onAccountDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      fetchWithAuth(() => DeleteCustomer(activeUser.customerid, "delete"))
        .then((res) => {
          if (res.ok) {
            console.log("Account deleted successfully");
            // Optionally, redirect or clear user session
          } else {
            console.error("Failed to delete account");
          }
        })
        .catch((error) => {
          console.error("Error deleting account:", error);
        });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[400px] flex flex-col">
        <h3 className="font-bold text-lg">Account Information</h3>
        <p className="text-md text-[#B6B6B6]">
          Click On Each Field You Wish To Update
        </p>

        <div className="grid mt-4 grid-cols-2 gap-3">
          <Input
            label="First Name"
            ref={firstNRef}
            alert={errros.firstName}
            requaired
          />
          <Input label="Last Name" ref={lastNRef} alert={errros.lastName} />
          <Input
            label="Email"
            className="col-start-1 col-end-3"
            ref={emailRef}
            alert={errros.email}
          />
          <Input
            label="Phone Number"
            className="col-start-1 col-end-3"
            ref={phoneRef}
            alert={errros.phoneNumber}
          />
          <Input
            label="Postal Code"
            className="col-start-1 col-end-3"
            ref={postalCodeRef}
            alert={errros.postalCode}
          />
          <Input label="Province" ref={provinceRef} alert={errros.province} />
          <Input label="City" ref={cityRef} alert={errros.city} />
          <Input
            label="Streat"
            className="col-start-1 col-end-3"
            ref={streetRef}
            alert={errros.street}
          />
          <Input
            label="Address Details"
            className="col-start-1 col-end-3"
            ref={addressDetailsRef}
            alert={errros.addressDetails}
          />
        </div>
        {accountUpdateResult && (
          <p
            className={`text-${
              accountUpdateResult.success ? "green" : "red"
            }-400 mt-2 ml-2 font-bold ${
              accountUpdateResult.hidden ? "hidden" : ""
            }`}
          >
            {accountUpdateResult.message}
          </p>
        )}
        <ButtonVariant3
          text="Update"
          img={<RedoDot />}
          className="ml-auto mt-3"
          onClick={onAccountUpdate}
        />

        <div className="flex flex-col mt-5">
          <h3 className="font-bold text-lg">Password Reset</h3>
          <p className="text-md text-[#B6B6B6]">
            Fill This Form If You Wish To Change Your Password
          </p>
          <Input
            label="Current Password"
            className={"mt-3"}
            ref={currentPasswordRef}
            alert={errros.currentPassword}
            type="password"
          />

          <Input
            label="New Password"
            className={"mt-3"}
            ref={newPasswordRef}
            type="password"
          />
          <Input
            label="Confirm New Password"
            className={"mt-3"}
            ref={confirmNewPasswordRef}
            alert={errros.confirmNewPassword}
            type="password"
          />
          {passwordUpdateResult && (
            <p
              className={`text-${
                passwordUpdateResult.success ? "green" : "red"
              }-400 mt-2 ml-2 font-bold ${
                passwordUpdateResult.hidden ? "hidden" : ""
              }`}
            >
              {passwordUpdateResult.message}
            </p>
          )}
          <ButtonVariant3
            text="Update Password"
            img={<KeyRound />}
            className={"ml-auto mt-4"}
            onClick={onPasswordUpdate}
            alert={errros.confirmNewPassword}
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
            onClick={onAccountDelete}
          />
        </div>
      </div>
    </div>
  );
}
