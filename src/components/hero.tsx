import Link from "next/link";
import GradientWrapper from "./gradient-wrapper";
import { Button } from "./ui/button";
import Image from "next/image";
import pattern from "/public/patterns/hero-line-pattern.svg";
import VideoPlayer from "./video-player";
import logo from "/public/MSS x LIKELION.svg";
import hackathon from "/public/hackathon.jpg";
import { site } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative mb-14">
      <Image
        src={pattern}
        className="absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/2 -z-10 min-w-[1800px] hidden md:block"
        alt=""
      />
      <GradientWrapper
        wrapperClassName="inset-0"
        className="container mx-auto text-gray-600"
      >
        <div className="max-w-6xl mx-auto space-y-5 text-center">
          <div className="mb-8">
            <Image src={logo} alt="" height={35} className="mx-auto" />
          </div>
          <h1 className="mx-auto text-2xl sm:text-4xl font-bold text-gray-800 lg:text-5xl">
            TUYỂN SINH DỰ ÁN KẾT NỐI VIỆC LÀM
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50] block mt-2"
              style={{
                WebkitBackgroundClip: "text",
              }}
            >
              K-TECH COLLEGE 2024
            </span>
          </h1>
          <p className="max-w-2xl mx-auto md:text-balance lg:text-lg">
            Tuyển sinh và đào tạo những tài năng CNTT chất lượng cao của Việt
            Nam đến làm việc tại các công ty Start-up tại Hàn Quốc
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4">
            <Button size="lg" className="w-full md:w-auto" asChild>
              <Link href={site.registrationUrl} target="_blank">
                Đăng ký ngay
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-auto"
              asChild
            >
              <Link href={site.informationUrl} target="_blank">
                Xem chi tiết
              </Link>
            </Button>
          </div>
        </div>
      </GradientWrapper>
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="mt-0 border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
          <div className="overflow-hidden rounded-2xl bg-gray-100 md:p-4">
            {/* <VideoPlayer /> */}
            <Image
              src={hackathon}
              alt="LIKELION Hackathon"
              className="w-full rounded-md"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
