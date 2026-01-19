import logo from "../assets/images/logo-bookmark.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between p-5 align-items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="d-flex gap-5 align-items-center">
          <a href="">FEATURES</a>
          <a href="">PRICING</a>
          <a href="">CONTACT</a>
          <button className="nav-btn btn btn-lg">LOGIN</button>
        </div>
      </nav>
    </>
  );
};
