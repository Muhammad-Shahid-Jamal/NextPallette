import LandingPage from "@/components/landingPage";
import Layout from "@/components/layout";
import React from "react";
import "./index.css";

function Home() {
  return (
    <Layout>
      <div className="layout">
        <LandingPage />
      </div>
    </Layout>
  );
}

export default Home;
