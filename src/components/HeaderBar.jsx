"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function NavbarActionButtonPreview() {
  function MenuItem({ name, path }) {
    return (
      <li
        role="none"
        className="flex items-stretch"
        onClick={() => setIsToggleOpen(!isToggleOpen)}
        aria-expanded={isToggleOpen ? "true" : "false"}
      >
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-1 py-4 transition-colors duration-300 hover:text-amber-500 focus:text-amber-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href={path}
        >
          <span>{name}</span>
        </Link>
      </li>
    );
  }
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const pages = [
    {
      name: "Home",
      path: "./",
    },
    {
      name: "About",
      path: "./about",
    },
    {
      name: "Technologies",
      path: "./technologies",
    },
    {
      name: "Projects",
      path: "./projects",
    },
    {
      name: "Contacts",
      path: "./contacts",
    },
  ];
  const listItems = pages.map((el, index) => {
    return <MenuItem key={index} name={el.name} path={el.path} />;
  });

  return (
    <>
      <header className="sticky left-0 top-0 z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <Link
              aria-label="Dev Artistry Bikram"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="./"
            >
              <Image
                src="/DevArtistryBikram_.png"
                alt="Dev Bikram Logo"
                width={250}
                height={40}
              />
            </Link>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
              >
                <path
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1px",
                  }}
                  d="M21,6H3m18,6H7M3,18H21"
                  className="stroke-gray-900"
                ></path>
              </svg>
            </button>
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] shadow-[0_15px_10px_-10px_rgba(150,170,180,0.1)] border-slate-200 border-b-2 w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 lg:shadow-none lg:border-b-0 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {listItems}
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-amber-500 px-5 text-sm font-medium tracking-wide text-white shadow-md transition duration-300 hover:bg-amber-600 hover:shadow-amber-200 focus:bg-amber-700 focus:shadow-amber-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-300 disabled:shadow-none">
                <span>My Resume</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
