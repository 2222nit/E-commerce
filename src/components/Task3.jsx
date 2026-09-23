import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoGlobe } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

export default function Task3() {
  const Middle = [
    {icon:"CgProfile",name:"Profile", link:""},
    {icon:"GoGlobe",name:"Technology", link:""},
    {icon:"LuGraduationCap",name:"Qualifications", link:""},
    {icon:"FaRegFolder",name:"Projrct",Link:""}
  ]
  return (
    <nav className="h-20 flex justify-center items-center text-gray-600">
      <div className="flex items-center gap-45 shadow-xl rounded-full px-5 py-1 bg-white">


        {/* Right */}
        <div>
          <h1 className="font-bold text-black text-3xl font-serif">NK</h1>
        </div>

        {/* Middle */}
        <div className="hidden md:flex gap-3">
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

        {/* Left */}
        <div className="flex gap-5 items-center">
          <a href="#"><LuGithub className="h-6 w-6"/></a>
          <a href="#"><FiLinkedin className="h-6 w-6"/></a>
          <a href="#"><FaInstagram className="h-6 w-6"/></a>
        </div>
      </div>
    </nav>
  );
}
