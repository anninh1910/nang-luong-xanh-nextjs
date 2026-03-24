'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: "Hệ thống 2.45 kWp",
            location: "Đà Nẵng",
            image: "/assets/project1.webp",
            translateY: 0
        },
        {
            title: "Hệ thống 7.4 kWp",
            location: "Phú Yên",
            image: "/assets/project2.webp",
            translateY: "lg:translate-y-8"
        },
        {
            title: "Hệ thống 10.2 kWp",
            location: "Đà Nẵng",
            image: "/assets/project3.webp",
            translateY: 0
        }
    ];

    return (
        <section id="portfolio" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4 block"
                        >
                            Recent Works
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-headline text-5xl font-black tracking-tighter text-slate-900"
                        >
                            DỰ ÁN TIÊU BIỂU
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 max-w-sm"
                    >
                        Hơn 200+ hệ thống đã được lắp đặt thành công trên khắp dải đất miền Trung.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg ${project.translateY}`}
                        >
                            <img 
                                alt={project.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                src={project.image} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full group-hover:bg-slate-900/10 transition-all">
                                <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
                                    {project.location}
                                </span>
                                <h4 className="font-headline text-2xl font-bold text-white transition-all transform group-hover:translate-x-2">
                                    {project.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
