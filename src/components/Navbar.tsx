import React, { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MdHomeFilled,
  MdLibraryAdd,
  MdOutlineExplore,
  MdOutlineLibraryMusic,
  MdOutlinePhotoLibrary,
  MdOutlineVerifiedUser,
  MdVerifiedUser,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
const Navbar = () => {
  const ref = useRef<string>("");
  // const [value,setValue] = useState<string>("Home");
  const { pathname } = useLocation();
  return (
    <div className="h-full top-20 0 bg-black sm:w-[12%] a md:w-[19%] border-r border-[#353535] pt-2 md:pt-0 md:p-2 hidden sm:flex flex-col space-y-8">
      <div className="w-full px-4 md:px-0">
        <NavLink to="/">
          <div
            className={`rounded-xl w-full flex flex-col justify-center md:flex-row md:justify-start md:items-center space-y-2 md:space-x-6  items-center h-[70px] md:h-[48px] cursor-pointer relative  transition-all delay-75  md:px-6  text-[10px] md:text-lg ${
              pathname === "/"
                ? "bg-[rgba(48,47,47,0.64)] font-semibold "
                : "hover:bg-[#353535] "
            }`}
          >
            <div className="">
              <MdHomeFilled size={"25px"} />
            </div>
            <h2 className="w-">Home</h2>
          </div>
        </NavLink>
        <NavLink to="/Explore">
          <div
            className={`rounded-xl w-full flex flex-col justify-center md:flex-row  md:justify-start md:items-center space-y-2 md:space-x-6 relative items-center h-[70px] md:h-[48px] cursor-pointer transition-all delay-75  md:px-6  text-[10px] md:text-lg  ${
              pathname === "/Explore"
                ? "bg-[rgba(48,47,47,0.64)] font-semibold"
                : "hover:bg-[#353535]"
            }`}
          >
            <div className="">
              <MdOutlineExplore size={"25px"} />
            </div>
            <h2>Explore</h2>
          </div>
        </NavLink>
        <NavLink to="/Library">
          <div
            className={`rounded-xl w-full flex flex-col justify-center md:flex-row md:justify-start md:items-center space-y-2 md:space-x-6 relative items-center h-[70px] md:h-[48px] cursor-pointer transition-all delay-75   md:px-6  text-[10px] md:text-lg ${
              pathname === "/Library"
                ? "bg-[rgba(48,47,47,0.64)] font-semibold"
                : "hover:bg-[#353535]"
            }`}
          >
            <div className="">
              <MdOutlineLibraryMusic size={"25px"} />
            </div>
            <h2>Library</h2>
          </div>
        </NavLink>
      </div>
      <div className="border-t px-4 md:mx-2 border-[#3D3E36] md:pt-4 flex flex-col space-y-4">
        {/* <div className="w-full bg-[#353535] flex justify-center items-center hover:bg-[#535356] h-fit  cursor-pointer font-semibold text-sm "> */}
        <div className=" w-full flex  justify-center items-center h-[70px] md:h-fit s:text-[10px] cursor-pointer transition-all delay-75 rounded-xl md:rounded-full md:py-2  md:px-3  text-[10px] md:text-lg hover:bg-[#353535] flex-col space-y-2 md:bg-[rgba(48,47,47,0.64)] ">
          <div className="block md:hidden">
            <BiUser size={"25px"} />
          </div>
          <h1>Sign In</h1>
        </div>
        <p className="text-[rgb(144,144,144)] hidden md:block text-[12px] leading-[16.8px]">
          Sign in to create & share playlists, get personalized recommendations,
          and more.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
