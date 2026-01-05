import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Darkmode from "./Darkmode";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Collection", path: "/Shop/all" },
        { name: "About", path: "/About" },
        { name: "Contact", path: "/contact" },
    ];
    return (_jsxs("nav", { className: `fixed w-full  transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-5'}`, children: [_jsxs("div", { className: "max-w-7xl mx-auto flex justify-between items-center px-6", children: [_jsx("button", { onClick: () => setMenuOpen(true), className: "lg:hidden p-2 -ml-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors", children: _jsx(Menu, { className: "w-6 h-6" }) }), _jsxs(Link, { to: "/", className: "absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex items-center gap-2", children: [_jsx("span", { className: "text-2xl font-black tracking-tighter uppercase text-gray-900 dark:text-white transition-colors duration-500", children: "Aur\u00E9ne" }), _jsx("div", { className: "hidden lg:block w-1.5 h-1.5 bg-orange-500 rounded-full" })] }), _jsx("div", { className: "hidden lg:flex items-center gap-10", children: navLinks.map((link) => (_jsx(Link, { to: link.path, className: `text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-orange-500 ${location.pathname === link.path ? 'text-orange-500' : 'text-gray-500 dark:text-gray-400'}`, children: link.name }, link.name))) }), _jsx("div", { className: "flex items-center gap-2 md:gap-4", children: _jsx(Link, { to: "/Wishlist", className: "relative p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors", children: _jsx(Heart, { className: "w-5 h-5" }) }) })] }), _jsx(AnimatePresence, { children: menuOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => setMenuOpen(false), className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-200 lg:hidden" }), _jsxs(motion.div, { initial: { x: "-100%" }, animate: { x: 0 }, exit: { x: "-100%" }, transition: { type: "spring", damping: 25, stiffness: 200 }, className: "fixed inset-y-0 left-0 w-full max-w-xs bg-white dark:bg-[#0f0f0f] z-201 lg:hidden shadow-2xl flex flex-col p-8 transition-colors duration-500", children: [_jsxs("div", { className: "flex items-center justify-between mb-16", children: [_jsx("span", { className: "text-xl font-black tracking-tighter uppercase text-gray-900 dark:text-white", children: "Aur\u00E9ne" }), _jsx("button", { onClick: () => setMenuOpen(false), className: "p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors", children: _jsx(X, { className: "w-6 h-6" }) })] }), _jsx("div", { className: "flex flex-col gap-8", children: navLinks.map((link, i) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: i * 0.1 }, children: _jsx(Link, { to: link.path, className: `text-2xl font-black uppercase tracking-tighter ${location.pathname === link.path ? 'text-orange-500' : 'text-gray-900 dark:text-white'}`, children: link.name }) }, link.name))) }), _jsxs("div", { className: "mt-auto pt-8 border-t border-gray-100 dark:border-white/5 space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest", children: "Theme Adjustment" }), _jsx(Darkmode, {})] }), _jsx("button", { className: "w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all", children: "Join the Membership" })] })] })] })) })] }));
}
export default Navbar;
