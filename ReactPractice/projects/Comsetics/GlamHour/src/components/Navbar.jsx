import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <nav className="main w-full flex fixed top-0 left-0 z-50 justify-between text-amber-100 text-2xl font-bold cursor-pointer ">
        <div className="one">
          <span className=" font-extrabold text-3xl">Glam Hour</span>
        </div>

        <div className="two flex  justify-center gap-6 text-2xl font-mono  font-bold ">
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <Link to="/products">Products</Link>
        </div>
        <div className="three flex ">
          <Link to="/login">
            {" "}
            <User /> <span>Sign in </span>{" "}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
