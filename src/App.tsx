/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Menu, X, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDwOzPIr0MuKBiSuDJCBBXdZfEZULsF8aLGfRQ9ojqnptbo887a65DXj5ODuIgKftT0wmqO4ukLuSDD5lSrZWXstnnqwww7YMgrNXZBJbvIarsnHggu7ZykhhxTI8AiW0mUOVOk_CVZGWRwSuFpi-0e1YL8lf5bGBjl1iuhfvpxL4y7mPywVnMrxucF1bqn5aFcB_m4vGYx5djoJYWaZxZafcbc_zXKgrZ9E36NV1t4sZ1jEqo3FmxoaSRU6dDWaKMRZMWd3qtKE_s";
const ABOUT_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuA4IobgLb4eHUx9CWpBwWk1cAx7XNYXKx2pq9j2F3PaWYljSJss0DaxFDIMUIFinf5pae5Qb4vfn_fOOIGPf9Edy9vvj3pUABm5E6EYeITGBwsEdretBs6b-VJ_JKWDMV9_drUobAgo-ZYh8DKL-Lcg2TepVaFs0lZkXE84veZin17gTwKR8nKJ7lToqqRtC63aoJaTnpc9iUwztxyJqO_uLRA0VF8kKnYcs1Nhw1CCQKmuf4W10n1ij4blGkvJDawtaOA6QlBGm-w";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Top Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl font-display font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            Azure Retreat
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-sm font-display font-semibold tracking-wide transition-colors hover:text-secondary ${
                  isScrolled ? 'text-on-surface-variant' : 'text-white/90'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-display font-bold transition-all hover:bg-primary-container"
            >
              Book Now
            </motion.button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-primary' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface-variant text-lg font-display font-semibold"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-white w-full py-3 rounded-lg font-bold">
              Book Now
            </button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Azure Resort Hero" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            Experience Luxury <br />& Serenity
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover a sanctuary of peace where modern business efficiency meets high-end hospitality in a stunning natural setting.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-white px-8 py-4 rounded-xl text-sm font-display font-bold tracking-wider hover:bg-secondary/90 transition-all shadow-lg"
          >
            Explore Our Resort
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
              A Peaceful Escape <br /><span className="text-secondary/80 italic font-light">Redefined</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                At Azure Retreat, we believe in the luxury of space and the power of tranquility. Our resort is designed to seamlessly blend into its natural surroundings, offering a quiet refuge for both relaxation and focused productivity.
              </p>
              <p>
                Experience our signature 'Apple-style Minimalism'—where every detail is curated for comfort without unnecessary clutter. From our spacious suites to our attentive service, we provide an environment that fosters peace and rejuvenation.
              </p>
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="mt-10 flex items-center text-secondary font-display font-bold text-sm tracking-widest uppercase group"
            >
              Learn More 
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={ABOUT_IMAGE} 
                alt="Azure Resort Interior" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Featured Rooms / Teaser Section (Bonus Layout rhythm) */}
      <section id="rooms" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-secondary font-display font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Our Collections</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Refined Accommodations</h2>
            </div>
            <button className="text-on-surface-variant font-display font-semibold border-b border-outline-variant hover:border-primary transition-colors pb-1">
              View all rooms
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ocean Suite", price: "$450", size: "65m²", img: "https://picsum.photos/seed/room1/800/1000" },
              { name: "Garden Villa", price: "$680", size: "120m²", img: "https://picsum.photos/seed/room2/800/1000" },
              { name: "Sky Penthouse", price: "$1,200", size: "240m²", img: "https://picsum.photos/seed/room3/800/1000" },
            ].map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6">
                  <img 
                    src={room.img} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary mb-1">{room.name}</h3>
                    <p className="text-on-surface-variant/60 text-sm">{room.size}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-display font-bold text-primary">{room.price}</p>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">per night</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-surface-container-high py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-display font-bold tracking-tight text-primary mb-6">
                Azure Retreat
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Providing standard-setting hospitality and a tranquil environment for global citizens.
              </p>
              <div className="flex space-x-4">
                <Facebook size={20} className="text-on-surface-variant hover:text-secondary cursor-pointer transition-colors" />
                <Twitter size={20} className="text-on-surface-variant hover:text-secondary cursor-pointer transition-colors" />
                <Instagram size={20} className="text-on-surface-variant hover:text-secondary cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-primary mb-6">Discovery</h4>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li><a href="#" className="hover:text-secondary transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Dining</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Spa & Wellness</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-primary mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Booking Policy</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Cookie Settings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-primary mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-on-surface-variant">
                <li className="flex items-center"><MapPin size={16} className="mr-3 text-secondary" /> 123 Azure Coast, Maldives</li>
                <li className="flex items-center"><Phone size={16} className="mr-3 text-secondary" /> +1 (555) 000-AZURE</li>
                <li className="flex items-center"><Mail size={16} className="mr-3 text-secondary" /> hello@azureretreat.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-surface-container-high flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-on-surface-variant/60">
              © 2024 Azure Retreat & Spa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-on-surface-variant/60 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Guest Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Sustainability</a>
              <a href="#" className="hover:text-primary transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
