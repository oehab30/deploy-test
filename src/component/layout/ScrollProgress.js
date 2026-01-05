import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useScroll, useSpring } from 'framer-motion';
function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (_jsx(motion.div, { className: "fixed top-0 left-0 right-0 h-1 bg-r origin-left z-200", style: { scaleX } }));
}
export default ScrollProgress;
