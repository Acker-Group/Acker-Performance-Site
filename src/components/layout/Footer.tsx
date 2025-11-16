import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from "react"

interface FooterLink {
  href: string
  label: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  href: string
  icon: ReactNode
  label: string
}

interface FooterConfig {
  logo: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  description: string
  contactInfo?: {
    email?: string
    phone?: string
    location?: string
  }
  sections: FooterSection[]
  socialLinks?: SocialLink[]
  legal?: FooterLink[]
  copyright: string
  theme?: {
    background?: string
    border?: string
    textColor?: string
    textHover?: string
    accentColor?: string
    mutedColor?: string
  }
}

const footerConfig: FooterConfig = {
  logo: {
    src: "/Acker-Performance-Banner-Light.png",
    alt: "Acker Performance",
    width: 1920,
    height: 1080,
  },
  description: "Premium apparel and supplements engineered for peak performance.",
  sections: [
    {
      title: "Quick Links",
      links: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/apparel', label: 'Apparel' },
        { href: '/supplements', label: 'Supplements' },
        { href: '/tools', label: 'Tools' },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ],
  socialLinks: [
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'TikTok', href: '#', icon: 'TT' },
    { name: 'YouTube', href: '#', icon: 'YT' },
  ].map(s => ({ href: s.href, icon: <span className="font-bold text-sm">{s.icon}</span>, label: s.name })),
  copyright: `© ${new Date().getFullYear()} Acker Performance. All Rights Reserved. Designed in South Africa.`,
  theme: {
    background: 'bg-primary',
    border: 'border-accent/20',
    textColor: 'text-primary',
    textHover: 'text-accent',
    accentColor: 'text-accent',
    mutedColor: 'opacity-70',
  }
}

const Footer: FC = () => {
  const theme = {
    background: footerConfig.theme?.background || 'bg-primary',
    border: footerConfig.theme?.border || 'border-accent/20',
    textColor: footerConfig.theme?.textColor || 'text-primary',
    textHover: footerConfig.theme?.textHover || 'text-accent',
    accentColor: footerConfig.theme?.accentColor || 'text-accent',
    mutedColor: footerConfig.theme?.mutedColor || 'opacity-70',
  }

  return (
    <footer className={`border-t ${theme.border} ${theme.background} mt-auto`}>
      <div className="container mx-auto w-full max-w-6xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity duration-200">
              <Image 
                src={footerConfig.logo.src}
                alt={footerConfig.logo.alt}
                width={footerConfig.logo.width || 1920}
                height={footerConfig.logo.height || 1080}
                className="h-10 w-auto"
              />
            </Link>
            <p className={`${theme.textColor} leading-relaxed max-w-md ${theme.mutedColor} mt-4`}>
              {footerConfig.description}
            </p>
            {footerConfig.contactInfo && (
              <div className={`mt-6 space-y-2 ${theme.textColor} text-sm ${theme.mutedColor}`}>
                {footerConfig.contactInfo.email && (
                  <p>
                    <strong className={theme.accentColor}>Email:</strong>{' '}
                    <a 
                      href={`mailto:${footerConfig.contactInfo.email}`} 
                      className={`hover:${theme.textHover} transition-colors duration-200`}
                    >
                      {footerConfig.contactInfo.email}
                    </a>
                  </p>
                )}
                {footerConfig.contactInfo.phone && (
                  <p>
                    <strong className={theme.accentColor}>Phone:</strong>{' '}
                    <a 
                      href={`tel:${footerConfig.contactInfo.phone}`}
                      className={`hover:${theme.textHover} transition-colors duration-200`}
                    >
                      {footerConfig.contactInfo.phone}
                    </a>
                  </p>
                )}
                {footerConfig.contactInfo.location && (
                  <p>
                    <strong className={theme.accentColor}>Location:</strong> {footerConfig.contactInfo.location}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Dynamic Sections */}
          {footerConfig.sections.map((section) => (
            <div key={section.title}>
              <h4 className={`text-xs font-semibold uppercase tracking-widest ${theme.accentColor} mb-4`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`${theme.textColor} hover:${theme.textHover} transition-colors duration-200 text-sm`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        {footerConfig.socialLinks && footerConfig.socialLinks.length > 0 && (
          <div className="mb-10">
            <div className="flex gap-4 justify-center md:justify-start">
              {footerConfig.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 rounded-full border ${theme.border} ${theme.textColor} hover:${theme.textHover} hover:border-current transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${theme.border}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-xs ${theme.textColor} ${theme.mutedColor}`}>
              {footerConfig.copyright}
            </p>
            {footerConfig.legal && footerConfig.legal.length > 0 && (
              <div className={`flex gap-6 text-xs ${theme.textColor} ${theme.mutedColor}`}>
                {footerConfig.legal.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className={`hover:${theme.textHover} hover:opacity-100 transition-colors duration-200`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;