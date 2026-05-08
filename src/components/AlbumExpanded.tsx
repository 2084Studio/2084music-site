"use client";

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import type { Album } from "@/lib/albums";
import PlatformLinks from "./PlatformLinks";
import TrackList from "./TrackList";

type Props = {
  album: Album;
  onClose: () => void;
  onPlayMv: (mv: string) => void;
};

export default function AlbumExpanded({ album, onClose, onPlayMv }: Props) {
  // Esc to close + lock body scroll
  useEffect(() => {
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
  }, [onClose]);

  const dateStr = album.meta.releaseDate || album.meta.year || "";

  return (
    <div
      className="expanded-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={album.meta.title}
    >
      <div className="expanded" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="expanded-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div
          className="expanded-cover"
          style={
            album.cover ? { backgroundImage: `url(${album.cover})` } : undefined
          }
        />
        <div className="expanded-info">
          <div>
            <h1 className="expanded-title">{album.meta.title}</h1>
            {album.meta.subtitle && (
              <div className="expanded-subtitle">{album.meta.subtitle}</div>
            )}
            {dateStr && <div className="expanded-date" style={{ marginTop: 8 }}>{dateStr}</div>}
          </div>

          {album.meta.links && <PlatformLinks links={album.meta.links} />}

          {album.description && (
            <div className="expanded-desc">
              <ReactMarkdown>{album.description}</ReactMarkdown>
            </div>
          )}

          {album.tracks.length > 0 && (
            <TrackList tracks={album.tracks} onPlayMv={onPlayMv} />
          )}
        </div>
      </div>
    </div>
  );
}
