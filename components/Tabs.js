import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Rackets: [
      {
        id: 1,
        name: "Yarnex arcsaber FD",
        Image: "/image/banner.jpg",
        Price: "$ 80.40",
      },
      {
        id: 2,
        name: "Yarnex arcsaber FD",
        Image: "/image/banner.jpg",
        Price: "$ 80.40",
      },
    ],
    Shoes: [
      {
        id: 1,
        name: "Yarnex arcsaber FD",
        Image: "/image/banner.jpg",
        Price: "$ 80.40",
      },
      {
        id: 2,
        name: "Yarnex arcsaber FD",
        Image: "/image/banner.jpg",
        Price: "$ 80.40",
      },
    ],
    Aparrel: [
      {
        id: 1,
        name: "Yarnex arcsaber FD",
        Image: "/image/banner.jpg",
        Price: "$ 80.40",
      },
      {
        id: 2,
        name: "Yarnex arcsaber FD",
        Image: "/image/banner.jpg",
        Price: "$ 80.40",
      },
    ],
    Shuttercocks: [
      {
        id: 1,
        name: "Yarnex arcsaber FD",
        Image: "/image/banner.jpg",
        Price: "$ 80.40",
      },
      {
        id: 2,
        name: "Yarnex arcsaber FD",
        Image: "/image/banner.jpg",
        Price: "$ 80.40",
      },
    ],
  });

  return (
    <div className="w-full md:w-3/4 m-auto  px-2 py-1  sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-gray-700 ",

                  selected ? " underline" : "text-gray-700 hover:text-gray-500"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 ">
          {Object.values(categories).map((item, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3 flex w-full",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <div className="w-full p-2 bg-white shadow-md rounded-md flex flex-col">
                <div className="w-full h-3/4 ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className=""
                  />
                </div>
                <div className="w-full py-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
