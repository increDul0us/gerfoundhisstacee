import { Heart } from "lucide-react";
import photo14 from "../../assets/gallery/photo-14.jpg";

const QuoteSection = () => {
  return (
    <section
      className="relative overflow-hidden h-[420px] md:h-[520px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${photo14})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Lavender overlay */}
      <div className="absolute inset-0 bg-lavender-400/65" />

      {/* Quote */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <Heart className="mb-5 h-10 w-10 fill-white text-white opacity-80 drop-shadow" />
        <blockquote className="max-w-2xl drop-shadow-lg">
          <p className="font-display text-2xl font-medium italic leading-relaxed md:text-[2.25rem]">
            "Two are better than one, because they have a good reward for their toil."
          </p>
          <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 md:text-base">
            — Ecclesiastes 4:9
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
