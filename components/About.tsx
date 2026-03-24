'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sliders } from 'lucide-react';

const About = () => {
    const features = [
        {
            title: "Chất lượng Nhật Bản/Đức",
            description: "Sử dụng thiết bị từ các thương hiệu hàng đầu thế giới như Huawei, Growatt, Deye.",
            icon: <CheckCircle className="text-primary w-8 h-8" />
        },
        {
            title: "Hỗ trợ 24/7",
            description: "Hệ thống giám sát thông minh từ xa, cảnh báo lỗi tức thời và xử lý trong vòng 24h.",
            icon: <Sliders className="text-slate-600 w-8 h-8" />
        }
    ];

    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                                <img 
                                    alt="Solar installation" 
                                    className="w-full aspect-video object-cover" 
                                    src="/assets/mission.webp" 
                                />
                            </div>
                            <h2 className="font-headline text-3xl font-bold mb-6 text-slate-900">Sứ mệnh Năng lượng</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Tại miền Trung nắng gió, tiềm năng năng lượng mặt trời là vô tận. Tôi dành trọn tâm huyết để mang công nghệ <span className="text-primary font-semibold underline decoration-primary/30 underline-offset-4">Hybrid Solar</span> tối tân nhất về với từng mái nhà.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Mục tiêu của tôi không chỉ dừng lại ở việc tiết kiệm hóa đơn tiền điện, mà là tạo ra một hệ sinh thái năng lượng bền vững, an toàn và độc lập cho cộng đồng Đà Nẵng & miền Trung.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <span className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4 block">About Nguyễn Ninh</span>
                        <h3 className="font-headline text-5xl font-extrabold tracking-tighter leading-tight text-slate-900 mb-10">
                            ĐỒNG HÀNH TRỌN <br/>
                            VÒNG ĐỜI DỰ ÁN
                        </h3>
                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-6 items-start p-4 hover:bg-slate-50 rounded-2xl transition-all"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-bold text-xl text-slate-900 mb-2">{feature.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
