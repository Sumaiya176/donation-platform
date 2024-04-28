import { useState } from "react";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  const user = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();

  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  // console.log(user);

  return (
    <div className="navbar bg-base-100 dark:bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dark:text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-base w-52"
          >
            <li>
              <a href="/donations">All Donations</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/leaderboard">Leaderboard</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
            <li>
              <a href="/volunteer">Be Volunteer</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl lg:text-3xl text-[tomato]">
          <svg
            width="25"
            height="26"
            viewBox="0 0 256 263"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              d="M166.872 131.237l45.91-79.275 22.184 79.275-22.185 79.256-45.909-79.256zm-22.376 12.874l45.916 79.262-79.966-20.486-57.77-58.776h91.82zm45.906-105.033l-45.906 79.275h-91.82l57.77-58.78 79.956-20.495zm65.539 65.18L227.933.06l-104.54 27.925-15.475 27.207-31.401-.225L0 131.244l76.517 76.259h.003l31.388-.232 15.497 27.207 104.528 27.92L255.94 158.22l-15.906-26.982 15.906-26.978z"
              fill="#222C37"
            />
          </svg>
          UnityAid
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base px-1 dark:text-white">
          <li>
            <a href="/donations">All Donations</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/leaderboard">Leaderboard</a>
          </li>
          <li>
            <a href="/community">Community</a>
          </li>
          <li>
            <a href="/volunteer">Be Volunteer</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center content-center">
        <button onClick={() => darkModeHandler()}>
          {
            dark && <IoSunny className="dark:text-white" /> // render sunny when dark is true
          }
          {
            !dark && <IoMoon className="dark:text-white" /> // render moon when dark is false
          }
        </button>
      </div>
      <div className="navbar-end">
        {user.user ? (
          <button onClick={() => dispatch(logout())} className="btn">
            LogOut
          </button>
        ) : (
          <a href="/login" className="btn">
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
