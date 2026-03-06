import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import blackHoleBg from '../assets/BlackHoleBG.jpg';

const Card = ({ title, desc, img }: { title: string, desc: string, img: string }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] glassmorphism p-1"
        >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${img})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    {desc}
                </p>
                <button className="flex items-center gap-2 text-cosmic-accent font-semibold text-sm">
                    EXPLORE <ArrowRight size={16} />
                </button>
            </div>
        </motion.div>
    );
};

const Home = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div className="relative">
            {/* Hero Section */}
            <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y, scale, filter: 'brightness(1.2) contrast(1.1) saturate(1.1)' }}
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
                    <img
                        src={blackHoleBg}
                        alt="Black Hole"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    style={{ opacity }}
                    className="relative z-10 text-center px-6"
                >
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-6 text-glow"
                    >
                        EVENT<br />HORIZON
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 font-light tracking-[0.2em] mb-12"
                    >
                        EXPLORE THE SINGULARITY
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="h-20 w-[1px] bg-gradient-to-b from-cosmic-accent to-transparent" />
                        <ChevronDown className="animate-bounce text-cosmic-accent" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Featured Missions */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight mb-4">LATEST MISSIONS</h2>
                        <p className="text-gray-400 max-w-md">Pushing the boundaries of human knowledge through cutting-edge exploration.</p>
                    </div>
                    <button className="hidden md:block text-cosmic-accent border-b border-cosmic-accent pb-1 font-bold">VIEW ALL MISSIONS</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card
                        title="Mars Horizon"
                        desc="Establishing the first permanent presence on the Red Planet."
                        img="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80"
                    />
                    <Card
                        title="Titan Probe"
                        desc="Deep diving into the methane lakes of Saturn's largest moon."
                        img="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80"
                    />
                    <Card
                        title="Europa Clipper"
                        desc="Searching for life within the icy oceans of Europa."
                        img="https://images.unsplash.com/photo-1614730322502-45e3d172e297?auto=format&fit=crop&q=80"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
