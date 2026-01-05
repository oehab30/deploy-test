import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
function FloatingDarkToggle() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved)
                return saved === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
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
    return (_jsx(AnimatePresence, { children: isVisible && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.8, y: 50, x: "-50%" }, animate: { opacity: 1, scale: 1, y: 0, x: "-50%" }, exit: { opacity: 0, scale: 0.8, y: 50, x: "-50%" }, className: "fixed bottom-10 left-1/2 z-200", children: _jsxs("div", { className: "flex items-center gap-4 px-3 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-full shadow-2xl relative", children: [_jsxs("button", { onClick: () => setIsDark(!isDark), className: "relative w-20 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-colors duration-500 overflow-hidden cursor-pointer active:scale-95 group", children: [_jsx(motion.div, { animate: { x: isDark ? 40 : 0 }, transition: { type: "spring", stiffness: 400, damping: 25 }, className: "absolute top-1 left-1 w-8 h-8 rounded-full bg-white dark:bg-orange-500 shadow-lg flex items-center justify-center z-10", children: _jsx(AnimatePresence, { mode: "wait", children: isDark ? (_jsx(motion.div, { initial: { scale: 0.5, opacity: 0, rotate: -90 }, animate: { scale: 1, opacity: 1, rotate: 0 }, exit: { scale: 0.5, opacity: 0, rotate: 90 }, transition: { duration: 0.2 }, children: _jsx(Moon, { className: "w-4 h-4 text-white fill-current" }) }, "moon")) : (_jsx(motion.div, { initial: { scale: 0.5, opacity: 0, rotate: 90 }, animate: { scale: 1, opacity: 1, rotate: 0 }, exit: { scale: 0.5, opacity: 0, rotate: -90 }, transition: { duration: 0.2 }, children: _jsx(Sun, { className: "w-4 h-4 text-orange-500" }) }, "sun")) }) }), _jsxs("div", { className: "absolute inset-0 flex justify-between items-center px-3 pointer-events-none opacity-20 dark:opacity-40", children: [_jsx(Sun, { className: "w-4 h-4 text-orange-500" }), _jsx(Moon, { className: "w-4 h-4 text-white" })] })] }), _jsxs("div", { className: "flex flex-col items-start leading-none pr-4 min-w-[100px]", children: [_jsx("span", { className: "text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1", children: "Atmosphere" }), _jsx("span", { className: "text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-widest", children: isDark ? 'Obsidian' : 'Radiance' })] })] }) })) }));
}
export default FloatingDarkToggle;
