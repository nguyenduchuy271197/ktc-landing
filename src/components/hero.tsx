"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "/public/MSSxKOSMExLIKELION Black BG.svg";
import bg1 from "/public/hero-bg-1.png";
import bg2 from "/public/hero-bg-2.png";
import { site } from "@/config/site";
import AnimationLayout from "./shared/animation-layout";

export default function Hero() {
  return (
    <section className="relative bg-[#101416] text-white overflow-hidden">
      <div className="relative py-14 md:py-28 container h-screen md:h-[85vh]">
        <AnimationLayout
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0",
          }}
        >
          <div className="relative">
            <div className="relative max-w-6xl mx-auto space-y-5 text-center z-30">
              <div className="mb-4 sm:mb-8">
                <Image src={logo} alt="" className="mx-auto h-6 sm:h-7" />
              </div>
              <h1 className="mx-auto text-2xl sm:text-4xl font-bold lg:text-5xl max-w-sm sm:max-w-md md:max-w-none">
                TUYỂN SINH DỰ ÁN KẾT NỐI VIỆC LÀM
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 block mt-2"
                  style={{
                    WebkitBackgroundClip: "text",
                  }}
                >
                  K-TECH COLLEGE 2024
                </span>
              </h1>
              <p className="max-w-2xl mx-auto md:text-balance lg:text-lg">
                Tuyển sinh và đào tạo những tài năng CNTT chất lượng cao của
                Việt Nam đến làm việc tại các công ty Start-up tại Hàn Quốc
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
                    Tải Brochure Dự án
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute px-8 z-20 pb-40 -bottom-[110%] -right-28 opacity-40 lg:opacity-100">
              <Image src={bg1} alt="KTC - Road to Korea" width={500} />
            </div>
            <div className="absolute px-8 z-20 pb-40 -bottom-[130%] md:-bottom-[80%] -left-8 opacity-40 lg:opacity-100">
              <Image src={bg2} alt="KTC - Road to Korea" width={300} />
            </div>
          </div>
        </AnimationLayout>
      </div>
    </section>
  );
}
