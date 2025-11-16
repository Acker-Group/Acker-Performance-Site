"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const features = [
    {
      title: 'Premium Gymwear',
      description: 'High-performance apparel engineered with cutting-edge fabrics for unmatched comfort and durability.',
      icon: '💪'
    },
    {
      title: 'Elite Supplements',
      description: 'Scientifically formulated with clinically-tested ingredients for maximum performance and recovery.',
      icon: '⚡'
    },
    {
      title: 'Athlete Tested',
      description: 'Every product rigorously tested by professional athletes to ensure peak performance standards.',
      icon: '🏆'
    }
  ]

  const products = [
    {
      name: 'Performance Apparel',
      description: 'Premium gymwear designed with advanced moisture-wicking fabrics and ergonomic fits.',
      icon: '👕',
      link: '/apparel'
    },
    {
      name: 'Sports Supplements',
      description: 'Clean, transparent nutrition to fuel workouts and accelerate recovery for maximum gains.',
      icon: '🥤',
      link: '/supplements'
    }
  ]

  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative bg-primary text-white min-h-screen flex items-center justify-center overflow-hidden">
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
              <span className="block text-accent">Acker Performance</span>
            </motion.h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-primary max-w-3xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium apparel and supplements engineered for peak performance. Train harder. Fuel smarter.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/apparel">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:opacity-90 transition shadow-lg uppercase tracking-wide"
                >
                  Explore Apparel
                </motion.button>
              </Link>
              <Link href="/supplements">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-accent text-accent font-semibold rounded-lg transition uppercase tracking-wide"
                >
                  Discover Supplements
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">Why <span className="text-accent">Acker Performance</span></h2>
            <p className="text-xl text-primary max-w-2xl mx-auto">Performance-driven products for serious athletes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-card p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-t-4 border-accent"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-3xl font-black mb-4 text-white group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                  <p className="text-primary leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">Our <span className="text-accent">Products</span></h2>
            <p className="text-xl text-primary max-w-2xl mx-auto">Premium gear for peak performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group relative bg-secondary p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 border-t-4 border-accent"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
                <div className="relative">
                  <div className="text-5xl mb-6">{product.icon}</div>
                  <h3 className="text-3xl font-black mb-4 text-white group-hover:text-accent transition-colors duration-300">{product.name}</h3>
                  <p className="text-primary leading-relaxed mb-4">{product.description}</p>
                  <Link href={product.link} className="block text-accent hover:text-white transition font-semibold">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-accent text-white relative overflow-hidden">
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
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Join The Elite</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Get access to premium gear and supplements designed for peak athletic performance.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="inline-block px-10 py-5 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-all duration-300 shadow-2xl uppercase tracking-wide"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}