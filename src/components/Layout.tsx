import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Starfield from './Starfield';
import FogTrailCursor from './FogTrailCursor';

const Layout = () => {
    const location = useLocation();

    // Scroll to top on navigation or refresh
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-cosmic-accent selection:text-white">
            <Starfield />
            <FogTrailCursor />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer className="py-20 px-6 border-t border-white/5 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h2 className="text-xl font-bold tracking-tighter mb-2">COSMIC VOYAGES</h2>
                        <p className="text-gray-500 text-sm">Pioneering the future of interstellar exploration.</p>
                    </div>
                    <div className="flex gap-6 text-gray-400 text-sm">
                        <a href="#" className="hover:text-cosmic-accent transition-colors">Twitter</a>
                        <a href="#" className="hover:text-cosmic-accent transition-colors">Instagram</a>
                        <a href="#" className="hover:text-cosmic-accent transition-colors">NASA API</a>
                    </div>
                    <p className="text-gray-600 text-xs">© 2026 Cosmic Voyages. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
