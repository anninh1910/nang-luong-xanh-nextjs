'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'trang chủ', href: '#home' },
        { label: 'giới thiệu', href: '#about' },
        { label: 'dịch vụ', href: '#services' },
        { label: 'Dự án', href: '#portfolio' },
        { label: 'liên hệ', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-8">
                <div className="text-xl font-black tracking-tighter text-primary flex items-center gap-3">
                    <img alt="Năng lượng xanh Đà Nẵng Logo" className="h-10 w-auto object-contain" src="/assets/logo.webp" />
                    <span className="font-headline uppercase text-sm tracking-widest hidden sm:block text-slate-900">Năng lượng xanh Đà Nẵng</span>
                </div>
                
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <a 
                            key={idx}
                            className={`font-headline font-bold tracking-tight uppercase text-xs transition-colors hover:text-primary ${idx === 0 ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-600'}`} 
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-6 py-2.5 rounded-full font-headline font-bold text-xs uppercase tracking-wider hover:bg-primary-container transition-all shadow-lg shadow-primary/20"
                >
                    Nhận tư vấn & Báo giá
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
