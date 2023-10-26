import React from "react";
import LayoutCards from "../layoutCards";
import { components } from "@/NextJsComponents/components";

function DemoComponents() {
  return (
    <div className="w-3/5 flex justify-center items-center flex-wrap max-md:w-full">
      {components.map((data) => (
        <LayoutCards key={data.id} {...data} />
      ))}
    </div>
  );
}

export default DemoComponents;
