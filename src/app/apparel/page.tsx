'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const ApparelPage: FC = () => {
    const apparel = [
        { name: "Performance Tees", description: "Lightweight, sweat-wicking tees with four-way stretch and an anti-odor finish.", icon: "👕", features: ["4-Way Stretch", "Moisture-Wicking", "Anti-Odor"] },
        { name: "Training Hoodies", description: "Warm, breathable pullovers with structured hoods and reinforced seams—perfect for warmups and recovery.", icon: "🧥", features: ["Breathable", "Reinforced Seams", "Structured Hood"] },
        { name: "Flex Leggings", description: "High-compression, high-flex leggings with flatlock seams and secure pockets.", icon: "🥼", features: ["High Compression", "Flatlock Seams", "Secure Pockets"] },
        { name: "Elite Shorts", description: "Durable, quick-dry shorts with comfortable liner options and optimized length for peak performance.", icon: "🩳", features: ["Quick-Dry", "Comfortable Liner", "Optimized Fit"] }
    ];

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-jet-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">Premium <span className="text-accent">Apparel</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Engineered fabrics. Precision fit. Built for the demands of serious training.</p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-[#151515]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {apparel.map((item, index) => (
                            <motion.div 
                                key={item.name} 
                                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 overflow-hidden border border-[#2a2a2a]"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -12, scale: 1.03 }}
                            >
                                <div className="bg-linear-to-br from-accent/20 to-accent/10 p-12 text-center">
                                    <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-black mb-3 text-white group-hover:text-accent transition-colors">{item.name}</h2>
                                    <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.features.map((feature) => (
                                            <span key={feature} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-semibold">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#0d0d0d] text-white text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to <span className="text-accent">Upgrade</span>?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Contact us to learn more about our apparel line and find the perfect fit for your training.</p>
                </div>
            </section>
        </div>
    );
}

export default ApparelPage;