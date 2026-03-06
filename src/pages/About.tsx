import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, User, History, Rocket, X } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import AstroAvatar from '../components/AstroAvatar';

const TimelineEvent = ({ year, title, desc, icon: Icon }: { year: string, title: string, desc: string, icon: any }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="min-w-[300px] md:min-w-[400px] glassmorphism p-8 rounded-3xl relative group"
    >
        <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-black text-cosmic-accent">{year}</span>
            <div className="w-10 h-10 rounded-full bg-cosmic-accent/10 flex items-center justify-center text-cosmic-accent">
                <Icon size={20} />
            </div>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const timelineData = [
        { year: '1971', title: 'Cygnus X-1 Discovery', desc: 'First strong candidate for a black hole confirmed via X-ray observations.', icon: Rocket },
        { year: '2015', title: 'LIGO Detection', desc: 'First observation of gravitational waves from a binary black hole merger.', icon: History },
        { year: '2019', title: 'EHT M87* Image', desc: 'First ever direct image of a black hole\'s event horizon shadows.', icon: User },
        { year: '2025', title: 'Massive Mergers', desc: 'JWST reveals unexpected massive black hole seeds in the early universe.', icon: Rocket },
        { year: '2026', title: 'The Singularity Era', desc: 'JWST and Ligo-India synergize to map the deep cosmic dawn.', icon: History },
    ];

    return (
        <div className="pt-32 pb-24">
            {/* Mission Hero */}
            <section className="px-6 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <span className="text-cosmic-accent font-black tracking-[0.3em] uppercase text-sm mb-4 block">Our Mission</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        CURATING DECADES OF<br />COSMIC DISCOVERIES
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        From Cygnus X-1 to the latest JWST revelations—we bridge the gap between complex astrophysics and curious minds by synthesizing data from extensive global space research.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-cosmic-accent hover:bg-cosmic-gold text-white font-bold py-4 px-10 rounded-full transition-all flex items-center gap-3 mx-auto shadow-lg shadow-cosmic-accent/20"
                    >
                        SUBSCRIBE TO INSIGHTS <ArrowRight size={18} />
                    </button>
                </motion.div>
            </section>

            {/* Interactive Timeline */}
            <section className="mb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <h2 className="text-3xl font-bold flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-cosmic-accent" />
                        A HISTORY OF SCIENTIFIC DATA
                    </h2>
                </div>
                <div className="flex gap-8 overflow-x-auto pb-12 px-6 no-scrollbar snap-x cursor-grab active:cursor-grabbing">
                    {timelineData.map((event, i) => (
                        <div key={i} className="snap-center">
                            <TimelineEvent {...event} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Bio Section */}
            <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden glassmorphism border border-white/10 relative">
                        <div className="absolute inset-0 z-0">
                            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                                <AstroAvatar />
                            </Canvas>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>
                    <div className="absolute -bottom-8 -right-8 glassmorphism p-6 rounded-2xl border border-white/20">
                        <span className="text-cosmic-accent font-black block text-2xl">SRIKANTH</span>
                        <span className="text-gray-500 text-sm">25-Year-Old Developer & Architect</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">The Personal Angle</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Srikanth is a 25-year-old developer based in Hyderabad, passionate about making the mysteries of the universe accessible to everyone.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        This platform is the result of his work curating and synthesizing decades of breakthrough research from global organizations like NASA, ESA, and the Event Horizon Telescope (EHT) collaboration.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        By combining modern web technology with historical scientific data, he aims to provide a unique, interactive lens into the dark heart of the cosmos.
                    </p>
                </motion.div>
            </section>

            {/* Newsletter Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="glassmorphism max-w-lg w-full p-12 rounded-3xl relative border border-white/20"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                            <Mail className="text-cosmic-accent mb-6" size={48} />
                            <h2 className="text-3xl font-black mb-4">JOIN THE MISSION</h2>
                            <p className="text-gray-400 mb-8">Get the latest black hole discoveries and 2026 insights delivered to your inbox.</p>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your cosmic identity (email)"
                                    className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-cosmic-accent text-white"
                                />
                                <button className="bg-cosmic-accent hover:bg-cosmic-gold text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cosmic-accent/20">
                                    INITIALIZE SUBSCRIPTION
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default About;
