import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, Clock, Eye } from 'lucide-react';

const BlogCard = ({ category, title, excerpt, date, readTime, image }: { category: string, title: string, excerpt: string, date: string, readTime: string, image: string }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="glassmorphism rounded-3xl overflow-hidden border border-white/5 flex flex-col h-full"
    >
        <div className="h-48 overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-cosmic-accent text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                {category}
            </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> {date}</span>
                <span className="flex items-center gap-1"><Eye size={12} /> {readTime} read</span>
            </div>
            <h3 className="text-xl font-bold mb-4 line-clamp-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{excerpt}</p>
            <button className="mt-auto flex items-center gap-2 text-cosmic-accent font-bold text-sm group">
                READ FULL INSIGHT <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
        </div>
    </motion.div>
);

const Insights = () => {
    const posts = [
        {
            category: "Discovery",
            title: "JWST Finds 'Greedy' Black Holes from Cosmic Dawn",
            excerpt: "New data shows supermassive black holes existed much earlier than theory predicted, consuming matter at extreme rates.",
            date: "MAR 05, 2026",
            readTime: "5 MIN",
            image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80"
        },
        {
            category: "Theory",
            title: "Are We Living Inside a Black Hole?",
            excerpt: "Exploring the holographic principle and the mathematical possibility that our universe is a singularity's inverse.",
            date: "FEB 28, 2026",
            readTime: "8 MIN",
            image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&q=80"
        },
        {
            category: "Observation",
            title: "EHT Prepares to Film Sagittarius A* in Real-Time",
            excerpt: "The global array of telescopes is getting a massive upgrade to capture movies of the photon ring.",
            date: "JAN 15, 2026",
            readTime: "6 MIN",
            image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <Newspaper className="text-cosmic-accent" />
                        <span className="text-cosmic-accent font-black tracking-widest text-xs uppercase">Cosmic Feed</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8">INSIGHTS &<br />DEEP DIVES</h1>
                    <p className="text-gray-400 text-xl max-w-2xl font-light">Latest dispatches from the event horizon and beyond.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <BlogCard {...post} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Insights;
