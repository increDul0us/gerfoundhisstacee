import { Heart, Volume2 } from "lucide-react";
import { COUPLE_NAME_1, COUPLE_NAME_2, WEDDING_DATE_LABEL } from "../../lib/wedding";
import heroImg from "../../assets/gallery/photo-hero.jpg";

interface WelcomeSplashProps {
  onEnter: () => void;
}

const WelcomeSplash = ({ onEnter }: WelcomeSplashProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center sm:px-6">
        <div className="animate-fade-in rounded-3xl border border-white/20 bg-white/10 px-5 py-8 backdrop-blur-md sm:px-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 sm:text-sm sm:tracking-[0.3em]">
            You're invited to celebrate
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:mt-6 sm:text-6xl md:text-7xl">
            <span className="block">{COUPLE_NAME_1}</span>
            <span className="my-2 flex items-center justify-center gap-2 sm:my-3 sm:gap-3">
              <span className="h-px w-6 bg-gold-300 sm:w-14" />
              <Heart className="h-4 w-4 animate-float fill-gold-300 text-gold-300 sm:h-5 sm:w-5" />
              <span className="h-px w-6 bg-gold-300 sm:w-14" />
            </span>
            <span className="block">{COUPLE_NAME_2}</span>
          </h1>

          <p className="mt-3 font-display text-base italic text-white/80 sm:mt-4 sm:text-lg">
            {WEDDING_DATE_LABEL}
          </p>

          <button
            onClick={onEnter}
            className="mt-6 rounded-full bg-lavender-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-lavender-500/30 transition-all hover:bg-lavender-500 hover:shadow-2xl active:scale-95 sm:mt-10 sm:px-10 sm:py-4 sm:text-sm sm:tracking-[0.15em]"
          >
            Celebrate With Us
          </button>

          <p className="mt-3 text-[10px] text-white/40 sm:mt-4 sm:text-xs">
            <Volume2 className="mr-1 inline-block h-3 w-3" /> Turn your sound on
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSplash;
