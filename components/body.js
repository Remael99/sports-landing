import Image from "next/image";
import React from "react";
import Tabs from "./Tabs";

export default function Body() {
  return (
    <main className="my-3  px-2 ">
      <section className="w-full flex flex-col ">
        {/*tab*/}
        <h2 className="m-auto font-semibold ">Best selling product</h2>
        <Tabs />
        <div className="my-2 mt-4  w-full md:w-4/5 px-6  py-2 md:h-[400px] m-auto  flex gap-4">
          <div className="w-1/2 bg-white flex flex-col mt-5">
            <h2 className="font-semibold text-gray-800">Why Alton ?</h2>
            <p className=" text-gray-600 leading-7">
              You can entrust all purchases of sports equipment to us we
              gaurantee that all items sold by the store are one hundred
              original and from well known and trusted labels and companies{" "}
            </p>
          </div>
          <div className="w-1/2 h-full bg-white">
            <Image
              src="/image/alton.jpg"
              alt="alton"
              height={1000}
              width={1000}
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
