"use client";

import type { Album } from "@/lib/albums";

type Props = {
  albums: Album[];
  onOpen: (slug: string) => void;
};

export default function AlbumDock({ albums, onOpen }: Props) {
  return (
    <section className="dock-wrap">
      <div className="dock">
        <div className="dock-track">
          {albums.map((a) => (
            <button
              key={a.slug}
              type="button"
              className="dock-card"
              onClick={() => onOpen(a.slug)}
              aria-label={`Open ${a.meta.title}`}
            >
              <div
                className="dock-cover"
                style={
                  a.cover
                    ? { backgroundImage: `url(${a.cover})` }
                    : undefined
                }
              />
              <div className="dock-meta">
                <div className="dock-title">{a.meta.title}</div>
                {a.meta.subtitle && (
                  <div className="dock-sub">{a.meta.subtitle}</div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
