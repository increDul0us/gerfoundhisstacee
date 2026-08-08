import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const ScrollButton = () => {
  const [showUp, setShowUp] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setShowUp(scrollY > 300);
      setAtBottom(scrollY + windowHeight >= docHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  if (!showUp && !atBottom) return null;

  return (
    <button
      onClick={atBottom ? scrollToTop : showUp ? scrollToTop : scrollToBottom}
      className="fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lavender-500 shadow-md backdrop-blur-sm transition-all hover:bg-lavender-400 hover:text-white sm:right-6"
      aria-label={atBottom || showUp ? "Scroll to top" : "Scroll down"}
    >
      {atBottom || showUp ? (
        <ChevronUp className="h-5 w-5" />
      ) : (
        <ChevronDown className="h-5 w-5" />
      )}
    </button>
  );
};

export default ScrollButton;
