import React, { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
