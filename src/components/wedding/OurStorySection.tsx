import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import photo2 from "../../assets/gallery/photo-2.jpg";

const OurStorySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="our-story" className="py-14 sm:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 sm:px-6 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-lavender-400 sm:text-sm sm:tracking-[0.2em]">
            How it all began
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-gray-800 sm:mt-3 sm:text-4xl md:text-5xl">
            Our Story
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-8 sm:gap-12 md:grid-cols-2">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
            <img
              src={photo2}
              alt="Stacee-Ann and Gerard"
              className="w-full rounded-2xl object-cover shadow-xl sm:rounded-3xl"
            />
            <div className="absolute -bottom-2 -right-2 rounded-xl border-4 border-white bg-lavender-100 px-3 py-1.5 shadow-md sm:-bottom-3 sm:-right-3 sm:rounded-2xl sm:px-4 sm:py-2">
              <span className="font-display text-sm font-semibold text-lavender-600 sm:text-lg">
                #GerfoundhisStace
              </span>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl border border-lavender-100 bg-lavender-50/50 p-4 sm:p-6">
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                From matching PJs to late-night soccer matches on TV and playful 
                arguments over the remote, we've shared the kind of moments that 
                make life ours. Through the ups and downs, the laughter and the 
                challenges, we've grown together, held on to each other, and found 
                our way through it all.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-100 bg-gold-50/50 p-4 sm:p-6">
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                Somewhere between debating song choices, disagreeing over food, and 
                having our fair share of arguments, we realised that building a 
                life together is really about making a hundred little decisions 
                choosing each other's happiness through every single one, and trusting 
                God to guide us along the way.
              </p>
            </div>

            <div className="rounded-2xl border border-lavender-100 bg-lavender-50/50 p-4 sm:p-6">
              <p className="text-base font-display italic leading-relaxed text-gray-700 sm:text-lg">
                And now, as we begin this next chapter, we know this is only the 
                beginning of our greatest adventure yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
