import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  textColor: string;
  paddingUD: number;
  paddingLR: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  paddingUD,
  paddingLR,
  textColor,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="rounded button-style"
        style={{
          color: textColor,
          padding: `${paddingUD}px ${paddingLR}px`,
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
