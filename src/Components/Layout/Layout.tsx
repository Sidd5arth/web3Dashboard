import React, { ReactNode, useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import "./layout.css";
import Ham from "../../assets/Ham.svg";
import Close from "../../assets/Close.svg";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [hamOpen, setHamOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layout">
      {viewportWidth > 600 ? (
        <>
          <div style={{ flex: "1" }}>
            <Navigation />
          </div>
          <div style={{ flex: "5", height: "100vh", overflowY: "scroll" }}>
            {children}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              transform: hamOpen ? "translateX(0%)" : "translateX(-100%)",
              transition: "transform 0.5s ease",
              zIndex: "200",
            }}
            className="position-absolute "
          >
            <Navigation />
          </div>
          <div
            onClick={() => setHamOpen((prev) => !prev)}
            className="position-absolute"
            style={{ right: "15px", cursor: "pointer", zIndex: "300" }}
          >
            {hamOpen ? <Close /> : <Ham />}
          </div>
          <div style={{ height: "100vh", overflowY: "scroll" }}>{children}</div>
        </>
      )}
    </div>
  );
};

export default Layout;
