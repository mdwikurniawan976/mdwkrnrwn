"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/mdwikurniawan976",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/m-dwi-kurniawan-1bb0a2292/",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/mdw.krnwn/",
    label: "Instagram",
  },
  {
    icon: <FaYoutube/>,
    path: "https://www.youtube.com/@mdwikurniawan3918",
    label: "Youtube",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
