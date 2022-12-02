import { Link } from "react-router-dom"
import "./footer-logo.scss";
import LogoImg from "../../assets/images/logo-img.png"

const FooterLogo = () => {
  return  <Link className="logo-link" to="/"><img className="logo-img" src={LogoImg} alt="Logo img" />BoburBlog</Link>
}

export default FooterLogo;