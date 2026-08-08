import { useState } from "react";
import { Heart, Send, PartyPopper, Loader2, Check } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WEB3FORMS_KEY = "ff505899-7bf3-47d7-a581-0a98e2b09e87";

const RSVPSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState<"yes" | "no" | false>(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Wedding RSVP (Ceremony Only): ${formData.name} — ${formData.attending === "yes" ? "Attending" : "Not attending"}`,
          from_name: "Wedding RSVP — Ceremony",
          name: formData.name,
          email: formData.email,
          attending: formData.attending === "yes" ? "Yes" : "No",
          invite_type: "Ceremony Only",
          message: formData.message || "(no message)",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(formData.attending as "yes" | "no");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send your RSVP. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="bg-lavender-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-md rounded-3xl border border-lavender-200 bg-white p-10 shadow-lg">
            {submitted === "yes" ? (
              <>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100">
                  <PartyPopper className="h-8 w-8 text-lavender-500" />
                </div>
                <h3 className="font-display text-3xl font-bold text-gray-800">Thank You!</h3>
                <p className="mt-3 text-gray-500">We look forward to celebrating with you at the ceremony.</p>
                <Heart className="mx-auto mt-5 h-7 w-7 animate-float fill-lavender-300 text-lavender-300" />
              </>
            ) : (
              <>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <Heart className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-display text-3xl font-bold text-gray-800">We'll Miss You!</h3>
                <p className="mt-3 text-gray-500">We're sorry you can't make it, but we appreciate you letting us know. You'll be in our hearts on the big day.</p>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="bg-lavender-50 py-14 sm:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 sm:px-6 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold sm:text-sm sm:tracking-[0.2em]">
            Let us know you're coming!
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-gray-800 sm:mt-3 sm:text-4xl md:text-5xl">
            RSVP
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 sm:mt-3 sm:text-base">
            Each guest must RSVP individually — even if you're coming together!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg space-y-6 rounded-3xl border border-lavender-100 bg-white p-6 shadow-sm sm:p-8 md:p-10"
        >
          {/* Name */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
              className="w-full rounded-2xl border-2 border-lavender-100 bg-lavender-50/30 px-4 py-3.5 text-sm font-medium text-gray-800 outline-none transition-all placeholder:text-gray-300 focus:border-lavender-400 focus:bg-white focus:shadow-sm"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
              className="w-full rounded-2xl border-2 border-lavender-100 bg-lavender-50/30 px-4 py-3.5 text-sm font-medium text-gray-800 outline-none transition-all placeholder:text-gray-300 focus:border-lavender-400 focus:bg-white focus:shadow-sm"
              placeholder="your@email.com"
            />
          </div>

          {/* Attending */}
          <div>
            <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-gray-400">
              Will you be attending the ceremony? *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "yes", label: "Joyfully accepts", iconType: "yes" as const },
                { value: "no", label: "Regretfully declines", iconType: "no" as const },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all ${
                    formData.attending === opt.value
                      ? opt.value === "yes"
                        ? "border-lavender-400 bg-lavender-50 shadow-sm shadow-lavender-100"
                        : "border-gray-300 bg-gray-50"
                      : "border-lavender-100 bg-white hover:border-lavender-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={opt.value}
                    checked={formData.attending === opt.value}
                    onChange={(e) => setFormData(p => ({ ...p, attending: e.target.value }))}
                    className="sr-only"
                    required
                  />
                  {formData.attending === opt.value && (
                    <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-lavender-400">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                  )}
                  {opt.iconType === "yes" ? <PartyPopper className="mb-1.5 h-6 w-6 text-lavender-400" /> : <Heart className="mb-1.5 h-6 w-6 text-gray-400" />}
                  <span className="text-xs font-semibold leading-tight text-gray-700">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message — only when attending */}
          {formData.attending === "yes" && (
            <>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400">
                  Leave a Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  className="w-full resize-none rounded-2xl border-2 border-lavender-100 bg-lavender-50/30 px-4 py-3.5 text-sm font-medium text-gray-800 outline-none transition-all placeholder:text-gray-300 focus:border-lavender-400 focus:bg-white focus:shadow-sm"
                  placeholder="Any words for the happy couple?"
                />
              </div>
            </>
          )}

          {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lavender-400 to-lavender-500 py-4 text-sm font-bold text-white shadow-lg shadow-lavender-200 transition-all hover:shadow-xl hover:shadow-lavender-300 hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
            ) : (
              <><Send className="h-4 w-4" /> Send RSVP</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
