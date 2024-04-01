import React from "react";
import Button from "./Button/Button";
import { Velustro } from "uvcanvas";
import useMetamask from "../Hooks/useMetaMask";

const ConnectMetaMask: React.FC = () => {
  const { connectMetamask } = useMetamask();

  const handleConnectClick = async () => {
    try {
      await connectMetamask();
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error);
    }
  };

  return (
    <div
      className="rounded"
      style={{
        height: "250px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#252525",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundColor: "green",
          mixBlendMode: "hard-light",
        }}
      ></div>
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Button
          title="Connect Metamask"
          paddingLR={10}
          paddingUD={10}
          textColor="var(--bg)"
          onClick={handleConnectClick}
        />
      </div>
      <Velustro />
    </div>
  );
};

export default ConnectMetaMask;
