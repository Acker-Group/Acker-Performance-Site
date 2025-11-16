'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const SupplementsPage: FC = () => {
    const supplements = [
        { 
            name: "Whey Protein", 
            description: "Fast-absorbing whey concentrate/isolate blend for post-workout recovery and lean muscle support.", 
            icon: "🥛",
            benefits: ["25g Protein", "Fast Absorption", "Lean Muscle"],
            timing: "Post-Workout"
        },
        { 
            name: "Creatine Monohydrate", 
            description: "Pure, micronized creatine monohydrate for proven gains in strength, power output, and performance.", 
            icon: "💪",
            benefits: ["5g Per Serving", "Strength Gains", "Power Output"],
            timing: "Daily"
        },
        { 
            name: "Pre-Workout", 
            description: "Focus-oriented formula with clinically dosed caffeine, beta-alanine, and citrulline for sustained energy.", 
            icon: "⚡",
            benefits: ["Clean Energy", "No Crash", "Mental Focus"],
            timing: "Pre-Workout"
        },
        { 
            name: "Recovery Formula", 
            description: "Advanced post-workout formula with BCAAs, glutamine, and electrolytes to accelerate muscle repair.", 
            icon: "🔄",
            benefits: ["Reduce Soreness", "Fast Recovery", "Hydration"],
            timing: "Post-Workout"
        }
    ];

    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-jet-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">Elite <span className="text-accent">Supplements</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Science-backed formulations. Clinically dosed. Zero compromise on quality.</p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {supplements.map((item, index) => (
                            <motion.div 
                                key={item.name} 
                                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 overflow-hidden border-t-4 border-accent"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h2 className="text-3xl font-black text-white group-hover:text-accent transition-colors">{item.name}</h2>
                                                    <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-bold uppercase">{item.timing}</span>
                                                </div>
                                                <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {item.benefits.map((benefit) => (
                                            <span key={benefit} className="text-sm bg-card text-gray-300 px-4 py-2 rounded-lg font-semibold">
                                                ✓ {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">Why Trust <span className="text-accent">Acker</span> Supplements?</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: "🔬", title: "Lab-Tested", desc: "Every batch tested for purity and potency" },
                            { icon: "🌿", title: "Clean Ingredients", desc: "No fillers, no artificial colors, no BS" },
                            { icon: "📈", title: "Science-Backed", desc: "Clinically effective doses in every serving" },
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 border border-secondary"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SupplementsPage;