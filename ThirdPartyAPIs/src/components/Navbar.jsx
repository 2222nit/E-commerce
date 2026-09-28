import { useState } from "react";
import { AiFillTruck } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const middleContent = [
    { Link: "/Home", name: "Home" },
    { Link: "/BestSeller", name: "Best Seller" },
    { Link: "/TodaysDeals", name: "Today's Deals" },
    { Link: "/Sell", name: "Sell" },
  ];

  return (
    <header className="w-full flex items-center justify-center bg-gray-200/90 py-3">
      <nav className="relative w-[95%] max-w-7xl flex items-center justify-between bg-black/70 text-white px-5 md:px-8 py-2 rounded-full shadow-lg">

        {/* Logo + Search */}
        <div className="flex items-center gap-5">
          <Link to="/Home" className="flex items-center gap-1 font-semibold">
            <AiFillTruck className="text-3xl text-orange-400" />
            U'R Stuff
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center bg-white text-black gap-3 px-3 rounded-full h-10">
            <SlMagnifier className="text-xl cursor-pointer" />

            <input
              type="text"
              placeholder="Search your product"
              className="h-8 w-48 outline-none"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {middleContent.map((item) => (
            <li key={item.name}>
              <Link
                to={item.Link}
                className="hover:text-orange-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="flex items-center rounded-full p-2 text-2xl hover:bg-white hover:text-orange-600 transition-all duration-300"
            aria-label="Shopping cart"
          >
            <TiShoppingCart />
          </button>

          <button
            className="flex items-center rounded-full p-2 text-2xl hover:bg-white hover:text-orange-600 transition-all duration-300"
            aria-label="Profile"
          >
            <IoPersonOutline />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <IoMdClose /> : <HiBars3BottomRight />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 w-52 bg-black/90 rounded-2xl p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4">
              {middleContent.map((item) => (
                <Link
                  key={item.name}
                  to={item.Link}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
