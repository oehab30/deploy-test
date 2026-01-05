import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <h1 className="text-2xl text-white font-bold">Auréne</h1>
          <p className="text-gray-400">
            Crafting luxury accessories that define elegance and sophistication.
          </p>
          <div className="flex gap-4 text-xl mt-2">
            <Link to="#" className="hover:text-purple-600 transition-colors"><FaInstagram /></Link>
            <Link to="#" className="hover:text-purple-600 transition-colors"><FaFacebook /></Link>
            <Link to="#" className="hover:text-purple-600 transition-colors"><FaXTwitter /></Link>
          </div>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col gap-2 md:w-1/6">
          <h2 className="text-xl text-white font-semibold mb-4">Shop</h2>
          <Link to="#" className="hover:text-purple-600 transition-colors">Watches</Link>
          <Link to="#" className="hover:text-purple-600 transition-colors">Bags</Link>
          <Link to="#" className="hover:text-purple-600 transition-colors">Bracelets</Link>
          <Link to="#" className="hover:text-purple-600 transition-colors">New Arrivals</Link>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-2 md:w-1/6">
          <h2 className="text-xl text-white font-semibold mb-4">Support</h2>
          <Link to="#" className="hover:text-purple-600 transition-colors">Contact Us</Link>
          <Link to="#" className="hover:text-purple-600 transition-colors">Guide</Link>
          <Link to="#" className="hover:text-purple-600 transition-colors">Returns</Link>
          <Link to="#" className="hover:text-purple-600 transition-colors">Shipping</Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <h2 className="text-xl text-white font-semibold mb-2">Newsletter</h2>
          <p className="text-gray-400">Subscribe for exclusive offers and updates.</p>

          <form className="flex ">
            <input
             type="email"
             placeholder="Enter your Email"
            className="flex-1 p-2 rounded-l-md border border-gray-300 focus:border-purple-600 focus:outline-none text-black bg-white"
             />

            <button
              type="submit"
              className="bg-purple-600 text-white px-4 rounded-r-md hover:bg-purple-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        <hr /> <br />
        &copy; {new Date().getFullYear()} . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
