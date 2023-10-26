import React from "react";
import Introduction from "./introduction";
import DemoComponents from "./demoComponents";

function LandingPage() {
  return (
    <div className="flex h-full ">
      <Introduction />
      <DemoComponents />
    </div>
  );
}

export default LandingPage;
