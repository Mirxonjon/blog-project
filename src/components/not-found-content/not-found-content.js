import { useContext } from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/not-found-img.png";
import { AuthContext } from "../../contexts/auth";
import { FaAngleRight } from "react-icons/fa";

import "./not-found-content.scss";
    
const NotFoundContent = () => {

  const { token } = useContext(AuthContext);

  return(
    <main className="not-found">
      <img className="not-found__img" src={NotFoundImg} alt="not found img" />
      <h4>Page not found - 404</h4>
      <p>This page not found (deleted or never exists).Try a phrase in search box or back to home and start again.</p>
      <Link className="not-found__link" to={`/${token ? "" : "login"}`}>take me {token ? "home" : "login"}!<FaAngleRight /></Link>
    </main>
  );
};

export default NotFoundContent;