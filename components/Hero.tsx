'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Expert Solar Specialist</span>
                    </div>
                    
                    <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1] tracking-tighter text-slate-900">
                        THẮP SÁNG <br/>
                        <span className="text-primary">TƯƠNG LAI</span> <br/>
                        XANH
                    </h1>
                    
                    <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
                        Nguyễn Ninh — Chuyên gia năng lượng tái tạo với <span className="text-primary font-bold">6 năm kinh nghiệm</span> thực chiến. Chúng tôi không chỉ lắp đặt pin mặt trời, chúng tôi kiến tạo giải pháp năng lượng thông minh cho mọi gia đình Đà Nẵng.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-white px-10 py-4 rounded-xl font-headline font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-container transition-all"
                        >
                            Tư vấn miễn phí
                        </motion.button>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 px-10 py-4 rounded-xl font-headline font-bold text-sm uppercase tracking-widest text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all"
                        >
                            Xem Dự Án
                            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="lg:col-span-5 relative group"
                >
                    <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-50"></div>
                    <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl">
                        <img 
                            alt="Nguyễn Ninh Expert Portrait" 
                            className="w-full h-auto object-cover rounded-2xl transition-all duration-700 hover:scale-[1.02]" 
                            src="/assets/portrait.webp" 
                        />
                    </div>
                    
                    {/* Floating Info Badge */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl premium-shadow z-20 border border-slate-100 max-w-[200px]"
                    >
                        <span className="block text-4xl font-headline font-black text-primary">6+</span>
                        <span className="block font-label text-[10px] uppercase tracking-wider text-slate-500 font-bold">Năm Kinh Nghiệm Thực Chiến</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
