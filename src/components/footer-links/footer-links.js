import { Link } from "react-router-dom";
import "./footer-links.scss";

const FooterLinks = () => {

  const socialMediaLinks = [
    {
      id: 1,
      title: "twitter",
      address: "https://twitter.com"
    },
    {
      id: 2,
      title: "instagram",
      address: "https://instagram.com"
    },
    {
      id: 3,
      title: "telegram",
      address: "https://telegram.com"
    },
    {
      id: 4,
      title: "youtube",
      address: "https://youtube.com"
    },
    {
      id: 5,
      title: "figma",
      address: "https://figma.com"
    }
  ]

  const netLinks = [
    {
      id: 1, 
      title: "xalq",
      address: "https://xalq.com"
    },
    {
      id: 2, 
      title: "website",
      address: "https://website.com"
    },
    {
      id: 3, 
      title: "website",
      address: "https://website.com"
    },
    {
      id: 4, 
      title: "play market",
      address: "https://playmarket.com"
    },
    {
      id: 5, 
      title: "app store",
      address: "https://app-store.com"
    }
  ]

  const contactData = [
    {
      id: 1, 
      title: "blog",
      address: "https://blog.com"
    },
    {
      id: 2, 
      title: "dribble",
      address: "https://dribble.com"
    },
    {
      id: 3, 
      title: "behance", 
      address: "https://behance.com"
    },
    {
      id: 4, 
      title: "github",
      address: "https://github.com"
    },
    { 
      id: 5, 
      title: "lorem",
      address: "https://lorem.com"
    }
  ]

  return(
    <div className="footer-links">
      <div className="footer-social__media-links">
        <h4>FIGHT WITH ME ON:</h4>
        {socialMediaLinks.map(link => (
          <Link className="link" to={`/${link.address}`}key={link.id}>{link.title}</Link>
        ))}
      </div>
      <div className="footer-net__links">
        <h4>WHAT I HAVE DONE:</h4>
        {netLinks.map(link => (
          <Link className="link" to={`/${link.address}`}key={link.id}>{link.title}</Link>
        ))}
      </div>
      <div className="footer-contact">
        <h4>CONTACT: </h4>
        {contactData.map(link => (
          <Link className="link" to={`/${link.address}`}key={link.id}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;