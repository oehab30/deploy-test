import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import FloatingDarkToggle from "./FloatingDarkToggle";
function Layout() {
    return (_jsxs(_Fragment, { children: [_jsx(ScrollProgress, {}), _jsx(FloatingDarkToggle, {}), _jsx(Navbar, {}), _jsx("main", { className: "min-h-screen", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
}
export default Layout;
