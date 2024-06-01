import { useMediaQuery } from "react-responsive";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import "../../styles/footer.css";

import EmailIcon from "/assets/svg/mailIconWhite.svg";
import InstagramIcon from "/assets/svg/instagramIconWhite.svg";
import TiktokIcon from "/assets/svg/tiktokIconWhite.svg";
import LinkedinIcon from "/assets/svg/linkedinIconWhite.svg";

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
];

export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div>
            <picture>
              <source srcSet="/assets/svg/logo-small.svg" media="(max-width: 950px)" height="50px" />
              <img src="/assets/svg/logo.svg" alt="IdealDev" height="50px" />
            </picture>
            <p className="footer-text">
              Copyright © 2020-{new Date().getFullYear()} {useMediaQuery({ query: "(max-device-width: 700px)" }) ? <br /> : ""} Ideal Development
            </p>
          </div>
          <div className="footer-icons">
            {socialMediaLinks.map((social, index) => (
              <div key={index}>
                <Tippy content={social.text} placement="top" trigger="mouseenter">
                  <a href={social.link} target="_blank">
                    {social.icon}
                  </a>
                </Tippy>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
