import FooterLinks from "../footer-links/footer-links";
import FooterLogo from "../footer-logo/footer-logo";
import "./footer.scss";

const Footer = () => {
  return(
    <footer className="footer">
      <FooterLogo />
      <FooterLinks />
    </footer>
  );
};

export default Footer;  