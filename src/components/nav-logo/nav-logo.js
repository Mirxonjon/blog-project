import { useState } from "react";
import { Link } from "react-router-dom"

import LogoImg from "../../assets/images/logo-img.png";
import TypeFilterModal from "../type-filter-modal/type-filter-modal";
import "./nav-logo.scss";

const NavLogo = () => {
  const [ burger_class, setBurgerClass ] = useState("burger-bar unclicked");
  const [ menu_class, setMenuClass ] = useState("menu hidden");
  const [ isMenuClicked, setIsMenuClicked ] = useState(false);

  const handleUpdateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <div className="nav-logo__wrapper">
        <Link className="logo-link" to="/"><img className="logo-img" src={LogoImg} alt="Logo img" />BoburBlog</Link>
        <div>
           <div className="burger-menu" onClick={handleUpdateMenu}>
             <div className={burger_class}></div>
             <div className={burger_class}></div>
             <div className={burger_class}></div>
           </div>
        </div>
      </div>
      
      <div className={menu_class}>
        <TypeFilterModal />
      </div>
    </>
  )
}

export default NavLogo;   