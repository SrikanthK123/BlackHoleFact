import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, HelpCircle, Zap } from 'lucide-react';

const FormationStep = ({ title, desc, step }: { title: string, desc: string, step: number }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="glassmorphism p-8 rounded-3xl"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-cosmic-accent flex items-center justify-center font-black text-xl">
                {step}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
    </motion.div>
);

const BlackHoleCard = ({ type, mass, example }: { type: string, mass: string, example: string }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="glassmorphism p-8 rounded-3xl group cursor-help"
    >
        <span className="text-cosmic-accent font-black tracking-widest text-xs mb-2 block">CATEGORY</span>
        <h3 className="text-2xl font-black mb-4 group-hover:text-glow transition-all">{type}</h3>
        <div className="space-y-3">
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">MASS RANGE</span>
                <span className="text-white font-mono">{mass}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">EXAMPLE</span>
                <span className="text-white font-mono italic">{example}</span>
            </div>
        </div>
    </motion.div>
);

const Basics = () => {
    const [formationStep, setFormationStep] = useState(0);
    const [activeConcept, setActiveConcept] = useState<number | null>(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizResult, setQuizResult] = useState<string | null>(null);

    const formationData = [
        { title: 'Stellar Collapse', desc: 'A massive star runs out of fuel and collapses under its own gravity, triggering a supernova.' },
        { title: 'The Event Horizon', desc: 'Gravity becomes so strong that even light cannot escape past this threshold.' },
        { title: 'The Singularity', desc: 'All mass is crushed into an infinitely dense point at the center.' },
    ];

    const blackHoleTypes = [
        { type: 'Stellar', mass: '3-50 Solar Masses', example: 'Cygnus X-1' },
        { type: 'Intermediate', mass: '100-100,000 Mo', example: 'HLX-1' },
        { type: 'Supermassive', mass: 'Millions-Billions Mo', example: 'Sagittarius A*' },
    ];

    const concepts = [
        { title: 'Event Horizon', detail: 'The point of no return. Once you cross this sphere, every path leads to the center.' },
        { title: 'Singularity', detail: 'A region of space where the density is infinite and current physics breaks down.' },
        { title: 'Spaghettification', detail: 'The stretching of objects as they fall in due to extreme tidal forces.' },
    ];

    return (
        <div className="pt-32 pb-24 px-6 no-scrollbar">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 md:mb-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-tight text-glow"
                    >
                        BLACK HOLE<br />FUNDAMENTALS
                    </motion.h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light px-4">
                        Demystifying the most extreme objects in the known universe through interactive discovery.
                    </p>
                </header>

                {/* Formation Slider */}
                <section className="mb-24 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight flex items-center gap-4">
                            <Zap className="text-cosmic-accent" /> How they Form
                        </h2>
                        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
                            {formationData.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setFormationStep(i)}
                                    className={`flex-shrink-0 w-10 md:w-12 h-1 bg-white/10 rounded-full transition-all ${formationStep === i ? 'bg-cosmic-accent w-16 md:w-24' : ''}`}
                                    aria-label={`Step ${i + 1}`}
                                />
                            ))}
                        </div>
                        <AnimatePresence mode="wait">
                            <FormationStep
                                key={formationStep}
                                step={formationStep + 1}
                                title={formationData[formationStep].title}
                                desc={formationData[formationStep].desc}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="order-1 lg:order-2 relative aspect-square glassmorphism rounded-full flex items-center justify-center p-8 md:p-12 max-w-sm mx-auto w-full">
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-cosmic-accent/20 border-dashed"
                        />
                        <div className="w-16 md:w-24 h-16 md:h-24 bg-black rounded-full shadow-[0_0_50px_20px_rgba(255,140,0,0.3)] relative z-10" />
                    </div>
                </section>

                {/* Anatomy Diagram */}
                <section className="mb-24 md:mb-32">
                    <div className="flex flex-col items-center text-center mb-12 md:mb-16 px-4">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 uppercase">Anatomy of a Singularity</h2>
                        <p className="text-gray-400 max-w-2xl text-sm md:text-base">Interactive structural breakdown of a Schwarzschild Black Hole.</p>
                    </div>

                    <div className="glassmorphism rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-white/5 relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="relative group max-w-md mx-auto w-full">
                                <svg viewBox="0 0 400 400" className="w-full h-auto filter drop-shadow-[0_0_30px_rgba(255,140,0,0.2)]">
                                    {/* Accretion Disk */}
                                    <motion.ellipse
                                        cx="200" cy="200" rx="180" ry="40"
                                        fill="none" stroke="currentColor" strokeWidth="2"
                                        className="text-cosmic-accent/20"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.ellipse
                                        cx="200" cy="200" rx="150" ry="30"
                                        fill="none" stroke="currentColor" strokeWidth="4"
                                        className="text-cosmic-accent/40"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* Event Horizon */}
                                    <circle cx="200" cy="200" r="60" fill="black" stroke="#ff8c00" strokeWidth="1" />

                                    {/* Relativistic Jet */}
                                    <motion.path
                                        d="M200,140 L200,0 M200,260 L200,400"
                                        stroke="#ffaa00" strokeWidth="4" strokeDasharray="10 5"
                                        initial={{ strokeDashoffset: 0 }}
                                        animate={{ strokeDashoffset: -100 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* Hotspots */}
                                    <circle cx="200" cy="200" r="4" fill="white" className="animate-pulse" /> {/* Singularity */}
                                </svg>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                                {[
                                    { title: 'Accretion Disk', desc: 'Superheated gas and dust spiraling inward at near-light speeds.' },
                                    { title: 'Event Horizon', desc: 'The defining boundary where escape velocity exceeds light speed.' },
                                    { title: 'Singularity', desc: 'The core where matter is crushed to infinite density.' },
                                    { title: 'Relativistic Jet', desc: 'Beams of radiation blasted out from the poles.' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cosmic-accent/50 transition-colors"
                                    >
                                        <h3 className="text-lg md:text-xl font-bold text-cosmic-accent mb-1 md:mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types Grid */}
                <section className="mb-24 md:mb-32 px-4">
                    <h2 className="text-3xl md:text-4xl font-black mb-10 md:mb-12 uppercase tracking-tight text-center">Hierarchy of Extremes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {blackHoleTypes.map((t, i) => (
                            <BlackHoleCard key={i} {...t} />
                        ))}
                    </div>
                </section>

                {/* Accordion Concepts */}
                <section className="mb-24 md:mb-32 max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4">
                        <div className="w-8 md:w-12 h-[1px] bg-cosmic-accent" />
                        CORE CONCEPTS
                    </h2>
                    <div className="space-y-4">
                        {concepts.map((c, i) => (
                            <div key={i} className="glassmorphism rounded-2xl overflow-hidden border border-white/5">
                                <button
                                    onClick={() => setActiveConcept(activeConcept === i ? null : i)}
                                    className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                                    aria-expanded={activeConcept === i}
                                >
                                    <span className="text-lg md:text-xl font-bold">{c.title}</span>
                                    <ChevronRight className={`transition-transform duration-300 ${activeConcept === i ? 'rotate-90 text-cosmic-accent' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeConcept === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-4 md:px-6 pb-4 md:pb-6 text-gray-400 text-sm md:text-base leading-relaxed"
                                        >
                                            {c.detail}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive Quiz */}
                <section className="mb-12 px-4">
                    <div className="glassmorphism p-8 md:p-12 rounded-[2rem] md:rounded-[3xl] text-center border-2 border-cosmic-accent/20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
                            <HelpCircle size={120} />
                        </div>
                        {!quizStarted ? (
                            <>
                                <h2 className="text-3xl md:text-4xl font-black mb-6">WHAT IF YOU FELL IN?</h2>
                                <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">Test your knowledge on the fate of cosmic travelers.</p>
                                <button
                                    onClick={() => setQuizStarted(true)}
                                    className="bg-cosmic-accent hover:bg-cosmic-gold text-white font-black py-4 px-8 md:px-12 rounded-full transition-all text-sm md:text-base"
                                >
                                    START MISSION
                                </button>
                            </>
                        ) : (
                            <div className="max-w-xl mx-auto text-left">
                                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">How would observers see your descent?</h3>
                                <div className="grid gap-3 md:gap-4">
                                    {[
                                        { choice: 'You vanish instantly', result: 'Incorrect! Redshift effects would prevail.' },
                                        { choice: 'You slow down and turn red', result: 'Correct! Time dilation creates this illusion.' },
                                        { choice: 'You accelerate past light speed', result: 'Impossible. Nothing exceeds c.' }
                                    ].map((opt, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setQuizResult(opt.result)}
                                            className="p-4 md:p-6 glassmorphism rounded-2xl hover:bg-white/5 border border-white/10 transition-all text-left text-sm md:text-base"
                                        >
                                            {opt.choice}
                                        </button>
                                    ))}
                                </div>
                                {quizResult && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 md:mt-8 p-4 md:p-6 bg-cosmic-accent/10 rounded-2xl border border-cosmic-accent/30 text-cosmic-accent font-bold text-sm md:text-base"
                                    >
                                        {quizResult}
                                    </motion.div>
                                )}
                                <button onClick={() => { setQuizStarted(false); setQuizResult(null) }} className="mt-6 md:mt-8 text-xs md:text-sm text-gray-500 hover:text-white underline block mx-auto">RESET MISSION</button>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Basics;
