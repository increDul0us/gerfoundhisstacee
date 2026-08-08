import { Heart, MapPin, Sparkles, Calendar, Gift } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const milestones = [
  {
    date: "September 23, 2023",
    title: "We Connected",
    description: "The moment it all began — two people finding their way to each other.",
    icon: Sparkles,
    color: "text-lavender-500",
    bg: "bg-lavender-50",
    border: "border-lavender-200",
  },
  {
    date: "September 29, 2023",
    title: "First Date",
    description: "Six days later, we knew we had to see each other again.",
    icon: Heart,
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    date: "February 14, 2025",
    title: "First Trip",
    description: "Our first adventure together — making memories far from home.",
    icon: MapPin,
    color: "text-gold-dark",
    bg: "bg-gold-50",
    border: "border-gold-200",
  },
  {
    date: "October 25, 2025",
    title: "The Proposal",
    description: "He asked. She said yes. The rest is history.",
    icon: Gift,
    color: "text-lavender-600",
    bg: "bg-lavender-50",
    border: "border-lavender-200",
  },
  {
    date: "January 31, 2026",
    title: "The Engagement",
    description: "Making it official with family and friends by our side.",
    icon: Calendar,
    color: "text-gold",
    bg: "bg-gold-50",
    border: "border-gold-200",
  },
];

const OurJourneySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="py-14 sm:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 sm:px-6 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold sm:text-sm sm:tracking-[0.2em]">
            How we got here
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-gray-800 sm:mt-3 sm:text-4xl md:text-5xl">
            Our Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-lavender-200 via-gold-200 to-lavender-200 sm:left-1/2 sm:block" />

          <div className="space-y-6 sm:space-y-10">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="relative flex items-start gap-4 sm:gap-0"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease-out ${i * 150}ms`,
                  }}
                >
                  {/* Mobile: icon on left */}
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${milestone.border} ${milestone.bg} sm:absolute sm:left-1/2 sm:z-10 sm:-translate-x-1/2`}>
                    <Icon className={`h-5 w-5 ${milestone.color}`} />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 sm:w-[calc(50%-2rem)] ${isLeft ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`}>
                    <div className={`rounded-2xl border ${milestone.border} ${milestone.bg} p-4 shadow-sm sm:p-5`}>
                      <p className={`text-xs font-bold uppercase tracking-wider ${milestone.color}`}>
                        {milestone.date}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold text-gray-800 sm:text-xl">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
