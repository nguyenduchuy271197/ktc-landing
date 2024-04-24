import Contact from "@/components/contact";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import ImageGallery from "@/components/image-gallery";
import LogoGrid from "@/components/logo-grid";
import Reviews from "@/components/reviews";
import Benefits from "@/components/benefits";
import AboutUs from "@/components/about-us";

export default function Page() {
  return (
    <div>
      <Hero />
      <LogoGrid />
      <Benefits />
      <AboutUs />
      <ImageGallery />
      <Reviews />
      <Contact />
      <FAQ />
      <CTA />
    </div>
  );
}
