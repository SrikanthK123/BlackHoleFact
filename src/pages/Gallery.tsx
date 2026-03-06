import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download, Share2 } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506318137071-a8e063b4b57d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80",
    ];

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-5xl font-black mb-6">COSMIC GALLERY</h1>
                    <p className="text-gray-400 text-lg">A visual record of humanity's gaze into the infinite.</p>
                </header>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            layoutId={src}
                            onClick={() => setSelectedImage(src)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group cursor-zoom-in rounded-3xl overflow-hidden glassmorphism p-2 border border-white/5"
                        >
                            <img src={src} alt="Space" className="w-full rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="text-white" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
                        >
                            <button className="absolute top-10 right-10 text-white p-4 glassmorphism rounded-full">
                                <X size={24} />
                            </button>
                            <motion.img
                                layoutId={selectedImage}
                                src={selectedImage}
                                className="max-w-full max-h-full rounded-3xl shadow-2xl"
                            />
                            <div className="absolute bottom-10 flex gap-4">
                                <button className="p-4 glassmorphism rounded-full text-white hover:text-cosmic-accent"><Download size={20} /></button>
                                <button className="p-4 glassmorphism rounded-full text-white hover:text-cosmic-accent"><Share2 size={20} /></button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Gallery;
