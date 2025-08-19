import { ArrowLeft, Bell, PanelLeft, Search, Settings } from "lucide-react";
import { ButtonVariant2, ButtonVariant4 } from "../components/buttons";
import Header from "../components/header";
import { Input, InputVariant1 } from "../components/inputs";
import { useNavigate, useSearchParams } from "react-router-dom";
import { data, useParams } from "react-router";
import { use, useRef, useState } from "react";
import { logIn, PostCustomer, isLoggedIn } from "../../data/users";
import { fetchWithAuth } from "../../data/api";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isOnlyDigits,
} from "../../utils/validate";
import { PostShop } from "../../data/shops";
import useUIStore from "../ui_storage";
import {
  PostImageurlProduct,
  PostProduct,
  UpdateImageurlProduct,
  UpdateProduct,
} from "../../data/products";

export default function Form() {
  const navigate = useNavigate();
  const { type: typeParam } = useParams();

  return (
    <div className="grid grid-rows-[65px_1fr] grid-cols-1 w-full h-screen">
      {/* Top Left Corner of The Header */}
      <header className="border-r border-b border-[#26262B] text-white p-4 col-start-1 col-end-2 max-sm:col-end-4 row-start-1 row-end-2 flex items-center justify-between">
        <ButtonVariant2
          img={<ArrowLeft size={17} />}
          onClick={() => navigate(-1)}
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
      <div>
        {typeParam && typeParam.toLowerCase() === "login" ? (
          <Login />
        ) : typeParam.toLocaleLowerCase() === "signup" ? (
          <SignUp />
        ) : typeParam.toLocaleLowerCase() === "createshop" ? (
          <CreateShop />
        ) : typeParam.toLocaleLowerCase() === "createproduct" ? (
          <CreateProduct />
        ) : (
          <div className="text-white">
            Form type: {typeParam || "No type specified"}
          </div>
        )}
      </div>
    </div>
  );
}

export function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isError, setError] = useState(false);
  const navigate = useNavigate();
  const setActiveUser = useUIStore((state) => state.setActiveUser);
  const setActiveShop = useUIStore((state) => state.setActiveShop);

  const onSubmit = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();

    try {
      const tokenJson = await logIn({
        identifier: email,
        password: password,
      });

      if (!tokenJson.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const response = await isLoggedIn();
      if (response) {
        setActiveUser(response);
        if (response.isshopadmin) {
          let res = await fetchWithAuth(() =>
            fetch(`/shops/shops/?adminid=${response.customerid}`)
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
        }
      } else {
        setActiveUser(false);
      }

      navigate("/");
    } catch (error) {
      setError("Wrong Credentials");
    }
  };

  return (
    <div className="flex flex-1 w-full h-full justify-center items-center">
      {/* Form */}
      <form className="card-variant-3 p-10 rounded-md flex flex-col">
        {/* Title */}
        <h3 className="font-black text-xl mb-3">Login Form</h3>
        <Input
          ref={emailRef}
          label={"Email Address"}
          placeholder="qwerty@gmail.com"
          className="mb-3 min-w-[300px]"
        />
        <Input
          ref={passwordRef}
          label={"Password"}
          placeholder="type password..."
          type={"password"}
          className="mb-3"
        />

        {/* Form Error */}
        {isError && (
          <div className="text-[12px] mb-2 text-red-400">* {isError}</div>
        )}
        <a className="text-[13px] text-[#6274f7] cursor-pointer ml-1">
          Forgot Password?
        </a>

        <button
          onClick={onSubmit}
          className=" card-variant-2 w-fit py-[7px] px-6 rounded-md cursor-pointer text-sm ml-auto hover:scale-[1.02] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export function SignUp() {
  const firstNRef = useRef(null);
  const lastNRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const ConfirmPassRef = useRef(null);
  const isShopAdmin = useRef(null);
  const [isError, setError] = useState(false);
  const [inputError, setInputError] = useState({
    Err_firstN: false,
    Err_lastN: false,
    Err_Email: false,
    Err_Pass: false,
    Err_ConfPass: false,
  });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
      firstName: firstNRef.current.value.trim(),
      lastName: lastNRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value,
      confirmPass: ConfirmPassRef.current.value,
      isShopAdmin: isShopAdmin.current.value,
    };

    // Validation rules with error messages
    const validationRules = [
      {
        field: "firstName",
        errorKey: "Err_firstN",
        validate: (value) => {
          if (!value) return "First name is required";
          if (!isValidName(value)) return "Invalid first name format";
          return null;
        },
      },
      {
        field: "lastName",
        errorKey: "Err_lastN",
        validate: (value) => {
          if (value && !isValidName(value)) return "Invalid last name format";
          return null;
        },
      },
      {
        field: "email",
        errorKey: "Err_Email",
        validate: (value) => {
          if (!value) return "Email is required";
          if (!isValidEmail(value)) return "Invalid email format";
          return null;
        },
      },
      {
        field: "password",
        errorKey: "Err_Pass",
        validate: (value) => {
          if (!value) return "Password is required";
          if (!isValidPassword(value))
            return "Password must contain at least 8 characters with letters and numbers";
          return null;
        },
      },
      {
        field: "confirmPass",
        errorKey: "Err_ConfPass",
        validate: (value) => {
          if (!value) return "Please confirm your password";
          if (formData.password !== value) return "Passwords do not match";
          return null;
        },
      },
    ];

    // Run validation
    const errors = validationRules.reduce(
      (acc, rule) => {
        const error = rule.validate(formData[rule.field]);
        if (error) acc[rule.errorKey] = error;
        return acc;
      },
      {
        Err_firstN: "",
        Err_lastN: "",
        Err_Email: "",
        Err_Pass: "",
        Err_ConfPass: "",
      }
    );

    // Check if there are any validation errors
    const hasValidationErrors = Object.values(errors).some(
      (error) => error !== ""
    );

    if (hasValidationErrors) {
      setInputError(errors);
      return;
    }

    // Submit form
    try {
      const response = await PostCustomer({
        firstname: formData.firstName,
        lastname: formData.lastName,
        emailaddress: formData.email,
        password: formData.password,
        isshopadmin: formData.isShopAdmin,
      });

      if (!response.ok) {
        // Map server errors to form errors
        const serverErrorMap = {
          emailaddress: "Err_Email",
          password: "Err_ConfPass",
          firstname: "Err_firstN",
          lastname: "Err_lastN",
        };

        Object.entries(serverErrorMap).forEach(([serverField, errorKey]) => {
          if (response.data?.[serverField]) {
            errors[errorKey] = response.data[serverField];
          }
        });

        setInputError(errors);
      } else {
        // Clear input errors on successful submission
        setInputError({
          Err_firstN: false,
          Err_lastN: false,
          Err_Email: false,
          Err_Pass: false,
          Err_ConfPass: false,
        });
        // Navigate to login page or any other page
        navigate("/");
      }
      // Handle success case here if needed
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle network/other errors
    }
  };

  return (
    <div className="flex flex-1 w-full h-full justify-center items-center">
      {/* Form */}
      <form className="h-fit card-variant-3 p-6 rounded-md grid grid-rows-6 grid-cols-2 gap-3">
        {/* Title */}
        <h3 className="font-black text-xl mb-3 self-end">Sign Up Form</h3>
        <Input
          ref={firstNRef}
          label={"First Name"}
          placeholder="Type Your Name"
          className=" w-full col-start-1 col-end-2"
          required
          alert={inputError.Err_firstN}
        />
        <Input
          ref={lastNRef}
          label={"Last Name"}
          placeholder="Type Your Last Name"
          className=" w-full col-start-2 col-end-3"
          alert={inputError.Err_lastN}
        />
        <Input
          ref={emailRef}
          label={"Email Address"}
          placeholder="qwerty@gmail.com"
          className="min-w-[300px] col-start-1 col-end-3"
          required
          alert={inputError.Err_Email}
        />
        <Input
          ref={passwordRef}
          label={"Password"}
          placeholder="Type Password..."
          type={"password"}
          required
          alert={inputError.Err_Pass}
        />
        <Input
          ref={ConfirmPassRef}
          label={"Confirm Password"}
          placeholder="Confirm Password..."
          type={"password"}
          required
          alert={inputError.Err_ConfPass}
        />
        <div className="flex mb-3 ml-1 h-fit">
          <h3 className="text-sm mr-2">Are you a shop admin?</h3>
          <input type="checkbox" ref={isShopAdmin} />
        </div>
        {/* Form Error */}
        {isError && (
          <div className="text-[12px] mb-2 text-red-400 col-start-1 col-end-3">
            * {isError}
          </div>
        )}

        <button
          onClick={onSubmit}
          className="h-fit card-variant-2 w-fit py-[7px] px-6 rounded-md cursor-pointer text-sm ml-auto hover:scale-[1.02] transition col-start-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export function CreateShop() {
  const shopName = useRef(null);
  const postalCode = useRef(null);
  const [isError, setError] = useState(false);
  const activeUser = useUIStore((state) => state.active_user);

  const onSubmit = async (e) => {
    e.preventDefault();
    const shop_name = shopName.current.value;
    const postal_code = postalCode.current.value;

    if (!shop_name || !postal_code) {
      setError("all fields are required");
      return;
    }
    if (!isOnlyDigits(postal_code)) {
      setError("Postal Code is not valid");
      return;
    }
    let resFromIsthereAShop = await fetchWithAuth(() =>
      fetch(`/shops/shopAdmin/?adminid=${activeUser.customerid}`)
    );
    if (!res.ok) {
      console.error("fetching from shopAdmin failed");
      return;
    }
    resFromIsthereAShop = await resFromIsthereAShop.json();
    if (!resFromIsthereAShop.length == 0) {
      setError("You already have a shop");
      return;
    }

    let res = await fetchWithAuth(() =>
      PostShop({
        shopname: shop_name,
        postalcode: postal_code,
        adminid: activeUser.customerid,
      })
    );

    if (!res.ok) {
      res = await res.json();
      console.error("posting shop was not successful");
      setError(`Creating Shop Failed ${res.message}`);
      return;
    }
    navigate("/admin/dashboard/home/");
  };

  return (
    <div className="flex flex-1 w-full h-full justify-center items-center">
      {/* Form */}
      <form className="card-variant-3 p-10 rounded-md flex flex-col">
        {/* Title */}
        <h3 className="font-black text-xl mb-3">Create A Shop</h3>
        <Input
          label={"Shop Name"}
          ref={shopName}
          placeholder="Enter Shop Name"
          className="mb-3 min-w-[300px]"
        />
        <Input
          ref={postalCode}
          label={"Shop Postal Code"}
          placeholder="Enter Postal Code"
          type={"number"}
          className="mb-3"
        />
        {isError && (
          <div className="text-[12px] mb-2 text-red-400 col-start-1 col-end-3">
            * {isError}
          </div>
        )}
        <button
          className=" card-variant-2 w-fit py-[7px] px-6 rounded-md cursor-pointer text-sm ml-auto hover:scale-[1.02] transition"
          onClick={onSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export function CreateProduct() {
  const [searchParams] = useSearchParams();

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const brandRef = useRef(null);
  const detailRef = useRef(null);
  const thumbRef = useRef(null);
  const imagesRef = useRef(null);
  const priceRef = useRef(null);
  const stockRef = useRef(null);
  const active_shop = useUIStore((state) => state.active_shop);

  const [isError, setError] = useState(false);

  const onSubmit = async (e) => {
    const productParam = searchParams.get("productid");

    e.preventDefault();
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const brand = brandRef.current.value;
    const detail = detailRef.current.value;
    const thumb = thumbRef.current.files[0];
    const images = imagesRef.current.files;
    const price = priceRef.current.value;
    const stock = stockRef.current.value;

    if ((!title || !desc || !thumb || !brand) && !productParam) {
      setError("Title, Description, Thumbnail and Brand Are Required");
      return;
    }

    const request_data = {
      name: title,
      descriptoin: desc,
      thumbnail: thumb,
      brand: brand,
      price: parseFloat(price),
      stock: parseInt(stock),
      shopid: active_shop.shopid,
    };
    console.log({ request_data });

    let res;

    if (productParam == undefined) {
      res = await fetchWithAuth(() => PostProduct(request_data));
    } else {
      res = await fetchWithAuth(() =>
        UpdateProduct(productParam, request_data)
      );
    }

    if (!res.ok) {
      setError("Something went wrong!");
      console.log(res);
      return;
    }

    res = await res.json();
    console.log(res);
    const productid = res.productid;

    for (let file of images) {
      let resImgURL;
      if (productParam == undefined) {
        resImgURL = await fetchWithAuth(() =>
          PostImageurlProduct({
            image_url: file,
            productid: productid,
          })
        );
      } else {
        resImgURL = await fetchWithAuth(() =>
          UpdateImageurlProduct({
            image_url: file,
            productid: productid,
          })
        );
      }

      if (!res.ok) {
        setError("Something went wrong");
        return;
      }
      console.log(res);
    }
  };

  return (
    <div className="flex flex-1 w-full h-full justify-center items-center">
      {/* Form */}
      <form className="h-fit card-variant-3 p-6 rounded-md grid grid-rows-6 grid-cols-2 gap-3">
        {/* Title */}
        <h3 className="font-black text-xl mb-3 self-end">Create A Product</h3>
        <Input
          label={"Title"}
          ref={titleRef}
          placeholder="Enter product title"
          className=" w-full col-start-1 col-end-2"
          required
        />
        <Input
          ref={descRef}
          label={"Description"}
          placeholder="Describe your product"
          className=" w-full col-start-2 col-end-3"
        />
        <Input
          label={"Brand"}
          ref={brandRef}
          placeholder="Enter brand name"
          className="min-w-[300px] col-start-1 col-end-2"
          required
        />
        <Input
          label={"Details"}
          ref={detailRef}
          placeholder="Additional product details"
          className="min-w-[300px] col-start-2 col-end-3"
          required
        />
        <Input
          label={"Price"}
          ref={priceRef}
          placeholder="0.00"
          type="number"
          step="0.01"
          min="0"
          className="min-w-[300px] col-start-1 col-end-2"
          required
        />
        <Input
          label={"Stock Quantity"}
          ref={stockRef}
          placeholder="0"
          type="number"
          min="0"
          className="min-w-[300px] col-start-2 col-end-3"
          required
        />

        <Input
          ref={thumbRef}
          label={"Thumbnail"}
          placeholder="Choose thumbnail image"
          type={"file"}
          accept="image/*"
          required
        />
        <Input
          ref={imagesRef}
          label={"Additional Images"}
          placeholder="Choose additional images"
          type={"file"}
          accept="image/*"
          multiple
          required
        />

        {/* Form Error */}
        {isError && (
          <div className="text-[12px] mb-2 text-red-400 col-start-1 col-end-3">
            * {isError}
          </div>
        )}

        <button
          onClick={onSubmit}
          className="h-fit card-variant-2 w-fit py-[7px] px-6 rounded-md cursor-pointer text-sm ml-auto hover:scale-[1.02] transition col-start-2"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
