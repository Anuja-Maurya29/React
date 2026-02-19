import React from "react";
import { RiTodoFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="container flex flex-row justify-between">
        <div className="image w-2xl h-20 mr-auto">
          <a>
            <RiTodoFill size={"50px"} />{" "}
          </a>
        </div>

        <div className="dropdown mr-auto">
          <div className="tryThese">
            <button className="dropbtn">
              Try These
              <FaAngleDown />
            </button>
            <div className="dropdownList flex  flex-col">
              <a href="">Task Management</a>
              <a href="">Add Notes</a>
            </div>
          </div>
        </div>
     
        
        <div className="flex flex-row gap-4">
          <button>Login</button>
        <button>Start for free</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
