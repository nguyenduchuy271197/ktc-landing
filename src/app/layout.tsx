import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import Banner from "@/components/banner";
import { GoogleAnalytics } from "@next/third-parties/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title:
    "Dự Án Đào Tạo Miễn Phí Và Giới Thiệu Việc Làm IT Tại Hàn Quốc | K-Tech College",
  description:
    "Là dự án được tài trợ 100% bởi Bộ Doanh nghiệp vừa và nhỏ và khởi nghiệp Hàn Quốc. Người đăng ký tham gia sẽ được đào tạo miễn phí kiến thức lập trình Web/Back-end, và được giới thiệu việc làm đến các Doanh nghiệp tại Hàn Quốc. Nếu đạt kết quả đầu ra đúng yêu cầu tuyển dụng, người học sẽ được hỗ trợ chuẩn bị hồ sơ xét cấp visa và đào tạo bổ sung kỹ năng mềm như tiếng Hàn Quốc, văn hóa doanh nghiệp, kỹ năng phỏng vấn và kiến thức kinh doanh cơ bản. Chương trình nhằm đảm bảo cung cấp cho người học đây đủ các kiến thức và kỹ năng để có thể làm việc và hòa nhập tốt tại các doanh nghiệp ở Hàn Quốc. ",
  keywords: [
    "LIKELION",
    "Hàn Quốc",
    "việc làm",
    "visa E-7",
    "đào tạo lập trình miễn phí",
    "đào tạo IT Hàn Quốc",
    "chương trình đào tạo lập trình Hàn Quốc",
    "việc làm IT Hàn Quốc",
    "dự án đào tạo lập trình miễn phí",
    "đào tạo lập trình web/back-end miễn phí",
    "giới thiệu việc làm IT Hàn Quốc",
    "đào tạo kỹ năng mềm Hàn Quốc",
    "học lập trình đi làm việc Hàn Quốc",
    "đào tạo lập trình nhận visa Hàn Quốc",
    "đào tạo kỹ năng làm việc Hàn Quốc",
    "khóa học lập trình hướng nghiệp Hàn Quốc",
    "chương trình đào tạo nhân lực IT Hàn Quốc",
    "đào tạo lập trình được tài trợ Hàn Quốc",
    "dự án đào tạo nhân lực IT từ bộ doanh nghiệp Hàn Quốc",
  ],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "education",
  referrer: "origin-when-cross-origin",
  other: {
    "google-site-verification": "To9bBudd-R7vTgpZ5KCCm4DUwwuMpfI44qhAU2EwfqE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="To9bBudd-R7vTgpZ5KCCm4DUwwuMpfI44qhAU2EwfqE"
        />
      </head>
      <body className={cn("antialiased ", fontSans.className)}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-029L97QDMN" />
      </body>
    </html>
  );
}
