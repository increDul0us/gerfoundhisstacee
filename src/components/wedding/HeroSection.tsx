import { ChevronDown, Heart } from "lucide-react";
import { COUPLE_NAME_1, COUPLE_NAME_2, WEDDING_DATE_LABEL, WEDDING_LOCATION_LABEL } from "../../lib/wedding";
import heroImg from "../../assets/gallery/photo-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Stacee-Ann and Gerard"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Glass card content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/20 bg-white/15 px-5 py-8 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:px-10 sm:py-14 md:px-14 md:py-16">
          <div className="text-center">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-200 sm:mb-5 sm:text-sm sm:tracking-[0.25em]">
              We're getting married!
            </p>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
              <span className="block">{COUPLE_NAME_1}</span>
              <span className="my-2 flex items-center justify-center gap-2 sm:my-3 sm:gap-3">
                <span className="h-px w-8 bg-gold-300 sm:w-16" />
                <Heart className="h-4 w-4 fill-gold-300 text-gold-300 sm:h-6 sm:w-6" />
                <span className="h-px w-8 bg-gold-300 sm:w-16" />
              </span>
              <span className="block">{COUPLE_NAME_2}</span>
            </h1>

            <div className="mt-4 flex flex-col items-center gap-1 sm:mt-5">
              <span className="font-display text-base italic text-white/90 sm:text-xl">{WEDDING_DATE_LABEL}</span>
              <span className="text-xs text-lavender-200 sm:text-sm">{WEDDING_LOCATION_LABEL}</span>
            </div>

            <p className="mt-3 text-xs text-white/80 sm:mt-4 sm:text-base">
              We found our forever — and we'd love you to be there when we make it official
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="#our-story"
                className="rounded-full border-2 border-white/40 bg-white/10 px-8 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:px-10 sm:py-3.5 sm:text-sm"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#countdown"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-8"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 text-white/70 sm:h-8 sm:w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
