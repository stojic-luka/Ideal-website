import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../../styles/contact.css";

import EmailIcon from "../../resources/svg/mailIcon.svg";
import InstagramIcon from "../../resources/svg/instagramIcon.svg";
import TiktokIcon from "../../resources/svg/tiktokIcon.svg";
import LinkedinIcon from "../../resources/svg/linkedinIcon.svg";
import UpworkIcon from "../../resources/svg/upworkIcon.svg";

interface SocialMediaLink {
  icon: JSX.Element;
  link: string;
  text: string;
}
const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: <img src={EmailIcon} />,
    link: "mailto:contact@ideal.games",
    text: "contact@ideal.games",
  },
  {
    icon: <img src={InstagramIcon} />,
    link: "https://www.instagram.com/ideal.development/",
    text: "@ideal.development",
  },
  {
    icon: <img src={TiktokIcon} />,
    link: "https://www.tiktok.com/@ideal.development",
    text: "@ideal.development",
  },
  {
    icon: <img src={LinkedinIcon} />,
    link: "https://www.linkedin.com/company/ideal-development-018/",
    text: "Ideal Development",
  },
  {
    icon: <img src={UpworkIcon} />,
    link: "https://www.upwork.com/freelancers/~01f777c7e2cdec19ae",
    text: "Ideal D.",
  },
];

export default function SocialMediaDisplay() {
  return (
    <>
      <div className="social-media">
        <motion.div whileInView={{ y: 0, opacity: 100, transition: { duration: 0.6 } }} initial={{ y: -25, opacity: 0 }} className="social-media-div">
          {socialMediaLinks.map((social, index) => (
            <div className="social-media-div-item" key={index}>
              {social.icon}
              <Link to={social.link} target="_blank">
                <h3>{social.text}</h3>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
