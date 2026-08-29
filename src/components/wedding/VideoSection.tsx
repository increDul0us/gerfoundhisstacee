import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-14 sm:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 sm:px-6 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold sm:text-sm sm:tracking-[0.2em]">
            Watch our story
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-gray-800 sm:mt-3 sm:text-4xl md:text-5xl">
            Our Video
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 sm:mt-3 sm:text-base">
            A little glimpse into our journey together
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-3xl border-2 border-lavender-100 shadow-xl shadow-lavender-100">
            <video
              controls
              playsInline
              preload="metadata"
              className="h-auto w-full"
              poster=""
            >
              <source src="/our-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
