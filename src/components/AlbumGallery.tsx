"use client";

import { useCallback, useState } from "react";
import type { Album } from "@/lib/albums";
import AlbumDock from "./AlbumDock";
import AlbumExpanded from "./AlbumExpanded";
import VideoOverlay from "./VideoOverlay";

export default function AlbumGallery({ albums }: { albums: Album[] }) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [videoMv, setVideoMv] = useState<string | null>(null);

  const handleOpen = useCallback((slug: string) => setSelectedSlug(slug), []);
  const handleClose = useCallback(() => setSelectedSlug(null), []);
  const handlePlayMv = useCallback((mv: string) => setVideoMv(mv), []);
  const handleCloseVideo = useCallback(() => setVideoMv(null), []);

  const selected = albums.find((a) => a.slug === selectedSlug) ?? null;

  return (
    <>
      <AlbumDock albums={albums} onOpen={handleOpen} />
      {selected && (
        <AlbumExpanded
          album={selected}
          onClose={handleClose}
          onPlayMv={handlePlayMv}
        />
      )}
      <VideoOverlay mv={videoMv} onClose={handleCloseVideo} />
    </>
  );
}
