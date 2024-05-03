import Contact from "@/components/contact";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import ImageGallery from "@/components/image-gallery";
import LogoGrid from "@/components/logo-grid";
import Benefits from "@/components/benefits";
import AboutUs from "@/components/about-us";
import { InfiniteMovingCards } from "@/components/shared/infinite-moving-cards";
import Process from "@/components/process";
import Banner from "@/components/banner";
import Programs from "@/components/programs";
import Slogan from "@/components/slogan";

export default function Page() {
  return (
    <div>
      <Hero />
      {/* <LogoGrid /> */}
      <Benefits />
      <Slogan />
      <AboutUs />
      <Programs />
      <Process />
      <ImageGallery />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  );
}
