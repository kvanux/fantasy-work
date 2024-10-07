"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tasks", href: "/task" },
  ];

  return (
    <div
      id="headContainer"
      className="w-full h-20 px-6 py-4 flex items-center border-b-[1px] border-b-gray-300"
    >
      {/* left buttons group */}
      <div id="leftGroup" className="flex w-full h-full mr-8 items-center">
        <Link href="/" id="logoContainer" className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 35 40"
            fill="none"
          >
            <path
              d="M0 12.746C0 5.70656 5.70656 0 12.746 0H34.1263C34.1263 7.0394 28.4197 12.746 21.3803 12.746H0Z"
              fill="url(#paint0_linear_3_9)"
            />
            <path
              d="M0 15.4479H16.8576C23.1508 15.4479 28.2526 20.5496 28.2526 26.8429H11.395C5.10172 26.8429 0 21.7412 0 15.4479Z"
              fill="url(#paint1_linear_3_9)"
            />
            <path
              d="M0 23.9648C0 23.9648 1.47211 27.3793 6.22614 29.1043C7.06391 29.4082 7.98403 29.6093 8.89153 29.74C11.6975 30.1441 14.1557 32.3385 14.1557 35.1734C14.1557 37.839 11.9947 40 9.32903 40H7.07782C3.16885 40 0 36.8311 0 32.9222V23.9648Z"
              fill="url(#paint2_linear_3_9)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_9"
                x1="12.3054"
                y1="-2.87812"
                x2="17.0925"
                y2="42.8194"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#768FF5" />
                <stop offset="1" stopColor="#5F71B8" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3_9"
                x1="12.3054"
                y1="-2.87812"
                x2="17.0925"
                y2="42.8194"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#768FF5" />
                <stop offset="1" stopColor="#5F71B8" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_3_9"
                x1="12.3054"
                y1="-2.87812"
                x2="17.0925"
                y2="42.8194"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#768FF5" />
                <stop offset="1" stopColor="#5F71B8" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>

      {/* center buttons group */}
      <div
        id="centerGroup"
        className="flex h-full w-full justify-center items-center"
      >
        <ul
          id="navBtns"
          className="flex h-full w-full justify-center items-center"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                link.href === pathName ? "text-indigo-700" : "text-slate-700"
              } px-3 py-2 mx-3 text-base font-medium  hover:text-slate-400`}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      {/* right buttons group */}
      <div id="rightGroup" className="flex h-full w-full"></div>
    </div>
  );
};

export default NavBar;
