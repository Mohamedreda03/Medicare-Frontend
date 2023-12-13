import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";

const navLinkes = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Find a Doctor",
    link: "/dosctors",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpen = () => {
    setShowMenu(true);
  };
  return (
    <>
      <header
        className={`bg-white z-40 h-[75px] flex items-center justify-center w-full shadow-sm transition-all sticky top-0`}
      >
        <MobileMenu
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          navLinkes={navLinkes}
        />
        <div className="max-w-[1400px] mx-auto w-full h-full px-5">
          <div className="h-full w-full flex items-center justify-between">
            <Link to={"/home"} className="">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="hidden md:flex items-center gap-[2.7rem]">
              {navLinkes.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.link}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-lg font-medium text-blue-700 leading-7"
                      : "text-lg font-medium text-gray-900 leading-7"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* nav right */}
            <div className="flex items-center gap-6">
              <div className="hidden">
                <Link to={"/"}>
                  <figure className="h-[35px] w-[35px] rounded-full">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-full rounded-full"
                    />
                  </figure>
                </Link>
              </div>
              <Link to={"/login"}>
                <button className="btn1">Login</button>
              </Link>
              <span className="md:hidden">
                <BiMenu
                  onClick={handleOpen}
                  className="h-6 w-6 cursor-pointer"
                />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
