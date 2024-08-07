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
import Register from "@/components/register";
import Advantages from "@/components/advantages";
import Target from "@/components/target";

export default function Page() {
  return (
    <div>
      <Hero />
      {/* <LogoGrid /> */}
      <AboutUs />
      <Benefits />
      <Target />
      <Advantages />
      <Slogan />
      <Programs />
      <Process />
      <ImageGallery />
      <Register />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  );
}
