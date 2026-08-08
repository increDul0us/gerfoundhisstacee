import { Music } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const SPOTIFY_TRACK_ID = "0SzvmWfOhoxZVGrmvb56YL";

const OurSongSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-auto max-w-md text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lavender-50 px-4 py-2 text-sm font-semibold text-lavender-500">
            <Music className="h-4 w-4" />
            Our Song
          </div>

          <h3 className="font-display text-2xl font-bold text-gray-800">
            Baby I'm Yours
          </h3>
          <p className="mt-1 text-sm text-gray-400">Arctic Monkeys</p>

          <div className="mt-6 overflow-hidden rounded-2xl shadow-lg shadow-lavender-100">
            <iframe
              src={`https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-2xl"
              title="Our Song — Baby I'm Yours by Arctic Monkeys"
            />
          </div>

          <p className="mt-4 text-sm italic text-gray-400">
            "Baby I'm yours, and I'll be yours until the stars fall from the sky"
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurSongSection;
