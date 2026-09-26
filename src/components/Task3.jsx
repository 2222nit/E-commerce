import React, { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { GoGlobe } from "react-icons/go";
import { LuGraduationCap, LuGithub } from "react-icons/lu";
import { FaRegFolder, FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

export default function Task3() {
  const Middle = [
    { icon: CgProfile, name: "Profile", link: "" },
    { icon: GoGlobe, name: "Technology", link: "" },
    { icon: LuGraduationCap, name: "Qualifications", link: "" },
    { icon: FaRegFolder, name: "Project", link: "" },
  ];

  const Left = [
    { icon: LuGithub, link: "" },
    { icon: FiLinkedin, link: "" },
    { icon: FaInstagram, link: "" },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="h-20 flex justify-center items-center px-3 text-gray-600">
  <div className="relative w-full max-w-6xl flex items-center justify-between gap-4 md:gap-8 lg:gap-12 shadow-xl rounded-full px-5 py-2 bg-white">

        {/* Logo */}
        <div>
          <h1 className="font-bold text-black text-3xl font-serif">
            NK
          </h1>
        </div>

        {/* Desktop Middle */}
        <div className="hidden md:flex gap-1 lg:gap-3">
          {Middle.map((v, i) => {
            const Icon = v.icon;

            return (
              <a
                key={i}
                href={v.link}
                className="flex justify-center items-center gap-1.5 rounded-full py-2 px-5 hover:text-black duration-300"
              >
                <Icon className="h-5 w-5" />
                {v.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-5 items-center">
          {Left.map((v, i) => {
            const Icon = v.icon;

            return (
              <a key={i} href={v.link}>
                <Icon className="h-6 w-6 hover:text-black duration-300" />
              </a>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="md:hidden text-2xl"
        >
          {toggle ? <IoMdClose /> : <HiOutlineBars3BottomRight />}
        </button>

        {/* Mobile Menu */}
        {toggle && (
          <div className="absolute left-0 right-0 top-full z-50 mt-3 rounded-2xl bg-white p-3 shadow-2xl md:hidden">

            {Middle.map((v, i) => {
              const Icon = v.icon;

              return (
                <a
                  key={i}
                  href={v.link}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100"
                  onClick={() => setToggle(false)}
                >
                  <Icon className="h-5 w-5" />
                  {v.name}
                </a>
              );
            })}

            {/* Mobile Social Icons */}
            <div className="flex gap-5 border-t mt-2 pt-3 px-4">
              {Left.map((v, i) => {
                const Icon = v.icon;

                return (
                  <a key={i} href={v.link}>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </nav>
  );
}