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
        Image: "/image/racket.jpg",
        Price: "$ 80.40",
      },
      {
        id: 2,
        name: "Thee racket",
        Image: "/image/racket-two.jpg",
        Price: "$ 70.40",
      },
      {
        id: 3,
        name: "Rackets sports",
        Image: "/image/racket-3.jpg",
        Price: "$ 50.40",
      },
    ],
    Shoes: [
      {
        id: 1,
        name: "Awesome shoe ",
        Image: "/image/shoe.jpg",
        Price: "$ 100.40",
      },
      {
        id: 2,
        name: "New awesomes",
        Image: "/image/shoe-two.jpg",
        Price: "$ 180.40",
      },
      {
        id: 3,
        name: "Classic awesomes",
        Image: "/image/shoe-3.jpg",
        Price: "$ 120.40",
      },
    ],
    Aparrel: [
      {
        id: 1,
        name: "Full set women",
        Image: "/image/full-clothe.jpg",
        Price: "$ 300.50",
      },
      {
        id: 2,
        name: "Full set men",
        Image: "/image/full-clothe-two.jpg",
        Price: "$ 380.40",
      },
      {
        id: 3,
        name: "outlaws top",
        Image: "/image/outlaw.jpg",
        Price: "$ 90.99",
      },
    ],
    Ropes: [
      {
        id: 1,
        name: "awesome rope",
        Image: "/image/rope.jpg",
        Price: "$ 20.40",
      },
      {
        id: 2,
        name: "amazing rope",
        Image: "/image/rope-two.jpg",
        Price: "$ 25.80",
      },
      {
        id: 3,
        name: "Rope plus set",
        Image: "/image/rope-3.jpg",
        Price: "$ 50.99",
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
        <Tab.Panels className="mt-2  ">
          {Object.values(categories).map((items, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3 grid grid-cols-2 md:grid-cols-3 gap-2 ml-9  w-full"
              )}
            >
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="w-3/4  h-full lg:h-[350px] bg-gray-50 rounded-md flex flex-col"
                >
                  <div className="w-full h-4/5 ">
                    <Image
                      src={item.Image}
                      alt={item.name}
                      width={1000}
                      height={1200}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full  py-2 px-2 flex flex-col text-gray-700 gap-2">
                    <span className="font-semibold">{item.name}</span>
                    <span className="font-bold  text-gray-500">
                      {item.Price}
                    </span>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
