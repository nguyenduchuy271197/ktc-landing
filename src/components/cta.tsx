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
                Cơ hội để bắt đầu học ngay hôm nay
              </h3>
              <p className="mt-4 leading-relaxed text-gray-300">
                Nam erat risus, sodales sit amet lobortis ut, finibus eget
                metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales
                nisi id porta lacinia.
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
