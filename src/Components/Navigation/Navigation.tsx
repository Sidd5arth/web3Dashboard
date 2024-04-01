import React, { useState } from "react";
import "./Navigation.css";
import { FiSearch } from "react-icons/fi";
import { navData } from "./NavData";
import image from "../../assets/profile.jpg";
import { NavItem } from "../../types";
import Logo from "../../assets/logo.svg";

const Navigation: React.FC = () => {
  const [thisNavData, setThisNavData] = useState<NavItem[]>(navData);
  const handleClick = (
    page: string
  ): React.MouseEventHandler<HTMLLIElement> => {
    return () => {
      const updatedNavItems = thisNavData.map((item) =>
        item.page === page
          ? {
              ...item,
              isActive: true,
              logo: React.cloneElement(item.logo, { color: "var(--green)" }),
            }
          : {
              ...item,
              isActive: false,
              logo: React.cloneElement(item.logo, { color: "white" }),
            }
      );
      setThisNavData(updatedNavItems);
    };
  };
  return (
    <div
      className="w-100 p-2 navigation rounded"
      style={{ boxShadow: "var(--sh)" }}
    >
      <div className="d-flex justify-content-between align-content-center align-items-center  ">
        <div>
          <Logo />
        </div>
        <p style={{ margin: "0", color: "white" }} className="gradient-text">
          2.0
        </p>
      </div>
      <div className="w-100 position-relative">
        <FiSearch className="search-icon text-white z-1" size={18} />
        <input
          onFocus={(e) => {
            e.target.style.outline = "none";
          }}
          placeholder="Search"
          className="text-white search rounded border-0 w-100 h-100"
        ></input>
      </div>
      <ul className="nav-ul d-flex flex-column gap-1 mt-4">
        {thisNavData.map((nav, index) => (
          <li
            onClick={handleClick(nav.page)}
            className="nav-li cursor-poiner rounded d-flex align-item-center justify-content-lg-start p-2 gap-4 text-white "
            style={{
              fontFamily: "regular",
              marginTop: index === 6 ? "6em" : "",
            }}
          >
            <div>{nav.logo}</div>
            <p
              style={{
                margin: "0",
                color: nav.isActive ? "var(--green)" : "white",
              }}
            >
              {nav.page}
            </p>
            {index == 6 && (
              <p className="d-flex justify-content-center align-content-between notification">
                16
              </p>
            )}
          </li>
        ))}
      </ul>
      <div
        className="d-flex w-100 p-3 rounded gap-2 text-white position-relative "
        style={{ background: "var( --bg-light" }}
      >
        <div className="rounded-circle"></div>
        <div className="img-container">
          <img
            style={{ width: "100%", height: "100%", borderRadius: "100em" }}
            src={image}
            alt="profile"
          />
        </div>
        <div className="d-flex flex-column ">
          <p style={{ margin: "0" }}>Brooklyn Simmons</p>
          <p style={{ margin: "0" }} className="email">
            Brooklyn@Simmons.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
