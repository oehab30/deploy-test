import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
function Darkmode() {
    const [isDark, setIsDark] = useState(() => {
        // Initial state from localStorage or system preference
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved)
                return saved === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);
    const toggleTheme = () => setIsDark(!isDark);
    return (_jsxs("button", { onClick: toggleTheme, className: "relative w-14 h-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center px-1 border border-gray-200 dark:border-white/10 transition-colors duration-500 overflow-hidden cursor-pointer active:scale-95 group", "aria-label": "Toggle dark mode", children: [_jsx(motion.div, { animate: { x: isDark ? 28 : 0 }, transition: { type: "spring", stiffness: 500, damping: 30 }, className: "z-10 w-5 h-5 rounded-full bg-white dark:bg-orange-500 shadow-lg flex items-center justify-center", children: _jsx(AnimatePresence, { mode: "wait", children: isDark ? (_jsx(motion.div, { initial: { opacity: 0, rotate: -90, scale: 0.5 }, animate: { opacity: 1, rotate: 0, scale: 1 }, exit: { opacity: 0, rotate: 90, scale: 0.5 }, transition: { duration: 0.2 }, children: _jsx(Moon, { className: "w-3 h-3 text-white fill-current" }) }, "moon")) : (_jsx(motion.div, { initial: { opacity: 0, rotate: 90, scale: 0.5 }, animate: { opacity: 1, rotate: 0, scale: 1 }, exit: { opacity: 0, rotate: -90, scale: 0.5 }, transition: { duration: 0.2 }, children: _jsx(Sun, { className: "w-3 h-3 text-orange-500 fill-current" }) }, "sun")) }) }), _jsxs("div", { className: "absolute inset-0 flex justify-between items-center px-2 pointer-events-none opacity-20 dark:opacity-40 transition-opacity", children: [_jsx(Sun, { className: "w-3 h-3 text-orange-500" }), _jsx(Moon, { className: "w-3 h-3 text-white scale-90" })] })] }));
}
export default Darkmode;
