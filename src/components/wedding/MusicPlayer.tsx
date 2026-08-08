import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/baby-im-yours.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    if (autoPlay) {
      audio.play().then(() => {
        setPlaying(true);
      }).catch(() => {
        // Browser blocked autoplay — user needs to click the button
        setPlaying(false);
      });
    }

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [autoPlay]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lavender-500 shadow-md backdrop-blur-sm transition-all hover:bg-lavender-400 hover:text-white sm:right-6"
      aria-label={playing ? "Mute music" : "Play music"}
      title={playing ? "Mute" : "Play music"}
    >
      {playing ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </button>
  );
};

export default MusicPlayer;
