import React from "react";
import Tabs from "./Tabs";

export default function Body() {
  return (
    <main className="my-2  px-2 ">
      <section className="w-full flex flex-col ">
        {/*tab*/}
        <h2 className="m-auto font-semibold ">Best selling product</h2>
        <Tabs />
      </section>
    </main>
  );
}
