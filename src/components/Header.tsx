import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsVertical, BiCast, BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";
import Button from "./Button";
import { isTemplateSpan } from "typescript";
const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>("");
  const [items, setItem] = useState<string[]>(["Wizkid", "Rema", "Bxnx"]);
  const [prevResult, setPrevResult] = useState<string[]>([""]);
  const [result, setResult] = useState<string[]>([""]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    const filterItems = items.filter((item) => {
      return item.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (e.target.value) {
      setPrevResult(filterItems);
    } else {
      setPrevResult([""]);
    }
   
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputVal);
  };
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <div className=" sticky top-0  bg-black  h-[10%] w-screen   border-[#353535] border-b px-0 space-x-4 lg:px-8 flex justify-between items-center  ">
      <div className="flex justify-end items-center bg-bue-400 space-x- w-fit h-[60%]">
        <div className="w-16 h-10 hover:bg-[#4c4c4c7d] flex justify-center items-center rounded-full space-x-1 cursor-pointer">
          <RxHamburgerMenu size={"20px"} />
        </div>
        <img
          src="/assets/Capture.PNG"
          alt=""
          className="object-cover w-full  h-full"
        />
      </div>
      <div className="relative ">
        {showInput && (
          <input
            type="search"
            onChange={handleChange}
            // value={inputRef.current?.value}
            onBlur={() => {
              setTimeout(() => {
                setShowInput(false);
              }, 210);
              setPrevResult([""])
            }}
            onFocus={() => {
              setIsFocus(true);
            }}
            placeholder="Search songs, albums, artists, podcasts"
            value={inputVal}
            ref={inputRef}
            className="w-full flex md:hidden px-4  items-center placeholder:text-[16px] placeholder:font-semibold focus:placeholder:text-[#727272]   text-xl focus-within:bgblack h-fit outline-none bg-transparent   text-white"
          />
        )}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className={`${
            isFocus ? "bg-black" : "bg-[#343935]"
          }   rounded-lg hidden md:flex bg-gradient-to-tr border border-[#3D3E36] items-center w-[500px]  h-[40px] `}
        >
          <div className="w-[8%] flex justify-center items-center  cursor-pointer ml-3">
            <BiSearch size={"24px"} color={isFocus ? "white" : "#727272"} />
          </div>

          <input
            type="search"
            onChange={handleChange}
            // value={inputRef.current?.value}
            onBlur={() => {
              setTimeout(() => {
                setIsFocus(false);
              }, 210);
            }}
            onFocus={() => {
              setIsFocus(true);
            }}
            placeholder="Search songs, albums, artists, podcasts"
            value={inputVal}
            ref={inputRef}
            className="w-full hidden md:flex px-4  items-center placeholder:text-[16px] placeholder:font-semibold focus:placeholder:text-[#727272]   text-xl focus-within:bgblack h-fit outline-none bg-transparent   text-white"
          />
        </form>
        {isFocus && (
          <div className="w-full bg-orange-800  text-white h-fit absolute">
            {prevResult?.map((a) => {
              return (
                <h2
                  onClick={() => {
                    console.log(a);
                    setInputVal(a);
                    setResult((prev) => [...prev, a]);
                    setPrevResult([""])
                    localStorage.setItem("searchedRes", JSON.stringify(result));
                  }}
                  className="text-xl cursor-pointer"
                >
                  {a}
                </h2>
              );
            })}
          </div>
        )}
      </div>
      <div className=" flex mx- space-x-4">
        <div
          className="flex md:hidden"
          onClick={() => {
            setShowInput(true);
            inputRef.current?.focus()
          }}
        >
          <AiOutlineSearch size={"20px"} />
        </div>
        <BiCast size={30} />
        <BiDotsVertical size={25} cursor={"pointer"} />
        <div className="">
          <Button
            bg="black"
            backgroundColor="white"
            disabled={true}
            onClickFn={() => ""}
            border=""
            text="Sign In"
            color=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
