import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Database, Link as LinkIcon, Calculator, Cpu, Globe } from 'lucide-react';

const ResourceCard = ({ title, desc, icon: Icon, link }: { title: string, desc: string, icon: any, link: string }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 10 }}
        className="glassmorphism p-8 rounded-3xl border border-white/5 flex items-center gap-8 group"
    >
        <div className="w-16 h-16 rounded-2xl bg-cosmic-accent/10 flex items-center justify-center text-cosmic-accent group-hover:bg-cosmic-accent group-hover:text-white transition-all">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                {title} <LinkIcon size={14} className="opacity-50" />
            </h3>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    </motion.a>
);

const Resources = () => {
    const [solarMass, setSolarMass] = useState(1);
    const radius = (solarMass * 2.95).toFixed(2);

    const tools = [
        { title: 'NASA Exoplanet Archive', desc: 'Comprehensive database of confirmed worlds beyond our solar system.', icon: Database, link: 'https://exoplanetarchive.ipac.caltech.edu/' },
        { title: 'ESA Hubble Gallery', desc: 'Direct access to the most iconic deep-space captures in high resolution.', icon: Globe, link: 'https://hubblesite.org/resource-gallery' },
        { title: 'Simulating Singularities', desc: 'Open-source Python tools for modeling relativistic ray-tracing.', icon: Cpu, link: 'https://github.com' }
    ];

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-black mb-8">TOOLS &<br />RESOURCES</h1>
                    <p className="text-gray-400 text-xl max-w-2xl font-light">Equipping explorers with the necessary data to navigate the void.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    {/* Calculator */}
                    <section className="glassmorphism p-12 rounded-[3xl] border-2 border-cosmic-accent/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Calculator size={120} />
                        </div>
                        <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                            <Cpu className="text-cosmic-accent" /> EVENT HORIZON CALCULATOR
                        </h2>
                        <p className="text-gray-400 mb-8">Calculate the Schwarzschild Radius (Rₛ) for any mass in solar units.</p>

                        <div className="mb-12">
                            <label className="text-xs font-black tracking-widest text-gray-500 mb-4 block uppercase">Input: Solar Masses (M☉)</label>
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={solarMass}
                                onChange={(e) => setSolarMass(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-cosmic-accent"
                            />
                            <div className="flex justify-between mt-4 font-mono text-sm text-gray-400">
                                <span>1 M☉</span>
                                <span>100 M☉</span>
                            </div>
                        </div>

                        <div className="p-8 bg-cosmic-accent/5 rounded-3xl border border-cosmic-accent/20 flex items-center justify-between">
                            <div>
                                <span className="text-xs font-bold text-cosmic-accent block mb-1">HORIZON RADIUS</span>
                                <span className="text-4xl font-black text-white">{radius} <span className="text-lg opacity-50">KM</span></span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-gray-500 block mb-1">TOTAL MASS</span>
                                <span className="text-2xl font-bold text-white">{solarMass} <span className="text-sm opacity-50 text-gray-500">SOLAR</span></span>
                            </div>
                        </div>
                    </section>

                    {/* Tool List */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold mb-8">Curated Toolkits</h2>
                        {tools.map((t, i) => (
                            <ResourceCard key={i} {...t} />
                        ))}
                    </div>
                </div>

                {/* Community Section */}
                <section className="glassmorphism p-12 rounded-[3xl] text-center border border-white/5">
                    <h2 className="text-3xl font-black mb-6 uppercase">Join the Global Horizon</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Connect with thousands of researchers, enthusiasts, and developers building the future of space exploration.</p>
                    <div className="flex justify-center gap-6">
                        <button className="bg-cosmic-accent hover:bg-cosmic-gold text-white font-bold py-4 px-10 rounded-full transition-all">
                            DISCORD SERVER
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full transition-all border border-white/10">
                            GITHUB COMMUNITY
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resources;
