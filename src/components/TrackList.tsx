"use client";

import type { Track } from "@/lib/albums";

type Props = {
  tracks: Track[];
  onPlayMv: (mv: string) => void;
};

export default function TrackList({ tracks, onPlayMv }: Props) {
  return (
    <ul className="tracks">
      {tracks.map((t, i) => {
        const num = String(i + 1).padStart(2, "0");
        if (t.mv) {
          return (
            <li
              key={`${i}-${t.name}`}
              className="track has-mv"
              onClick={() => onPlayMv(t.mv as string)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onPlayMv(t.mv as string);
                }
              }}
            >
              <span className="track-num">{num}</span>
              <span className="track-name track-mv-name">{t.name}</span>
              <span className="track-mv-badge"><span className="track-mv-badge-icon">▶</span>MV</span>
            </li>
          );
        }
        return (
          <li key={`${i}-${t.name}`} className="track">
            <span className="track-num">{num}</span>
            <span className="track-name">{t.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
