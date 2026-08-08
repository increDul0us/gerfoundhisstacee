import { Heart } from "lucide-react";
import photo14 from "../../assets/gallery/photo-14.jpg";

const QuoteSection = () => {
  return (
    <section className="relative overflow-hidden h-[380px] sm:h-[420px] md:h-[520px] flex items-center justify-center">
      {/* Background image — static, no parallax */}
      <img
        src={photo14}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
      />
      {/* Lavender overlay */}
      <div className="absolute inset-0 bg-lavender-400/65" />

      {/* Quote */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <Heart className="mb-4 h-8 w-8 fill-white text-white opacity-80 drop-shadow sm:mb-5 sm:h-10 sm:w-10" />
        <blockquote className="max-w-2xl drop-shadow-lg">
          <p className="font-display text-xl font-medium italic leading-relaxed sm:text-2xl md:text-[2.25rem]">
            "Two are better than one, because they have a good reward for their toil."
          </p>
          <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:mt-6 sm:text-sm md:text-base">
            — Ecclesiastes 4:9
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
