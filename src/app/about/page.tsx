'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const AboutPage: FC = () => {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-jet-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">Our <span className="text-accent">Story</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Built by athletes, for athletes. Uncompromising quality, relentless performance.</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-[#151515]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div 
                            className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-10 rounded-2xl shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-l-4 border-accent"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.03, x: 10 }}
                        >
                            <motion.div 
                                className="text-accent text-5xl mb-6"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                🎯
                            </motion.div>
                            <h2 className="text-4xl font-black mb-6 text-white group-hover:text-accent transition-colors">Our Mission</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To empower athletes with premium gear and effective nutrition so every training session counts. We bridge the gap between style and function, delivering uncompromising quality that supports real gains.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-10 rounded-2xl shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-l-4 border-accent"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.03, x: 10 }}
                        >
                            <motion.div 
                                className="text-accent text-5xl mb-6"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🔥
                            </motion.div>
                            <h2 className="text-4xl font-black mb-6 text-white group-hover:text-accent transition-colors">Our Vision</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To cultivate a fitter, stronger community across South Africa and beyond. We envision a world where every athlete has access to performance-first apparel and supplements they can trust.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-5xl font-black text-center mb-16 text-white">Core <span className="text-accent">Values</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { icon: '⚡', title: 'Performance-First', desc: 'Effectiveness, durability, and results in every product.' },
                            { icon: '✅', title: 'Integrity', desc: 'Clean formulations, honest sourcing, transparent labeling.' },
                            { icon: '🇿🇦', title: 'Local Pride', desc: 'Designed in South Africa, built for serious athletes.' },
                            { icon: '🤝', title: 'Community-Driven', desc: 'Built by and for those who demand excellence.' },
                        ].map((value, index) => (
                            <motion.div 
                                key={index} 
                                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 text-center border border-[#2a2a2a]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{value.title}</h3>
                                <p className="text-gray-400">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Story */}
            <section className="py-24 bg-jet-black text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-black mb-12 text-center">The <span className="text-accent">Beginning</span></h2>
                        <div className="bg-white/5 backdrop-blur-lg p-10 md:p-16 rounded-2xl border border-white/10">
                            <p className="text-xl leading-relaxed text-gray-300 mb-6">
                                Acker Performance was founded by a group of athletes frustrated with the compromise between high-performance gear and accessible, clean supplements. We saw a gap in the market for a brand that refused to cut corners—a brand that was as serious about results as we were.
                            </p>
                            <p className="text-xl leading-relaxed text-gray-300">
                                From humble beginnings prototyping fabrics in a small Johannesburg studio to partnering with leading nutritionists for our supplement line, every step of our journey has been guided by one principle: <span className="text-accent font-bold">if it doesn't improve performance, it doesn't make the cut.</span> Our roots are proudly South African, but our standards are global. We are here to equip you for your peak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;