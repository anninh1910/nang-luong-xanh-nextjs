'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-headline text-6xl font-black tracking-tighter mb-8 leading-tight text-slate-900">
                            BẮT ĐẦU HÀNH TRÌNH <span className="text-primary">XANH</span> CỦA BẠN
                        </h2>
                        <p className="text-slate-600 text-xl mb-12">
                            Để lại thông tin, tôi sẽ trực tiếp tư vấn giải pháp tối ưu nhất cho ngân sách và nhu cầu của bạn.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group cursor-pointer hover:bg-white p-4 rounded-full transition-all border border-transparent hover:border-slate-100 pr-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span className="font-headline font-bold text-2xl text-slate-900">0934 458 025</span>
                            </div>
                            
                            <div className="flex items-center gap-6 group cursor-pointer hover:bg-white p-4 rounded-full transition-all border border-transparent hover:border-slate-100 pr-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="font-headline font-bold text-2xl text-slate-900">ninh.solardn@gmail.com</span>
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="mt-12 p-6 bg-white border border-primary/20 rounded-2xl inline-block shadow-sm"
                            >
                                <span className="font-headline font-bold text-primary italic">"Đồng hành trọn vòng đời dự án"</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="font-label text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Họ và Tên</label>
                                <input 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                                    placeholder="Nguyễn Văn A" 
                                    type="text" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-label text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Số điện thoại</label>
                                <input 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                                    placeholder="0934 458 025" 
                                    type="tel" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-label text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Lời nhắn</label>
                                <textarea 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                                    placeholder="Tôi cần tư vấn hệ thống 5kWp..." 
                                    rows={4}
                                ></textarea>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary text-white font-headline font-bold py-5 rounded-xl uppercase tracking-widest hover:bg-primary-container active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
                            >
                                Gửi yêu cầu ngay
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
