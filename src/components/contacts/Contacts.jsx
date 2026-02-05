import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

import Email from "../../assets/svg/email.svg";
import LinkedinQR from "../../assets/img/LinkedinQR.png";
import InstagramQR from "../../assets/img/InstagramQR.png";
import GithubQR from "../../assets/img/GithubQR.png";
import "./Contacts.css";

const Contacts = () => {
  const socialData = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/nithin-kumar18",
      color: "#0CA5E9",
      ariaLabel: "LinkedIn",
      qrImage: LinkedinQR,
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/nithxzz",
      color: "#DB2877",
      ariaLabel: "Instagram",
      qrImage: InstagramQR,
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Nithixz",
      color: "white",
      ariaLabel: "Github",
      qrImage: GithubQR,
    },
  ];
  return (
    <div id="contacts">
      <div className="contacts-container">
        <Fade direction="up" cascade triggerOnce={true} delay={0}>
          <div className="contacts-header">
            <span>GET IN TOUCH</span>
          </div>
        </Fade>
        <Fade direction="up" cascade triggerOnce={true} delay={100}>
          <div className="contact-me">
            <h3>Please feel free to contact me if you have any question! </h3>
            <h4>
              Or just wanna chat, please do not hesitate to reach out to me!
            </h4>
            <div className="email-container">
              <a href="mailto:nithinkumarnnp@gmail.com" rel="noreferrer">
                <button className="email-button">
                  <img src={Email} className="email-image" alt="svg icon" />
                  <span>Contact Me</span>
                </button>
              </a>
            </div>
          </div>
        </Fade>
        <Fade direction="up" cascade triggerOnce={true} delay={200}>
          <div className="socials-container">
            {socialData.map((item) => {
              const { icon, href, color} = item;
              return (
                <div className="socials-icon">
                  {/* <img src={qrImage} className="social-qr" alt={ariaLabel} /> */}
                  <a href={href} target="_blank" rel="noreferrer">
                    <div className="socials" style={{ color: `${color}` }}>
                      {icon}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="footer">
            <a
              href="https://github.com/Nithin-ELS/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Built with React.JS
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contacts;
