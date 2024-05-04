import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import pattern from "/public/patterns/cta-pattern.jpg";
import leftLine from "/public/patterns/cta-pattern-left.svg";
import rightLine from "/public/patterns/cta-pattern-right.svg";
import { site } from "@/config/site";
import slogan from "/public/slogan.png";
import AnimationLayout from "./shared/animation-layout";

export default function Slogan() {
  return (
    <section className="lg:py-12">
      <div className="container">
        <div className="relative px-6 sm:px-8 py-8 sm:py-12 overflow-hidden md:px-8 rounded-3xl bg-[#101416]">
          <div className="relative sm:max-w-2xl mx-auto text-center max-w-lg">
            <Image src={slogan} alt="Slogan" />
          </div>
        </div>
      </div>
    </section>
  );
}
