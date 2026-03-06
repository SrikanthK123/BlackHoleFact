import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Radio, Satellite, Rocket, Info, ChevronRight, X, Atom } from 'lucide-react';

const DetectionMethod = ({ title, desc, icon: Icon, active }: { title: string, desc: string, icon: any, active: boolean }) => (
    <motion.div
        animate={{ opacity: active ? 1 : 0.5, scale: active ? 1 : 0.95 }}
        className={`p-8 rounded-3xl border-2 transition-all ${active ? 'bg-cosmic-accent/10 border-cosmic-accent' : 'bg-white/5 border-transparent'}`}
    >
        <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${active ? 'bg-cosmic-accent text-white' : 'bg-white/10 text-gray-400'}`}>
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const Science = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedHypothetical, setSelectedHypothetical] = useState<number | null>(null);

    const detectionMethods = [
        { title: 'X-Ray Emission', desc: 'Gas from nearby stars heats up to millions of degrees as it spirials toward the event horizon, emitting X-rays.', icon: Zap },
        { title: 'Gravitational Waves', desc: 'Ripples in space-time detected by LIGO as two black holes spiral into each other and merge.', icon: Radio },
        { title: 'Direct Imaging', desc: 'Capturing the radio shadow of the event horizon using Earth-sized telescope arrays like EHT.', icon: Satellite },
    ];

    const missions = [
        { title: 'JWST: Early Universe', desc: 'Discovering "greedy" black holes that grew far faster than expected in the dawn of time.', date: '2025-2026', icon: Satellite },
        { title: 'LIGO: O4+ Run', desc: 'Detecting daily gravitational waves with unprecedented clarity from the deepest reaches of space.', date: '2025 Upgrade', icon: Radio },
        { title: 'EHT: Next Gen', desc: 'The first real-time movies of plasma orbiting Sagittarius A* at the galactic center.', date: '2026 Target', icon: Atom },
    ];

    const hypotheticals = [
        { title: 'Wormholes?', detail: 'Theoretical tunnels connecting two distant points in space-time. Could black holes be the entrances?' },
        { title: 'Multiverses?', detail: 'Some theories suggest that everytime a black hole forms, a new universe is born on the other side.' },
    ];

    return (
        <div className="pt-32 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[1px] bg-cosmic-accent" />
                        <span className="text-cosmic-accent font-black tracking-[0.3em] uppercase text-xs">Research Frontiers</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">SCIENCE &<br />EXPLORATION</h1>
                    <p className="text-gray-400 text-xl max-w-3xl font-light leading-relaxed">
                        Pushing the boundaries of human knowledge through the world's most advanced telescopes and detectors.
                    </p>
                </header>

                {/* Detection Tabs */}
                <section className="mb-32">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-bold mb-8">How we see the Invisible</h2>
                            <div className="space-y-4">
                                {detectionMethods.map((m, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveTab(i)}
                                        className={`w-full text-left p-6 rounded-2xl transition-all ${activeTab === i ? 'bg-cosmic-accent text-white' : 'hover:bg-white/5 text-gray-500'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono text-sm opacity-50">0{i + 1}</span>
                                            <span className="font-bold">{m.title}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <AnimatePresence mode="wait">
                                <DetectionMethod
                                    key={activeTab}
                                    active={true}
                                    title={detectionMethods[activeTab].title}
                                    desc={detectionMethods[activeTab].desc}
                                    icon={detectionMethods[activeTab].icon}
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* Ongoing Missions */}
                <section className="mb-32">
                    <h2 className="text-4xl font-black mb-12 uppercase tracking-tight text-center">2025-2026 Core Missions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {missions.map((m, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="glassmorphism p-8 rounded-3xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cosmic-accent/5 translate-x-12 -translate-y-12 rotate-45 group-hover:bg-cosmic-accent/10 transition-colors" />
                                <m.icon className="text-cosmic-accent mb-6" size={32} />
                                <span className="text-xs font-mono text-gray-500 mb-2 block">{m.date}</span>
                                <h3 className="text-xl font-bold mb-4">{m.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Hypotheticals Modals */}
                <section className="mb-12">
                    <div className="p-12 glassmorphism rounded-[3xl] border border-white/10 text-center">
                        <h2 className="text-4xl font-black mb-8">BEYOND OUR UNDERSTANDING</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {hypotheticals.map((h, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedHypothetical(i)}
                                    className="bg-white/5 hover:bg-cosmic-accent/10 border border-white/10 hover:border-cosmic-accent px-10 py-6 rounded-2xl transition-all group"
                                >
                                    <span className="text-xl font-bold group-hover:text-cosmic-accent transition-colors">{h.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Modal for Hypotheticals */}
                <AnimatePresence>
                    {selectedHypothetical !== null && (
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
                                    onClick={() => setSelectedHypothetical(null)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-white"
                                >
                                    <X size={24} />
                                </button>
                                <Info className="text-cosmic-accent mb-6" size={48} />
                                <h2 className="text-3xl font-black mb-4 uppercase">{hypotheticals[selectedHypothetical].title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {hypotheticals[selectedHypothetical].detail}
                                </p>
                                <div className="bg-cosmic-accent/5 border border-cosmic-accent/20 p-6 rounded-2xl">
                                    <p className="text-cosmic-accent text-sm font-bold">
                                        "These theories push General Relativity to its absolute limits, where math meets imagination."
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Science;
