import { NavLink } from "react-router-dom";
import { USER_NAME } from "../Pages/Login";

const Header = ({ login, setLogin }) => {
  return (
    <header className="bg-[#2b2b2b] w-full p-[20px] rounded-b-2xl text-center">
      <NavLink
        to={"/login"}
        onClick={() => setLogin(false)}
        className={({ isActive }) =>
          isActive ? "btn btn-success m-1" : "btn btn-error m-1"
        }
      >
        {login ? "Logout" : "Login"}
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

      <div className={`block text-center  text-white text-4xl mt-10 capitalize`}>
        {login ? `Hello  ${USER_NAME}👋` : "Please log in to your account"}
      </div>
    </header>
  );
};
export default Header;
