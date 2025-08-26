import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ isLogin, setIsLogin }) => {
  return (
    <header className="bg-[#2b2b2b] w-full p-[20px] rounded-b-2xl text-center">
      <NavLink
        to={"/login"}
        onClick={() => {
          setIsLogin(false);
          localStorage.setItem("username", "");
          localStorage.setItem("userId", "");
        }}
        className={({ isActive }) =>
          isActive ? "btn btn-success m-1" : "btn btn-error m-1"
        }
      >
        {isLogin ? "Logout" : "Login"}
      </NavLink>

      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "btn btn-success m-1" : "btn btn-error m-1"
        }
      >
        Show-Task
      </NavLink>

      <NavLink
        to={"/create"}
        className={({ isActive }) =>
          isActive ? "btn btn-success m-1" : "btn btn-error m-1"
        }
      >
        Add-Task
      </NavLink>

      <div className="block text-center text-white text-4xl mt-10 capitalize">
        {isLogin
          ? `Hello ${localStorage.getItem("username")}👋`
          : "Please log in to your account"}
      </div>
    </header>
  );
};
export default Header;
