import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { HASHTAG } from "../lib/wedding";

import photo1 from "../assets/gallery/photo-1.jpg";
import photo2 from "../assets/gallery/photo-2.jpg";
import photo3 from "../assets/gallery/photo-3.jpg";
import photo4 from "../assets/gallery/photo-4.jpg";
import photo5 from "../assets/gallery/photo-5.jpg";
import photo6 from "../assets/gallery/photo-6.jpg";
import photo7 from "../assets/gallery/photo-7.jpg";
import photo8 from "../assets/gallery/photo-8.jpg";
import photo9 from "../assets/gallery/photo-9.jpg";
import photo11 from "../assets/gallery/photo-11.jpg";
import photo12 from "../assets/gallery/photo-12.jpg";
import photo13 from "../assets/gallery/photo-13.jpg";
import photo15 from "../assets/gallery/photo-15.jpg";
import photo14 from "../assets/gallery/photo-14.jpg";
import photo16 from "../assets/gallery/photo-16.jpg";
import photo17 from "../assets/gallery/photo-17.jpg";

interface PhotoSet {
  title: string;
  photos: { src: string; alt: string }[];
}

const sets: PhotoSet[] = [
  {
    title: "On the Pitch",

    photos: [
      { src: photo11, alt: "Smiling with football" },
      { src: photo12, alt: "Foreheads together" },
      { src: photo13, alt: "Sitting together with football" },
      { src: photo15, alt: "Back to back" },
      { src: photo14, alt: "Kiss in jerseys" },
    ],
  },
  {
    title: "Cozy Vibes",

    photos: [
      { src: photo3, alt: "Matching PJs" },
      { src: photo7, alt: "Playful moment" },
      { src: photo8, alt: "Relaxing together" },
      { src: photo9, alt: "Fun times" },
      { src: photo16, alt: "Pillow fight" },
      { src: photo17, alt: "Pillow fight action" },
    ],
  },
  {
    title: "Us Being Us",
    photos: [
      { src: photo1, alt: "Together" },
      { src: photo2, alt: "Couple portrait" },
      { src: photo4, alt: "Getting ready" },
      { src: photo5, alt: "Candid moment" },
      { src: photo6, alt: "Forever Converse" },
    ],
  },
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-lavender-100 bg-lavender-50 px-6 pb-10 pt-20 text-center">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-lavender-200 bg-white px-4 py-2 text-sm font-medium text-lavender-500 transition-colors hover:bg-lavender-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="font-display text-4xl font-bold text-gray-800 md:text-5xl">
          Our Gallery
        </h1>
        <p className="mx-auto mt-3 max-w-md text-gray-500">
          All our favourite moments — organised by vibe. Tag your posts with{" "}
          <span className="font-bold text-lavender-500">{HASHTAG}</span>
        </p>
      </div>

      {/* Photo sets */}
      <div className="container mx-auto px-6 py-16">
        {sets.map((set, setIdx) => (
          <div key={setIdx} className="mb-16 last:mb-0">
            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-gray-800">
              {set.title}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
              {set.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(photo.src)}
                  className="group overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:ring-offset-2"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${i * 80}ms both`,
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox}
            alt="Full size"
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-lavender-100 bg-lavender-50 py-8 text-center">
        <p className="text-sm text-gray-400">
          {HASHTAG} · Made with love
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
