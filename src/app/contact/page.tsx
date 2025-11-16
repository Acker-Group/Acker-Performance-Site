'use client'

import { Button } from '../../components/ui/Button'
import { FC } from 'react'
import { motion } from 'framer-motion'

const ContactPage: FC = () => {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-jet-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">Get In <span className="text-accent">Touch</span></h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Have questions? We&apos;re here to help. Reach out anytime.</p>
                </div>
            </section>

            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div 
                            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-10 rounded-2xl shadow-2xl shadow-black/50 border border-secondary"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-black mb-8 text-white">Send Us a <span className="text-accent">Message</span></h2>
                            <form action="https://formspree.io/f/xjkjoyej" method="POST" className="space-y-6">
                                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required
                                        className="w-full p-4 border-2 border-secondary bg-primary text-white rounded-lg focus:border-accent focus:outline-none transition-colors placeholder:text-gray-500" 
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        className="w-full p-4 border-2 border-secondary bg-primary text-white rounded-lg focus:border-accent focus:outline-none transition-colors placeholder:text-gray-500" 
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows={6} 
                                        required
                                        className="w-full p-4 border-2 border-secondary bg-primary text-white rounded-lg focus:border-accent focus:outline-none transition-colors resize-none placeholder:text-gray-500" 
                                        placeholder="Tell us how we can help..."
                                    ></textarea>
                                </div>
                                <Button size="lg" className="w-full">Send Message</Button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div 
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <motion.div 
                                className="bg-linear-to-br from-accent to-red-700 text-white p-10 rounded-2xl shadow-xl"
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <h3 className="text-2xl font-black mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-3xl">📧</div>
                                        <div>
                                            <div className="font-bold mb-1">Email</div>
                                            <a href="mailto:hello@ackerperformance.co.za" className="text-white/90 hover:text-white transition-colors">
                                                hello@ackerperformance.co.za
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-3xl">🕒</div>
                                        <div>
                                            <div className="font-bold mb-1">Response Time</div>
                                            <div className="text-white/90">Within 24-48 hours</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-10 rounded-2xl border border-secondary"
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <h3 className="text-2xl font-black mb-6 text-white">Follow Our <span className="text-accent">Journey</span></h3>
                                <div className="flex gap-4">
                                    {[
                                        { name: 'Instagram', icon: 'IG' },
                                        { name: 'TikTok', icon: 'TT' },
                                        { name: 'YouTube', icon: 'YT' },
                                    ].map((social) => (
                                        <a
                                            key={social.name}
                                            href="#"
                                            className="flex-1 bg-primary border-2 border-secondary hover:border-accent text-white hover:text-accent rounded-xl p-6 text-center font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;