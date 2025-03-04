import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <p>FREMTID</p>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/future">Fremtid</NavLink>
        </li>
        <li>
          <NavLink to="/development">Udvikling</NavLink>
        </li>
        <li>
          <NavLink to="/characteristic">Karakteristika</NavLink>
        </li>
        <li>
          <NavLink to="/application">Anvendelse</NavLink>
        </li>
        <li>
          <NavLink to="/perspectives">Perspektiver</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
