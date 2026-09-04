import { useState } from "react";
import { Heart, Volume2 } from "lucide-react";
import {
  COUPLE_NAME_1,
  COUPLE_NAME_2,
  WEDDING_DATE_LABEL,
  WEDDING_LOCATION_LABEL,
} from "../../lib/wedding";
import heroImg from "../../assets/gallery/photo-hero.jpg";

interface WelcomeSplashProps {
  onEnter: () => void;
}

type Stage = "sealed" | "opening" | "card";

const WelcomeSplash = ({ onEnter }: WelcomeSplashProps) => {
  const [stage, setStage] = useState<Stage>("sealed");

  const handleOpen = () => {
    if (stage !== "sealed") return;
    setStage("opening");
    setTimeout(() => setStage("card"), 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Inject keyframes */}
      <style>{`
        @keyframes envelope-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes tap-hint {
          0%, 100% { opacity: 0.5; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-4px); }
        }
        @keyframes flap-open {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(180deg); }
        }
        @keyframes card-rise {
          0% { transform: translateY(0); opacity: 0.5; }
          100% { transform: translateY(-120%); opacity: 1; }
        }
        @keyframes card-fade-in {
          0% { opacity: 0; transform: scale(0.92) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes seal-shine {
          0%, 100% { box-shadow: 0 0 8px rgba(255,201,51,0.3); }
          50% { box-shadow: 0 0 20px rgba(255,201,51,0.6); }
        }
        @keyframes envelope-exit {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.8) translateY(40px); }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      </div>

      {/* === ENVELOPE (stages: sealed & opening) === */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{
          display: stage === "card" ? "none" : "flex",
          animation:
            stage === "opening"
              ? "envelope-exit 0.8s ease-in 0.8s forwards"
              : undefined,
        }}
      >
        {/* Envelope container — roughly phone-card sized */}
        <div
          onClick={handleOpen}
          className="relative cursor-pointer select-none"
          style={{
            width: "min(85vw, 340px)",
            height: "min(55vw, 220px)",
            perspective: "800px",
            animation:
              stage === "sealed" ? "envelope-pulse 3s ease-in-out infinite" : undefined,
          }}
        >
          {/* Card peeking inside */}
          <div
            className="absolute left-1/2 rounded-t-lg bg-cream"
            style={{
              width: "80%",
              height: "90%",
              bottom: "10%",
              transform: "translateX(-50%)",
              zIndex: 1,
              ...(stage === "opening"
                ? {
                    animation: "card-rise 1s ease-out 0.4s forwards",
                  }
                : {}),
            }}
          >
            <div className="flex h-full flex-col items-center justify-center px-3 opacity-60">
              <div className="h-px w-8 bg-gold-300" />
              <p className="mt-1 font-display text-[10px] text-gold-500 sm:text-xs">
                G&S
              </p>
              <div className="mt-1 h-px w-8 bg-gold-300" />
            </div>
          </div>

          {/* Envelope body */}
          <div
            className="absolute inset-0 rounded-xl border border-lavender-300/40 bg-lavender-200 shadow-2xl"
            style={{ zIndex: 2 }}
          >
            {/* Inner shadow / liner */}
            <div className="absolute inset-2 rounded-lg border border-gold-200/30" />

            {/* Bottom decorative V */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "60%",
                clipPath: "polygon(0 100%, 50% 30%, 100% 100%)",
                background:
                  "linear-gradient(to bottom, rgba(212,197,254,0.5), rgba(233,224,255,0.8))",
                zIndex: 3,
              }}
            />
          </div>

          {/* Envelope flap (triangle) */}
          <div
            className="absolute left-0 right-0 top-0"
            style={{
              height: "55%",
              zIndex: stage === "opening" ? 0 : 4,
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
              animation:
                stage === "opening"
                  ? "flap-open 0.8s ease-in-out forwards"
                  : undefined,
            }}
          >
            {/* Front face of flap */}
            <div
              className="absolute inset-0 rounded-t-xl bg-lavender-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background:
                    "linear-gradient(180deg, rgba(184,157,252,0.3) 0%, transparent 60%)",
                }}
              />
            </div>
            {/* Back face of flap */}
            <div
              className="absolute inset-0 bg-lavender-100"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            />
          </div>

          {/* Wax seal */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              zIndex: 5,
              opacity: stage === "opening" ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full bg-gold-400"
              style={{
                width: "52px",
                height: "52px",
                animation:
                  stage === "sealed"
                    ? "seal-shine 2.5s ease-in-out infinite"
                    : undefined,
              }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold-200/50 bg-gold-500">
                <span
                  className="font-display text-sm font-bold text-white"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  G&S
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tap hint */}
        <p
          className="mt-6 text-xs font-medium tracking-widest text-white/70 sm:text-sm"
          style={{
            animation:
              stage === "sealed" ? "tap-hint 2s ease-in-out infinite" : undefined,
            opacity: stage === "opening" ? 0 : undefined,
            transition: "opacity 0.3s",
          }}
        >
          Tap to open
        </p>
      </div>

      {/* === INVITATION CARD (stage: card) === */}
      {stage === "card" && (
        <div
          className="relative z-10 mx-4 w-full sm:mx-0"
          style={{
            maxWidth: "400px",
            animation: "card-fade-in 0.8s ease-out forwards",
          }}
        >
          <div className="rounded-2xl border border-gold-200/40 bg-cream px-6 py-10 shadow-2xl sm:px-10 sm:py-14">
            {/* Top gold line */}
            <div className="mx-auto mb-6 h-px w-16 bg-gold-300 sm:mb-8" />

            <p className="font-body text-xs uppercase tracking-[0.2em] text-lavender-500 sm:text-sm">
              You are cordially invited
            </p>
            <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-lavender-400 sm:text-sm">
              to the wedding of
            </p>

            {/* Names */}
            <h1 className="mt-6 font-display text-4xl font-bold text-lavender-600 sm:mt-8 sm:text-5xl">
              {COUPLE_NAME_2}
            </h1>

            {/* Heart divider */}
            <div className="my-3 flex items-center justify-center gap-2 sm:my-4 sm:gap-3">
              <span className="h-px w-10 bg-gold-300 sm:w-14" />
              <Heart className="h-4 w-4 fill-gold-400 text-gold-400 sm:h-5 sm:w-5" />
              <span className="h-px w-10 bg-gold-300 sm:w-14" />
            </div>

            <h1 className="font-display text-4xl font-bold text-lavender-600 sm:text-5xl">
              {COUPLE_NAME_1}
            </h1>

            {/* Date & Location */}
            <div className="mt-6 sm:mt-8">
              <p className="font-display text-sm italic text-gold-dark sm:text-base">
                {WEDDING_DATE_LABEL}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-gold-500 sm:text-sm">
                {WEDDING_LOCATION_LABEL}
              </p>
            </div>

            {/* Bottom gold line */}
            <div className="mx-auto mt-6 h-px w-16 bg-gold-300 sm:mt-8" />

            {/* CTA */}
            <button
              onClick={onEnter}
              className="mt-6 rounded-full bg-lavender-400 px-8 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-lavender-500/25 transition-all hover:bg-lavender-500 hover:shadow-xl active:scale-95 sm:mt-8 sm:px-10 sm:py-4 sm:text-sm"
            >
              Open Invitation
            </button>

            {/* Sound hint */}
            <p className="mt-3 flex items-center justify-center gap-1 text-[10px] text-lavender-400/60 sm:mt-4 sm:text-xs">
              <Volume2 className="h-3 w-3" />
              Turn your sound on
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeSplash;
