import { motion } from 'framer-motion';
import { Rocket, Satellite, Zap, Radio } from 'lucide-react';

const MissionCard = ({ title, type, status, color, icon: Icon }: { title: string, type: string, status: string, color: string, icon: any }) => (
    <motion.div
        whileHover={{ scale: 1.02, rotateY: 5 }}
        className="glassmorphism p-8 rounded-3xl relative group cursor-pointer overflow-hidden"
    >
        <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 transition-transform group-hover:scale-150 group-hover:opacity-20 translate-x-8 -translate-y-8 rounded-full`} style={{ backgroundColor: color }} />
        <Icon className="mb-6 text-gray-300" size={40} />
        <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-50 mb-2 block">{type}</span>
        <h3 className="text-2xl font-black mb-4 group-hover:text-glow transition-all">{title}</h3>
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse`} style={{ backgroundColor: color }} />
            <span className="text-sm font-medium text-gray-500 uppercase">{status}</span>
        </div>
    </motion.div>
);

const Missions = () => {
    const missions = [
        { title: "Artemis III", type: "Crewed Lunar", status: "Active", color: "#ffd700", icon: Rocket },
        { title: "Voyager III", type: "Interstellar", status: "In Route", color: "#7c3aed", icon: Radio },
        { title: "Solar Shield", type: "Heliophysics", status: "Nominal", color: "#ff4500", icon: Zap },
        { title: "Deep Eye", type: "Observation", status: "Standby", color: "#00bfff", icon: Satellite },
        { title: "Mars Gateway", type: "Logistics", status: "Building", color: "#32cd32", icon: Rocket },
        { title: "Black Hole Probe", type: "Scientific", status: "Planned", color: "#da70d6", icon: Zap },
    ];

    return (
        <div className="pt-32 px-6 pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-5xl font-black mb-4">MISSIONS CONTROL</h1>
                    <p className="text-gray-400 max-w-2xl text-lg">Real-time status of our ongoing interstellar operations and future exploration projects across the solar system.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {missions.map((m, i) => (
                        <motion.div
                            key={m.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <MissionCard {...m} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Missions;
