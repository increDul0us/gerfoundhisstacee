import { useState } from "react";
import { Heart, Send, PartyPopper, Loader2 } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const WEB3FORMS_KEY = "ff505899-7bf3-47d7-a581-0a98e2b09e87";

const RSVPSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
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
          guests: formData.guests,
          message: formData.message || "(no message)",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send your RSVP. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <section id="rsvp" className="bg-lavender-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-md rounded-3xl border border-lavender-200 bg-white p-10 shadow-lg">
            <PartyPopper className="mx-auto mb-4 h-12 w-12 text-lavender-400" />
            <h3 className="font-display text-3xl font-bold text-gray-800">
              Thank You!
            </h3>
            <p className="mt-3 text-gray-500">
              We look forward to celebrating with you at the ceremony.
            </p>
            <Heart className="mx-auto mt-4 h-8 w-8 animate-float fill-lavender-400 text-lavender-400" />
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
        <div className="mb-8 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold sm:text-sm sm:tracking-[0.2em]">
            Let us know you're coming!
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-gray-800 sm:mt-3 sm:text-4xl md:text-5xl">
            RSVP
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 sm:mt-3 sm:text-base">
            Please let us know if you'll be joining us for the ceremony.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg space-y-5 rounded-3xl border border-lavender-100 bg-white p-6 shadow-sm sm:p-8 md:p-10"
        >
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Will you be attending the ceremony? *
            </label>
            <div className="flex gap-3">
              {[
                { value: "yes", label: "Yes!", bg: "bg-lavender-50 border-lavender-400 text-lavender-600" },
                { value: "no", label: "Can't make it", bg: "bg-gray-50 border-gray-300 text-gray-600" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                    formData.attending === opt.value
                      ? opt.bg
                      : "border-gray-200 bg-white text-gray-400 hover:border-lavender-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={opt.value}
                    checked={formData.attending === opt.value}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Number of Guests (including you)
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Leave a Message
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
              placeholder="Any words for the happy couple?"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lavender-400 py-3.5 text-sm font-bold text-white shadow-lg shadow-lavender-200 transition-all hover:bg-lavender-500 hover:shadow-xl disabled:opacity-60"
          >
            {submitting ? (
              <>Sending... <Loader2 className="h-4 w-4 animate-spin" /></>
            ) : (
              <>Send RSVP <Send className="h-4 w-4" /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
