import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import photo6 from "../../assets/gallery/photo-6.jpg";
import photo15 from "../../assets/gallery/photo-15.jpg";
import photo16 from "../../assets/gallery/photo-16.jpg";
import photo2 from "../../assets/gallery/photo-2.jpg";
import photo3 from "../../assets/gallery/photo-3.jpg";

const previewPhotos = [
  { src: photo6, alt: "Forever Converse", span: "" },
  { src: photo3, alt: "Matching PJs", span: "" },
  { src: photo15, alt: "Back to back on the pitch", span: "col-span-2", wide: true },
  { src: photo16, alt: "Pillow fight", span: "" },
  { src: photo2, alt: "Couple portrait", span: "" },
];

const GalleryPreview = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="gallery" className="bg-lavender-50 py-24">
      <div ref={ref} className="container mx-auto px-6">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Memories we love
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-gray-800 md:text-5xl">
            Our Gallery
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500">
            A few of our favourite moments — the real ones, not the posed ones
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {previewPhotos.map((photo, i) => {
            const isFeatured = false;
            const isWide = !!photo.wide && !isFeatured;

            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${photo.span} ${
                  isFeatured
                    ? "aspect-[4/3] md:aspect-auto"
                    : isWide
                    ? "aspect-[4/3] md:aspect-[2/1]"
                    : "aspect-[4/3]"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${i * 120}ms, transform 0.5s ease-out ${i * 120}ms`,
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-lavender-300 bg-white px-8 py-3 text-sm font-bold text-lavender-500 transition-all hover:bg-lavender-400 hover:text-white hover:shadow-lg hover:shadow-lavender-200"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
