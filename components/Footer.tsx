'use client';

import React from 'react';
import { Share2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 w-full pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-8">
                    <div className="text-2xl font-black text-primary font-headline uppercase flex flex-col gap-4">
                        <img alt="Năng lượng xanh Đà Nẵng Logo" className="h-16 w-auto object-contain" src="/assets/logo.webp" />
                        <span className="text-white text-lg">Năng lượng xanh Đà Nẵng</span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-slate-400">
                        Giải pháp năng lượng sạch hàng đầu miền Trung. Chuyên nghiệp — Uy tín — Tận tâm.
                    </p>
                </div>
                
                <div className="flex flex-col gap-6">
                    <h4 className="font-headline font-bold text-white uppercase tracking-widest text-xs mb-2">Điều khoản</h4>
                    <a className="font-body text-sm text-slate-400 hover:text-primary transition-all" href="#">Chính sách bảo mật</a>
                    <a className="font-body text-sm text-slate-400 hover:text-primary transition-all" href="#">Điều khoản dịch vụ</a>
                    <a className="font-body text-sm text-slate-400 hover:text-primary transition-all" href="#">Thông số kỹ thuật</a>
                </div>
                
                <div className="flex flex-col gap-6">
                    <h4 className="font-headline font-bold text-white uppercase tracking-widest text-xs mb-2">Văn phòng</h4>
                    <p className="font-body text-sm text-slate-400 leading-relaxed">124 Hồ Quý Ly, Phường Thanh Khê, TP. Đà Nẵng</p>
                    <div className="flex gap-4 mt-4">
                        <a className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg" href="#">
                            <Share2 className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-body text-sm text-slate-500">© 2024 Năng Lượng Xanh Đà Nẵng. 124 Hồ Quý Ly, Thanh Khê, Đà Nẵng.</p>
                <div className="flex gap-6">
                    <span className="text-primary font-bold text-sm">Design by Nguyễn Ninh</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
