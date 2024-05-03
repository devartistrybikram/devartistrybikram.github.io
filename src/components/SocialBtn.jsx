import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThreads,
  faFacebookF,
  faInstagram,
  faPinterestP,
  faBehance,
  faYoutube,
  faLinkedinIn,
  faTwitter,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function SocialBtn() {
  const social = [
    {
      name: "Thead",
      path: "https://www.threads.net/@dev.artistry.bikram",
      icon: faThreads,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/dev.artistry.bikram",
      icon: faInstagram,
    },
    {
      name: "Facebook",
      path: "https://www.facebook.com/devbikram",
      icon: faFacebookF,
    },
    {
      name: "Twitter",
      path: "https://twitter.com/artistrybikram",
      icon: faTwitter,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/devartistrybikram/",
      icon: faLinkedinIn,
    },
    {
      name: "pinterest",
      path: "https://in.pinterest.com/devartistrybikram/",
      icon: faPinterestP,
    },
    {
      name: "Behance",
      path: "https://www.behance.net/devartistrybikram",
      icon: faBehance,
    },
    {
      name: "Youtube",
      path: "https://www.youtube.com/devartistrybikram",
      icon: faYoutube,
    },
    {
      name: "Github",
      path: "https://github.com/devartistrybikram",
      icon: faGithub,
    },
    {
      name: "Telegram",
      path: "https://t.me/devartistrybikram",
      icon: faTelegram,
    },
  ];
  function MenuItem({ name, path, icon }) {
    return (
      <Link
        title={name}
        href={path}
        className="grid place-items-center size-[2rem] text-slate-500 hover:text-amber-400 hover:border-amber-500 rounded-full border-slate-500 border-2"
      >
        <FontAwesomeIcon
          icon={icon}
          size="sm"
          className="h-4 w-4 text-lg"
        />
      </Link>
    );
  }
  const listItems = social.map((el, index) => {
    return (
      <MenuItem key={index} name={el.name} path={el.path} icon={el.icon} />
    );
  });
  return <div className="flex flex-wrap gap-[6px] my-2">{listItems}</div>;
}
