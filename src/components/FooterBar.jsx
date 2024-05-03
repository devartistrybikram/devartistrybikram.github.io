import React from "react";
import Image from "next/image";
import SocialBtn from "./SocialBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowPointer,
  faHeart,
  faPhoneAlt,
  faSignsPost,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
export default function FooterBar() {
  const links = [
    { name: "Home", path: "./" },
    { name: "About", path: "./about" },
    { name: "Technologies", path: "./technologies" },
    { name: "Projects", path: "./projects" },
    { name: "Contacts", path: "./contacts" },
  ];
  const footerLinks = links.map((el, index) => {
    return (
      <li className="mb-[6px] leading-6 indent-1" key={index}>
        <Link
          href={el.path}
          className="text-slate-500 hover:text-amber-500 focus:text-amber-600"
        >
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className="inline-flex w-4 h-4"
          />
          &nbsp;{el.name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <footer className="w-full text-slate-800">
        <div className="border-t border-slate-200 bg-stone-50 pt-16 pb-12 text-sm shadow-slate-700/-5">
          <div className="container mx-auto px-6">
            <div className="grid grid-rows[1fr,_50px] grid-cols-4 gap-3 md:grid-cols-8 lg:grid-cols-12 w-full md:w-4/5 lg:w-8/12 m-auto">
              <div
                className="col-span-4 md:col-span-8 lg:col-span-6"
                aria-labelledby="footer-header"
              >
                <a
                  aria-label="Dev Bikram logo"
                  aria-current="page"
                  className="mb-2 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 indent-2 text-slate-700 focus:outline-none"
                  href="#"
                >
                  <Image
                    src="/DevArtistryBikram_.png"
                    alt="Dev Bikram Logo"
                    width={250}
                    height={40}
                  />
                </a>
                <p className="text-slate-500">
                  Expertly made, responsive, accessible components in React and
                  HTML ready to be used on your website or app. Just copy and
                  paste them on your Tailwind CSS project. Just copy and paste
                  them on your Tailwind CSS project.
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <SocialBtn />
                </div>
              </div>
              <nav
                className="col-span-4 md:col-span-4 lg:col-span-3 px-2"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-2 text-lg font-semibold text-slate-700"
                  id="footer-docs-5-logo"
                >
                  Quick Links
                </h3>
                <ul>{footerLinks}</ul>
              </nav>
              <nav
                className="col-span-4 md:col-span-4 lg:col-span-3 px-2"
                aria-labelledby="footer-about-5-logo"
              >
                <h3
                  className="mb-2 text-lg font-semibold text-slate-700"
                  id="footer-about-5-logo"
                >
                  Contact Info
                </h3>
                <ul>
                  <li className="mb-[6px] leading-6 indent-1 text-slate-500 hover:text-amber-500 focus:text-amber-600">
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="inline-flex w-4 h-4"
                    />
                    &nbsp; +91 8910190617
                  </li>
                  <li className="mb-[6px] leading-6 indent-1 text-slate-500 hover:text-amber-500 focus:text-amber-600">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="inline-flex w-4 h-4"
                    />
                    &nbsp; @devartistrybikram
                  </li>
                  <li className="mb-[6px] leading-6 indent-1 text-slate-500 hover:text-amber-500 focus:text-amber-600 text-nowrap">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="inline-flex w-4 h-4"
                    />
                    &nbsp; devartistrybikram@yahoo.com
                  </li>
                  <li className="mb-[6px] leading-6 indent-1 text-slate-500 hover:text-amber-500 focus:text-amber-600">
                    <FontAwesomeIcon
                      icon={faSignsPost}
                      className="inline-flex w-4 h-4"
                    />
                    &nbsp; Kolkata, West Bengal, India
                  </li>
                  <li className="mb-[6px] leading-6 indent-1 text-slate-500 hover:text-amber-500 focus:text-amber-600">
                    <FontAwesomeIcon
                      icon={faArrowPointer}
                      className="inline-flex w-4 h-4"
                    />
                    &nbsp; devartistrybikram.github.io
                  </li>
                </ul>
              </nav>
              <div className="col-span-4 md:col-span-8 lg:col-span-12 text-center text-sm mt-1">
                Designed With &nbsp;
                <FontAwesomeIcon
                  icon={faHeart}
                  size="sm"
                  className="w-4 h-4 text-red-600 inline"
                />{" "}
                &nbsp; By DevArtistryBikram.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
