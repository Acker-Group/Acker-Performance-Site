import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'TikTok', href: '#', icon: 'TT' },
    { name: 'YouTube', href: '#', icon: 'YT' },
  ];

  return (
    <footer className="bg-jet-black text-white relative overflow-hidden">
      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-3">
              <span className="text-white">ACKER</span>
              <span className="text-accent"> PERFORMANCE</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium apparel and supplements engineered for peak performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-accent">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link>
              <Link href="/apparel" className="text-gray-400 hover:text-white transition-colors duration-300">Apparel</Link>
              <Link href="/supplements" className="text-gray-400 hover:text-white transition-colors duration-300">Supplements</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4 text-accent">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110 font-bold text-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Acker Performance. All Rights Reserved. Designed in South Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;