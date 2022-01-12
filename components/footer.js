import Link from "next/link";
import React from "react";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-black w-full h-full p-2 md:h-[400px] mt-5 bottom-0 text-gray-100 ">
      <div className=" w-full md:w-1/4  flex flex-col gap-3 md:gap-0 m-auto p-2 py-2 px-2">
        <h1 className="text-xl font-bold  tracking-wide lg:text-2xl m-auto">
          ALTON
        </h1>
        <p>
          Alton is located in a strategic place,feel free to visit our shop
          directly located in Nakuru, westside mall
        </p>
        <div className="w-full flex mt-4 md:mt-3 mb-2 gap-2">
          <div className="w-1/2 border rounded-md flex items-center p-1  gap-2 border-gray-200">
            <BsApple className="text-gray-50 text-xl" />
            <div className="w-3/4">
              <p>download it on app store</p>
            </div>
          </div>
          <div className="w-1/2  gap-2  rounded-md flex items-center p-1 border border-gray-200">
            <FaGooglePlay className="text-red-500 text-xl bg-clip-text font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
            <div className="w-3/4">
              <p>get it on play store</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full mt-2 md:mt-0 mb-2 md:w-3/4 m-auto pl-16 grid grid-cols-2 md:flex md:flex-row items-center gap-2  p-2">
        <div className="w-full md:w-1/3 text-gray-200">
          {" "}
          <h4 className="font-bold text-lg">Quick links</h4>{" "}
          <ul className="w-full md:w-0 text-gray-50 flex flex-col gap-1">
            <Link href="/collection">
              <li>
                {" "}
                <a>collection</a>
              </li>
            </Link>
            <Link href="/about">
              <li>
                {" "}
                <a>about</a>
              </li>
            </Link>
            <Link href="/shop">
              <li>
                {" "}
                <a>shop</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3  text-gray-200">
          {" "}
          <h4 className="font-bold text-lg">Support</h4>{" "}
          <ul className="text-gray-50 flex flex-col gap-1">
            <Link href="/Terms-and-conditions">
              <li>
                {" "}
                <a>Terms & conditions </a>
              </li>
            </Link>
            <Link href="/help">
              <li>
                {" "}
                <a>Help</a>
              </li>
            </Link>
            <Link href="/frequently-asked-questions">
              <li>
                {" "}
                <a>FAQ</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3  text-gray-200">
          <h4 className="font-bold text-lg">Contact</h4>{" "}
          <ul className="text-gray-50 flex flex-col gap-1">
            <Link href="#">
              <li>
                {" "}
                <a>AltonSportsNaks@gmail.com</a>
              </li>
            </Link>
            <Link href="#">
              <li>
                {" "}
                <a>+254 741882041</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="m-auto   md:pl-24  mt-5 mb-1 md:mb-0 md:mt-4 w-full md:w-1/4 flex items-center justify-center gap-4 ">
        <div className="bg-gray-50 h-9 w-9 rounded-full flex items-center">
          <FaFacebookF className="text-black m-auto " />
        </div>
        <div className="bg-gray-50 h-9 w-9  rounded-full flex items-center">
          <AiOutlineInstagram className="text-black text-lg m-auto " />
        </div>
        <div className="bg-gray-50 h-9 w-9  rounded-full flex items-center">
          <FaWhatsapp className="text-black m-auto " />
        </div>
      </div>
    </footer>
  );
}
