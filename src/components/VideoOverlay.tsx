"use client";

import { useEffect } from "react";

type Props = {
  mv: string | null;
  onClose: () => void;
};

export default function VideoOverlay({ mv, onClose }: Props) {
  useEffect(() => {
    if (!mv) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = prev;
    };
  }, [mv, onClose]);

  if (!mv) return null;

  const src = `https://www.youtube.com/embed/${encodeURIComponent(
    mv
  )}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div
      className="video-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video"
    >
      <div className="video-frame" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="video-close"
          onClick={onClose}
          aria-label="Close video"
        >
          ✕
        </button>
        <iframe
          src={src}
          title="MV"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}
