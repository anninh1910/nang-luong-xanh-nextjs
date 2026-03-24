'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, FileText } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Tư vấn giải pháp Hybrid",
            description: "Phân tích nhu cầu điện năng thực tế để thiết kế hệ thống lưu trữ (Hybrid) tối ưu, đảm bảo nguồn điện không bao giờ gián đoạn.",
            icon: <FileText className="w-10 h-10" />
        },
        {
            title: "Thiết kế hệ thống tối ưu",
            description: "Sử dụng phần mềm chuyên dụng mô phỏng hiệu suất 3D, tối ưu hóa góc nghiêng và hướng đón nắng cho từng mái nhà.",
            icon: <Hammer className="w-10 h-10" />
        },
        {
            title: "Thi công & Bảo hành",
            description: "Quy trình lắp đặt chuẩn kỹ thuật, bảo trì định kỳ 6 tháng/lần và cam kết hiệu suất panel lên đến 25 năm.",
            icon: <Shield className="w-10 h-10" />
        }
    ];

    return (
        <section id="services" className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4 block"
                    >
                        Our Solutions
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-headline text-5xl font-black tracking-tighter text-slate-900"
                    >
                        DỊCH VỤ CHUYÊN NGHIỆP
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="service-card group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="service-icon w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary transition-colors">
                                <div className="text-primary group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
