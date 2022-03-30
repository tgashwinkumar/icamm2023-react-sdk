import React from "react";
import PolkaDark from "../assets/polka_dark.svg";
import PolkaLight from "../assets/polka_light.svg";

const Header = ({
  theme = "dark",
  text = "text",
  subtext = "subtext",
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <img
        className="absolute h-24"
        src={theme === "dark" ? PolkaDark : PolkaLight}
        alt=""
      />
      <div
        className={`relative ml-16 mt-8 font-ubuntu text-4xl ${
          theme === "dark" ? "text-black" : "text-white"
        }`}
      >
        <p className="">{subtext}</p>
        <p className="font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Header;
