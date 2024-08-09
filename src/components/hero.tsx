"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "/public/MSSxKOSMExLIKELION Black BG.svg";
import bg1 from "/public/hero-bg-1.png";
import bg2 from "/public/hero-bg-2.png";
import { site } from "@/config/site";
import arrow from "/public/Arrow.svg";
import free from "/public/Free.png";
import AnimationLayout from "./shared/animation-layout";

export default function Hero() {
  return (
    <section className="relative bg-[#101416] text-white overflow-hidden">
      <div className="relative py-14 md:py-28 container md:h-[85dvh]">
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
              <h1 className="mx-auto text-2xl sm:text-4xl font-bold lg:text-5xl max-w-sm sm:max-w-md md:max-w-none uppercase">
                <span className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="w-full lg:w-auto">
                    Tuyển dụng lập trình viên có kinh nghiệm
                  </span>
                </span>

                <span className="flex items-center gap-2 justify-center flex-wrap bg-clip-text text-orange-500 mt-2">
                  <span className="w-full lg:w-auto">
                    Lấy visa làm việc tại{" "}
                  </span>
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="h-10 w-auto md:h-16"
                  />{" "}
                  Hàn Quốc
                </span>
              </h1>
              <p className="max-w-2xl mx-auto md:text-balance lg:text-lg">
                Tuyển dụng và đào tạo những tài năng CNTT chất lượng cao của
                Việt Nam Việt Nam đến làm việc tại các công ty công nghệ tại Hàn
                Quốc
              </p>

              <p className="text-orange-500 font-semibold">MIỄN PHÍ THAM GIA</p>

              <span>Hạn cuối ứng tuyển: Thứ Bảy - 31/08/2024</span>
              <div className="flex flex-col md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4">
                <Button size="lg" className="w-full md:w-auto" asChild>
                  <Link href={site.registrationUrl} target="_blank">
                    Ứng tuyển ngay
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute px-8 z-20 pb-40 -bottom-[30%] lg:-bottom-[80%] -right-28 opacity-20 lg:opacity-100">
              <Image
                src={bg1}
                alt="KTC - Road to Korea"
                className="w-[300px] md:w-[400px]"
              />
            </div>
            <div className="absolute px-8 z-20 pb-40 -bottom-[20%] lg:-bottom-[60%] -left-8 opacity-20 lg:opacity-100">
              <Image
                src={bg2}
                alt="KTC - Road to Korea"
                className="w-[200px] md:w-[250px]"
              />
            </div>
          </div>
        </AnimationLayout>
      </div>
    </section>
  );
}
