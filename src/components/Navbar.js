import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed z-10 h-auto w-screen">
      <div className="bg-transparent w-full flex items-center justify-center text-white">
        <div classname="flex items-center justify-center w-fit">
          <a href="#section1">
            <p className="font-head font-bold text-2xl color">icamm</p>
          </a>
        </div>
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};

export default Navbar;
