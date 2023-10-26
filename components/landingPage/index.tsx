import React from "react";
import Introduction from "./introduction";
import DemoComponents from "./demoComponents";

function LandingPage() {
  return (
    <div className="flex h-full max-md:flex-col max-md:justify-around">
      <Introduction />
      <DemoComponents />
    </div>
  );
}

export default LandingPage;
