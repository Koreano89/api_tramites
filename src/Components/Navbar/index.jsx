import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context";
import logo from "../../img/logo.png";
import cebra from "../../img/franjahor.png";
// underline underline-offset-4

const Navbar = () => {
  const context = useContext(CartContext);

  const activeStyle =
    "py-2 px-3 rounded-lg bg-cyan-500 text-black text-sm transition-colors";

  return (
    <nav className="grid grid-cols-3 justify-end fixed top-0 mb-0 h-50 w-full p-2 px-0 bg-black text-white">
      <div className="grid col-span-1 items-center">
        <img className="h-8 w-full" src={cebra} alt="" />
      </div>
      <div className="grid col-span-1 h-full justify-center">
        <img className="h-14" src={logo} alt="" />
      </div>
      <div className="grid col-span-1">
        <ul className="flex items-center gap-5 px-5 pb-0">
          <li className="font-semibold text-sm">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Servicios
            </NavLink>
          </li>
          <li className="font-semibold text-sm">
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Como trabajamos ?
            </NavLink>
          </li>
          <li className="font-semibold text-sm">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contacto
            </NavLink>
          </li>

          <li className="font-semibold text-sm bg-white rounded-md px-2 py-2 text-black">
            🛒 {context.count}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
