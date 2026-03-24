import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Năng Lượng Xanh Đà Nẵng | Chuyên gia lắp đặt hệ thống điện mặt trời",
  description:
    "Nguyễn Ninh — Chuyên gia năng lượng tái tạo với 6 năm kinh nghiệm. Tư vấn, thiết kế và thi công hệ thống điện mặt trời Hybrid tại Đà Nẵng và miền Trung. Liên hệ: 0934 458 025",
  keywords: "điện mặt trời, năng lượng xanh, Đà Nẵng, hybrid solar, lắp đặt pin mặt trời, Nguyễn Ninh",
  authors: [{ name: "Nguyễn Ninh" }],
  openGraph: {
    title: "Năng Lượng Xanh Đà Nẵng",
    description: "Chuyên gia năng lượng tái tạo với 6 năm kinh nghiệm thực chiến",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
