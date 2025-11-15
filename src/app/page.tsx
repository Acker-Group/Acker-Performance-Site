'use client';

import './globals.css';
import Button from '../components/ui/Button';
import Link from 'next/link';
import { FC } from 'react';
import { motion } from 'framer-motion';

const Home: FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-jet-black text-white min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span 
                className="block"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Premium Apparel
              </motion.span>
              <motion.span 
                className="block"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                &amp; Supplements
              </motion.span>
              <motion.span 
                className="block text-accent"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Engineered for Peak Performance
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Train harder. Fuel smarter. Dominate every session.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Link href="/apparel">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg">Explore Apparel</Button>
                </motion.div>
              </Link>
              <Link href="/supplements">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline">Discover Supplements</Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-[#151515]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">Why Choose <span className="text-accent">Acker</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Performance-driven products designed for serious athletes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-10 rounded-2xl shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-t-4 border-accent"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
              <div className="relative">
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  💪
                </motion.div>
                <h3 className="text-3xl font-black mb-4 text-white group-hover:text-accent transition-colors duration-300">Premium Gymwear</h3>
                <p className="text-gray-400 leading-relaxed">High-performance apparel engineered with cutting-edge fabrics. Experience unmatched comfort, breathability, and durability that moves with you through every rep.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-10 rounded-2xl shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-t-4 border-accent"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
              <div className="relative">
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  ⚡
                </motion.div>
                <h3 className="text-3xl font-black mb-4 text-white group-hover:text-accent transition-colors duration-300">Elite Supplements</h3>
                <p className="text-gray-400 leading-relaxed">Scientifically formulated with clinically-tested ingredients. Clean, transparent nutrition to fuel your workouts and accelerate recovery for maximum gains.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0d0d0d] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Athletes' },
              { value: '100%', label: 'Quality' },
              { value: '24/7', label: 'Support' },
              { value: '5★', label: 'Rated' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <motion.div 
                  className="text-5xl md:text-6xl font-black text-accent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-accent text-white relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join The <span className="text-white drop-shadow-2xl">Elite</span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get exclusive access to new releases, training tips, and special offers. Join <span className="font-bold">10,000+</span> athletes already in the loop.
            </motion.p>
            
            <motion.form 
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto items-stretch"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-8 py-5 rounded-xl bg-white text-black text-lg font-medium placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-white/40 shadow-2xl transition-all h-[60px]" 
              />
              <motion.button
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                type="button"
                className="px-8 py-5 h-[60px] bg-jet-black text-white font-bold rounded-xl shadow-2xl hover:bg-[#1a1a1a] transition-all duration-300"
              >
                Subscribe Now →
              </motion.button>
            </motion.form>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm md:text-base opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Exclusive Drops</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Training Tips</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Special Offers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">No Spam</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;