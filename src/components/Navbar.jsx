import { useState } from "react";
import logo from "../assets/images/logo-bookmark.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="d-flex justify-content-around py-5 align-items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="d-flex gap-5 align-items-center d-none d-md-flex">
          <a href="">FEATURES</a>
          <a href="">PRICING</a>
          <a href="">CONTACT</a>
          <button className="nav-btn btn btn-lg">LOGIN</button>
        </div>
        <i
          className={`bi btn bi-${isOpen ? "x" : "list"} d-md-none fs-1 `}
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </nav>
      {isOpen && (
        <div className="d-flex menu mx-5 py-5 flex-column gap-5 align-items-center  d-md-flex mb-4 ">
          <a href="">FEATURES</a>
          <a href="">PRICING</a>
          <a href="">CONTACT</a>
        </div>
      )}
    </>
  );
};
