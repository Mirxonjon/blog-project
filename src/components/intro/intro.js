import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn  } from "react-icons/fa";

import "./intro.scss";
  
const Intro = () => {
  return(
    <div className="intro">
      <h2>What I do!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
      <div className="intro-social__media-links">
        <Link className="link" to="https://facebook.com/"><FaFacebookF /></Link>
        <Link className="link" to="https://github.com/"><FaGithub /></Link>
        <Link className="link" to="https://twitter.com/"><FaTwitter /></Link>
        <Link className="link" to="https://linkedin.com/"><FaLinkedinIn /></Link>
      </div>
    </div>
  );
};

export default Intro;