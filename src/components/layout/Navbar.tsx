'use client'

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export interface NavLink {
  href: string
  label: string
}

export interface NavbarConfig {
  logo: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  navLinks: NavLink[]
  theme?: {
    background?: string
    border?: string
    textColor?: string
    textHover?: string
    activeColor?: string
  }
}

const navbarConfig: NavbarConfig = {
  logo: {
    src: "/Acker-Performance-Banner-Dark.png",
    alt: "Acker Performance",
    width: 1920,
    height: 1080,
  },
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/apparel', label: 'Apparel' },
    { href: '/supplements', label: 'Supplements' },
    { href: '/tools', label: 'Tools' },
    { href: '/contact', label: 'Contact' },
  ],
  theme: {
    background: 'bg-primary/95',
    border: 'border-accent/20',
    textColor: 'text-white',
    textHover: 'text-accent',
    activeColor: 'text-accent',
  }
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const theme = {
    background: navbarConfig.theme?.background || 'bg-primary/95',
    border: navbarConfig.theme?.border || 'border-accent/20',
    textColor: navbarConfig.theme?.textColor || 'text-primary',
    textHover: navbarConfig.theme?.textHover || 'text-accent',
    activeColor: navbarConfig.theme?.activeColor || 'text-accent',
  }

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0
    },
    exit: { 
      opacity: 0, 
      x: '100%'
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0
    })
  }

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 backdrop-blur transition-all duration-300 ${theme.background} border-b ${theme.border} ${scrolled ? 'shadow-lg' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
            data-nav="home"
          >
            <Image 
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width || 1920}
              height={navbarConfig.logo.height || 1080}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-8 text-sm">
              {navbarConfig.navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`transition-colors duration-200 font-medium uppercase tracking-wide relative group ${
                    isActive ? theme.activeColor : `${theme.textColor} hover:${theme.textHover}`
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Mobile: Hamburger */}
          <button
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="sm:hidden relative z-50 flex h-10 w-10 items-center justify-center"
          >
            <span
              className={`block absolute h-0.5 w-6 ${theme.textColor} transform transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 ${theme.textColor} transform transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 ${theme.background} backdrop-blur-lg`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navbarConfig.navLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl font-bold tracking-tight transition-colors duration-200 ${
                        isActive ? theme.activeColor : theme.textColor
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}