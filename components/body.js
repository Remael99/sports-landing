import Image from "next/image";
import React from "react";
import Carousel from "./carousel";
import { userReviewData } from "./data";
import Tabs from "./Tabs";

export default function Body() {
  return (
    <main className="my-3  px-2 ">
      <section className="w-full flex flex-col ">
        {/*tab*/}
        <h2 className="m-auto font-semibold ">Best selling product</h2>
        <Tabs />
        <div className="my-2 mt-20  pt-4 w-full md:w-4/5 px-6  py-2 md:h-[400px] m-auto  flex flex-col md:flex-row gap-4  mb-4">
          <div className=" w-full md:w-1/2 bg-white flex flex-col mt-5">
            <h2 className="font-semibold text-gray-800">Why Alton ?</h2>
            <p className=" text-gray-600 leading-7">
              You can entrust all purchases of sports equipment to us we
              gaurantee that all items sold by the store are one hundred
              original and from well known and trusted labels and companies{" "}
            </p>
          </div>
          <div className=" relative w-full md:w-1/2 h-full border border-gray-200 rounded-md bg-white ">
            <Image
              src="/image/alton.jpg"
              alt="alton"
              loading="lazy"
              layout="fill"
              className="object-cover h-full w-full rounded-md"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-[400px]">
        <div className=" w-full md:w-[490px] h-3/4 m-auto mt-7 text-3xl text-gray-700 bg-gray-50 flex items-center">
          <Carousel carouselData={userReviewData} />
        </div>
      </section>
    </main>
  );
}
