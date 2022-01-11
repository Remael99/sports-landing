import React from "react";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black w-full h-[400px] mt-5 bottom-0 text-gray-100 ">
      <div className="w-1/4  flex flex-col m-auto p-2 py-2 px-2">
        <h1 className="text-xl font-bold  tracking-wide lg:text-2xl m-auto">
          ALTON
        </h1>
        <p>
          Alton is located in a strategic place,feel free to visit our shop
          directly located in Nakuru, westside mall
        </p>
        <div className="w-full flex mt-2 gap-2">
          <div className="w-1/2 border rounded-md flex items-center p-1 border-gray-200">
            <BsApple className="text-gray-50 text-xl" />
            <div className="w-3/4">
              <p>download it on app store</p>
            </div>
          </div>
          <div className="w-1/2 h-10  rounded-md flex items-center p-1 border border-gray-200">
            <FaGooglePlay className="text-red-500 bg-clip-text font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
            <div className="w-3/4">
              <p>get it on play store</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto pl-16 flex  items-center gap-2  p-2">
        <div className="w-1/3 text-gray-200">
          {" "}
          <h4 className="font-bold text-lg">Quick links</h4>{" "}
          <ul className="text-gray-50">
            <li>collection</li>
            <li>about</li>
            <li>shop</li>
          </ul>
        </div>
        <div className="w-1/3 text-gray-200">
          {" "}
          <h4 className="font-bold text-lg">Support</h4>{" "}
          <ul className="text-gray-50">
            <li>Terms & conditions </li>
            <li>Help</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="w-1/3 text-gray-200">
          <h4 className="font-bold text-lg">Quick links</h4>{" "}
          <ul className="text-gray-50">
            <li>collection</li>
            <li>about</li>
            <li>shop</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
