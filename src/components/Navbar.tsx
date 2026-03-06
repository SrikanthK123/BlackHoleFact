import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home,
    Rocket,
    Image,
    Info,
    Menu,
    X,
    Zap,
    Layers,
    Library,
    Activity
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={18} />, ariaLabel: 'Home' },
        { name: 'Basics', path: '/basics', icon: <Zap size={18} />, ariaLabel: 'Black Hole Basics' },
        { name: 'Science', path: '/science', icon: <Rocket size={18} />, ariaLabel: 'Science and Exploration' },
        { name: 'Gallery', path: '/gallery', icon: <Image size={18} />, ariaLabel: 'Cosmic Gallery' },
        { name: 'Insights', path: '/insights', icon: <Layers size={18} />, ariaLabel: 'Insights and Blog' },
        { name: 'Simulation', path: '/fluid', icon: <Activity size={18} />, ariaLabel: 'Black Hole Simulation' },
        { name: 'Resources', path: '/resources', icon: <Library size={18} />, ariaLabel: 'Resources and Tools' },
        { name: 'About', path: '/about', icon: <Info size={18} />, ariaLabel: 'About Us' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism m-6 rounded-full border border-white/10 px-8 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" aria-label="Cosmic Voyages Home" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
                    <Rocket className="text-cosmic-accent group-hover:rotate-45 transition-transform" />
                    <span className="text-glow">COSMIC VOYAGES</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            aria-label={link.ariaLabel}
                            className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-white flex items-center gap-2 ${location.pathname === link.path ? 'text-cosmic-accent' : 'text-gray-400'
                                }`}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 mt-4 mx-6 bg-black/95 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 flex flex-col gap-6 md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                aria-label={link.ariaLabel}
                                className={`flex items-center gap-3 text-lg font-medium transition-colors hover:text-cosmic-accent ${location.pathname === link.path ? 'text-cosmic-accent' : 'text-gray-300'
                                    }`}
                            >
                                <span className={`${location.pathname === link.path ? 'text-cosmic-accent' : 'text-gray-500'}`}>
                                    {link.icon}
                                </span>
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
