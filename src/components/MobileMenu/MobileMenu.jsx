import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const MobileMenu = ({ navLinkes, showMenu, setShowMenu }) => {
  const handleClase = () => {
    setShowMenu(false);
  };
  return (
    <>
      <div
        onClick={handleClase}
        className={`fixed top-0 right-0 h-full z-50 bg-black/20 overflow-hidden transition-all opacity-0 ${
          showMenu ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div
          className={`absolute inset-y-0 right-0 bg-white flex justify-center flex-col transition-all ${
            showMenu ? "w-[300px]" : "w-0"
          }`}
        >
          <BiMenu
            className={`h-6 w-6 absolute top-6 right-5`}
            onClick={handleClase}
          />
          {navLinkes.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              onClick={handleClase}
              className="py-3 text-lg w-full text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
