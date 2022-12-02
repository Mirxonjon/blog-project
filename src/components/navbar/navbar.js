import NavLogo from "../nav-logo/nav-logo";
import Seach from "../search/search";
import TypeFilter from "../type-filter/type-filter";

import "./navbar.scss";

const Navbar = () => {
  return(
    <nav className="navbar">
      <NavLogo />
      <TypeFilter />
      <Seach />
    </nav>
  );
};

export default Navbar;