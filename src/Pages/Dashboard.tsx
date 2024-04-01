import React, { useEffect, useState } from "react";
import PopulationGraph from "../Components/PopulationGraph";
import useCryptoData from "../Hooks/useCryptoData";
import ConnectMetaMask from "../Components/ConnectMetaMask";
import { Currency } from "../types";
import CryptoCard from "../Components/CryptoCard/CryptoCard";
import Button from "../Components/Button/Button";

const Dashboard: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<Currency[]>();
  const { data } = useCryptoData();
  useEffect(() => {
    if (data) {
      const cryptoArray = [];
      cryptoArray.push(data.USD);
      cryptoArray.push(data.GBP);
      cryptoArray.push(data.EUR);
      setCryptoData(cryptoArray);
    }
  }, [data]);

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setViewportWidth(window.innerWidth);
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-2">
      <div className="d-flex justify-content-between align-items-center w-100 px-2 py-4">
        <div>
          <h1 className="text-white">
            Hello, <span className="gradient-text">Brooklyn Simmons</span> 👋
          </h1>
          <h3 style={{ margin: "0" }} className="text-white">
            Welcome to{" "}
            <span style={{ color: "var(--green)" }}>Spot trading!</span>
          </h3>
        </div>
        <Button
          paddingLR={10}
          paddingUD={10}
          title="Start Trading"
          textColor="black"
        />
      </div>
      <div
        style={{
          fontFamily: "regular",
          flexDirection: viewportWidth < 600 ? "column" : "row",
        }}
        className="p-2 d-flex flex-lg-row justify-content-center align-items-center gap-2 h-100 w-100 flex-sm-column"
      >
        <div style={{ flex: 1, width: "100%" }}>
          <PopulationGraph type="line" viewportWidth={viewportWidth} />
        </div>
        <div style={{ flex: 1, width: "100%" }}>
          <PopulationGraph type="bar" viewportWidth={viewportWidth} />
        </div>
      </div>
      <ul
        className="d-flex flex-lg-row justify-content-center align-content-center gap-2 px-2 flex-sm-column "
        style={{
          width: "100%",
          height: "100%",
          flexDirection: viewportWidth < 600 ? "column" : "row",
        }}
      >
        <li
          style={{
            listStyle: "none",
            width: viewportWidth < 990 ? "100%" : "25%",
          }}
        >
          <ConnectMetaMask />
        </li>
        {cryptoData?.map((currency) => (
          <li style={{ listStyle: "none", width: "100%" }}>
            <CryptoCard
              symbol={currency.symbol}
              code={currency.code}
              description={currency.description}
              rate={currency.rate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
