import Link from "next/link";
import GradientWrapper from "./gradient-wrapper";
import { Button } from "./ui/button";
import Image from "next/image";
import pattern from "/public/patterns/line-pattern-5.jpg";
import VideoPlayer from "./video-player";

export default function Hero() {
  const features = [
    {
      name: "Được tài trợ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "6+ khoá học",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "1000+ học viên",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];
  return (
    <section className="relative">
      <Image
        src={pattern}
        className="absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/2 -z-10"
        alt=""
      />
      <GradientWrapper
        wrapperClassName="inset-0"
        className="container mx-auto text-gray-600"
      >
        <div className="max-w-6xl mx-auto space-y-5 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center text-sm text-gray-500 gap-x-2"
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <h1 className="mx-auto text-3xl sm:text-4xl font-bold text-gray-800 lg:text-5xl">
            TUYỂN SINH DỰ ÁN KẾT NỐI VIỆC LÀM
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
              K-TECH COLLEGE 2024
            </span>
          </h1>
          <p className="max-w-2xl mx-auto md:text-balance lg:text-lg">
            Tuyển sinh và đào tạo những tài năng CNTT chất lượng cao của Việt
            Nam đến làm việc tại các công ty Start-up tại Hàn Quốc
          </p>
          <div className="flex items-center justify-center text-sm font-medium gap-x-3">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link href="#">Đăng ký ngay</Link>
            </Button>
          </div>
        </div>
      </GradientWrapper>
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="mt-0">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
}
