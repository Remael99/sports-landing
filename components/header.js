import React, { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex   flex-col  w-full  py-4 px-2 h-4/5 ">
      <nav className="flex items-center relative justify-between w-full  lg:justify-between">
        <div className="font-bold  tracking-wide lg:text-2xl">
          <h1>ALTON</h1>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <HiOutlineMenuAlt1 className="text-xl text-gray-700 " />
          ) : (
            <BiMenu className="text-2xl text-gray-700 " />
          )}
        </button>

        <div
          className={
            open
              ? "w-3/4 p-2 py-2 absolute right-0 bg-white rounded-b-md shadow-md z-50 px-8 top-full lg:hidden h-[300px] overflow-auto"
              : "w-1/2 hidden lg:flex  "
          }
        >
          <ul className="flex flex-col  font-semibold lg:flex-row lg:justify-evenly lg:w-full h-full gap-4 text-center items-center justify-around text-warmGray-700">
            <Link href="/collection">
              <li>
                <a>collection</a>
              </li>
            </Link>
            <Link href="/about">
              <li>
                <a>about</a>
              </li>
            </Link>
            <Link href="/shop">
              <li>
                <a>shop</a>
              </li>
            </Link>
            <Link href="/download">
              <li>
                <a>download apps</a>
              </li>
            </Link>
          </ul>
          {open && (
            <div
              className={`${
                open ? "flex" : "hidden"
              }lg:flex gap-4 font-semibold w-full h-auto flex flex-col mt-2 lg:mt-0 `}
            >
              <button className="font-semibold">Login</button>
              <button className="bg-black text-gray-300 py-2 rounded-lg px-4 font-semibold">
                Sign up
              </button>
            </div>
          )}
        </div>
        <div className=" hidden lg:flex gap-4 font-semibold ">
          <button className="font-semibold">Login</button>
          <button className="bg-black text-gray-300 py-3 rounded-xl px-6 font-semibold">
            Sign up
          </button>
        </div>
      </nav>
      {/* banner */}
      <div className="bg-gray-800 w-full h-[80%] overflow-hidden md:h-[450px] p-3 rounded-lg my-2 mt-2 bg-banner-background bg-no-repeat bg-cover bg-center md:bg-right-top">
        <div className="flex flex-col w-full gap-4 md:gap-7 md:my-20 md:h-full  md:ml-4 my-10 md:w-3/4 lg:w-1/2 mr-auto">
          <h1 className="text-gray-300 uppercase tracking-widest">Sports</h1>
          <h2 className="text-gray-100 font-bold text-4xl">
            Easy and reliable purchase
          </h2>
          <p className="text-gray-400">
            we provide various kinds of badminton equipment for you ranging from
            rackets, shuttercocks, shoes, nets and racket strings
          </p>
          <button className="bg-white w-[150px] py-3 px-2 text-gray-800 font-semibold rounded-lg">
            Order now
          </button>
        </div>
      </div>
    </header>
  );
}
