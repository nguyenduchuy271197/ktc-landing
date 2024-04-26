import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import pattern from "/public/patterns/cta-pattern.jpg";

export default function CTA() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="relative px-4 py-12 overflow-hidden md:px-8 rounded-3xl">
          <Image
            src={pattern}
            className="absolute inset-0 object-cover"
            alt="Background Pattern"
            fill
          />
          <div className="relative max-w-2xl mx-auto text-center">
            <div className="py-4">
              <h3 className="text-3xl font-semibold text-gray-200 md:text-4xl">
                Cơ hội làm việc tại Hàn Quốc ngay trong tầm tay bạn
              </h3>
              <p className="mt-4 leading-relaxed text-gray-300">
                Tham gia ngay dự án K-Tech College cùng MSS và LIKELION để có cơ
                hội đến và làm việc tại Hàn Quốc với chi phí 0 đồng.
              </p>
            </div>
            <div className="items-center justify-center gap-3 mt-4 sm:flex">
              <Button asChild>
                <Link href="">Đăng ký ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
