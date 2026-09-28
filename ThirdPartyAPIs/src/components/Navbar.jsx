import { useState } from "react";
import { AiFillTruck } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";

export default function Navbar() {
  const middleContent = [
    { href: "#", name: "Home" },
    { href: "#", name: "Best Seller" },
    { href: "#", name: "Today's Deals" },
    { href: "#", name: "Sell" },
  ];

  const [toggle, setToggle] = useState(true);
  return (
    <header className="w-full flex min-h-15 items-center justify-center bg-gray-200/90">
      <nav className="flex sm:justify-between bg-black/70 text-white px-5 md:px-10 py-2 rounded-full shadow-lg gap-15 md:gap-40 items-center ">
        {/* Logo's side */}
        <div className="flex items-center gap-5">
          <a href="#" className="flex items-center gap-1">
            <AiFillTruck className="text-3xl text-orange-400/90" /> U'R Stuff
          </a>
          {/*SearchBar*/}
          <div className="hidden md:flex items-center bg-white text-black gap-5 px-2 rounded-full h-10">
            <SlMagnifier className="text-2xl cursor-pointer"/>
            <input type="text" placeholder="Search your product" className="text-black h-8 " />
          </div>
        </div>

        {/* Middle */}
        <ul className="hidden md:flex gap-10 ">
          {middleContent.map((v, i) => (
            <li key={i}>
              <a href={v.href}>{v.name}</a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="hidden md:flex gap-5">
          <button className="flex items-center rounded-full p-1 px-2 text-2xl hover:bg-white hover:text-orange-600/70 duration-400">
            <TiShoppingCart />
          </button>
          <button className="flex items-center rounded-full p-1 px-2 text-2xl hover:bg-white hover:text-orange-600/70 duration-400">
            <IoPersonOutline />
          </button>
        </div>

        {/* Mobile button*/}
        <div
          onClick={() => setToggle(!toggle)}
          className="block md:hidden text-2xl"
        >
          {toggle ? <HiBars3BottomRight /> : <IoMdClose />}
        </div>
        {toggle && <div className="block md:hidden"></div>}
      </nav>
    </header>
  );
}
