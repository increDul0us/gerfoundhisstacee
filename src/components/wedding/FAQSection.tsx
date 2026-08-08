import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const faqs = [
  {
    q: "What should I wear?",
    a: "Please observe decorum with silence and modest dressing for our wedding mass.",
  },
  {
    q: "Is there parking?",
    a: "Yes, parking is available at the venue.",
  },
  {
    q: "Can I take photos?",
    a: "During the ceremony, we'd love for you to be present (unplugged ceremony). Use #GerfoundhisStace for any photos you take!",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-14 sm:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 sm:px-6 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-lavender-400 sm:text-sm sm:tracking-[0.2em]">
            Got questions? We've got answers
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-gray-800 sm:mt-3 sm:text-4xl md:text-5xl">
            FAQ
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-2xl border border-lavender-100 bg-white transition-shadow data-[state=open]:shadow-md data-[state=open]:shadow-lavender-100"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left font-display text-base font-semibold text-gray-800 transition-colors hover:text-lavender-500 sm:px-6 sm:py-4 sm:text-lg [&[data-state=open]>svg]:rotate-180">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-lavender-400 transition-transform duration-200" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-4 pb-3 text-xs leading-relaxed text-gray-600 sm:px-6 sm:pb-4 sm:text-sm">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
