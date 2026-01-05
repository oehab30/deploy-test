import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed  shadow-md bg-white dark:bg-black z-[100] ">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center py-5 px-6 md:px-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold font-[Playfair Display]  dark:text-white">
          Auréne
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium  ">
          <Link to="/" className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300">Home</Link>
          <Link to="/Shop/:category" className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300">Shop</Link>
          <Link to="/about" className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300">About</Link>
          <Link to="/contact" className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300">Contact</Link>
        </div>

        {/* Icons + Login */}
        <div className="hidden md:flex items-center gap-4 text-xl  dark:text-white">
          <Link to="/wishlist" className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300"><FaRegHeart /></Link>
          <Link to="/Login" className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300"><IoPersonOutline /></Link>
          <Link to="/cart" className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300"><HiOutlineShoppingBag /></Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700  focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-white dark:bg-black  dark:text-white shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300">Home</Link>
          <Link to="/Shop/:category" onClick={() => setMenuOpen(false)} className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300">Shop</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[var(--main)] dark:hover:text-[var(--main)] duration-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;