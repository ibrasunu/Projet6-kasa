import React from "react";
import { NavLink, useLocation} from "react-router-dom";

const Nav = () => {

  const {pathname} = useLocation();
  return (
    <nav className="nav-header">
      <NavLink to="/accueil" className="nav-header__nav-link-home" style={{textDecoration: pathname === '/accueil' ? 'underline' : 'none'}}>
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav-header__nav-link-about" style={{textDecoration: pathname === '/about' ? 'underline' : 'none'}}>
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;
