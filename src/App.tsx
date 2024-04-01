import React, { useState, useEffect } from "react";
import ToasterProvider from "./Providers/ToasterProvider";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";

const App: React.FC = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 200);
  }, []);
  return (
    <>
      <ToasterProvider />
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#333",
          position: "absolute",
          zIndex: "1000",
          transform: reveal ? "translateY(-100%)" : "translateY(0%)",
          transition: "all 0.8s cubic-bezier(.83,.17,.12,.83)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderTop: "2px solid var(--green)",
            width: !reveal ? "0%" : "100%",
            transition: "all 0.5s cubic-bezier(.83,.17,.12,.83)",
          }}
        ></div>
      </div>
      <div
        style={{
          opacity: reveal ? "100%" : "0%",
          transition: "all 0.8s cubic-bezier(.83,.17,.12,.83)",
        }}
      >
        <Layout>
          <Dashboard />
        </Layout>
      </div>
    </>
  );
};

export default App;
