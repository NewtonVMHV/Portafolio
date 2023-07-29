import React from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import style from "./Socials.module.css";

const Socials = () => {
    const socials = [
        {
          id: "1",
          name: "linkedin",
          link: "https://www.linkedin.com/in/newtonvmhv/",
          icon: <FaLinkedinIn />,
        },
        {
          id: "2",
          name: "twitter",
          link: "https://twitter.com/NewtonVMHV",
          icon: <FaTwitter />,
        },
        {
          id: "3",
          name: "github",
          link: "https://github.com/NewtonVMHV",
          icon: <FaGithub />,
        },
        {
          id: "4",
          name: "Facebook",
          link: "https://www.facebook.com/newtonvargas22/",
          icon: <FaFacebook />,
        }
      ];
  return (
    <address className={style.socials}>
      {socials.map((social) => (
        <a
          className={style.social}
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </address>
  )
}

export default Socials;