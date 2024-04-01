import React from "react";
import "./CryptoCard.css";
import Arrow from "../../assets/arrowThin.svg";
import ArrowDark from "../../assets/arrowThinDark.svg";

interface CryptoCardProps {
  symbol: string;
  description: string;
  rate: string;
  code: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  symbol,
  description,
  rate,
  code,
}) => {
  return (
    <div className="card-dimension">
      <div className="card-dimension-button d-flex align-items-center justify-content-center ">
        <ArrowDark />
      </div>
      <div className="card-content d-flex flex-column  justify-content-between ps-3 pe-3 pt-3 pb-2">
        <div
          className="d-flex justify-content-between w-100"
          style={{ color: "#888" }}
        >
          <p>BTC</p>
          <Arrow />
          <p>{code}</p>
        </div>
        <div>
          <span
            style={{ color: "white", fontSize: "3em", opacity: "90%" }}
            dangerouslySetInnerHTML={{ __html: symbol }}
          ></span>
        </div>
        <p style={{ color: "#888" }}>{description}</p>
        <div className="d-flex flex-column  justify-content-between w-100 text-white">
          <p style={{ margin: "0" }}>Current Rate</p>
          <h3 style={{ margin: "0" }}>{rate}</h3>
        </div>
      </div>
      <div className="upper"></div>
      <div className="lower"></div>
    </div>
  );
};

export default CryptoCard;
