import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({});
  const [icon, setIcon] = useState(true);
  const [type, setType] = useState("password");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    setIcon(!icon);
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data.email,data.password);
    if (!data.email || !data.password) {
      return alert("all feilds are required");
    }
    setData({});
    navigate("/products");
  };

  return (
    <>
      <div className="h-full flex justify-center items-center  text-amber-100 ">
        <div className="bg-amber-100/10 h-200 w-300 flex flex-col  text-amber-100 justify-center items-center">
          <p className="text-center text-amber-100 font-bold text-2xl p-3 ">
            Login
          </p>
          <div className="body w-150 h-120 bg-amber-100/2 flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-1.5 justify-center"
            >
              <span className="text-gray-200">Enter email</span>
              <input
                className="w-full max-w-sm border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />

              <span className="text-gray-200">Enter Password</span>

              <div className="relative w-full max-w-sm">
                <input
                  type={type}
                  value={data.password}
                  onChange={handleChange}
                  name="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />

                <span
                  onClick={handleClick}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                >
                  {icon ? <IoIosEye size={22} /> : <IoIosEyeOff size={22} />}
                </span>
              </div>

              <p className="text-gray-200">Forgot passWord?</p>
              <button
                type="submit"
                className="bg-blue-700 text-gray-100 w-full max-w-sm"
              >
                Login
              </button>
              <p className="text-gray-200 text-center">or continue with</p>
              <button className="bg-white w-10 p-1">
                <FcGoogle size={30} />
              </button>
              <p>
                Don't have an account yet?
                <Link to="/signup">
                  <span className="underline px-1">Register for free</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
