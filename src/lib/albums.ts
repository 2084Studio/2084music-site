import fs from "node:fs";
import path from "node:path";

export type AlbumLinks = {
  appleMusic?: string;
  spotify?: string;
  youtubeMusic?: string;
  amazonMusic?: string;
  bandcamp?: string;
  soundcloud?: string;
};

export type AlbumMeta = {
  title: string;
  subtitle?: string;
  year?: string;
  releaseDate?: string;
  links?: AlbumLinks;
};

export type Track = {
  name: string;
  mv?: string;
};

export type Album = {
  slug: string;
  cover: string;
  meta: AlbumMeta;
  description: string;
  tracks: Track[];
};

const ALBUMS_DIR = path.join(process.cwd(), "public", "albums");
const COVER_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

function safeReadJSON<T>(file: string, fallback: T): T {
  try {
    if (!fs.existsSync(file)) return fallback;
    const raw = fs.readFileSync(file, "utf8");
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn(`[albums] failed to parse ${file}:`, err);
    return fallback;
  }
}

function safeReadText(file: string, fallback = ""): string {
  try {
    if (!fs.existsSync(file)) return fallback;
    return fs.readFileSync(file, "utf8");
  } catch (err) {
    console.warn(`[albums] failed to read ${file}:`, err);
    return fallback;
  }
}

function findCover(dir: string, slug: string): string {
  for (const ext of COVER_EXTS) {
    const fp = path.join(dir, `cover${ext}`);
    if (fs.existsSync(fp)) return `/albums/${slug}/cover${ext}`;
  }
  return "";
}

export function getAlbums(): Album[] {
  if (!fs.existsSync(ALBUMS_DIR)) {
    console.warn("[albums] public/albums/ not found");
    return [];
  }

  let entries: fs.Dirent[] = [];
  try {
    entries = fs.readdirSync(ALBUMS_DIR, { withFileTypes: true });
  } catch (err) {
    console.warn("[albums] readdir failed:", err);
    return [];
  }

  const dirs = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, "en"));

  const albums: Album[] = [];
  for (const slug of dirs) {
    try {
      const dir = path.join(ALBUMS_DIR, slug);
      const meta = safeReadJSON<AlbumMeta | null>(path.join(dir, "meta.json"), null);
      if (!meta || !meta.title) {
        // Skip silently: graceful degradation
        continue;
      }
      const description = safeReadText(path.join(dir, "description.md"), "");
      const tracks = safeReadJSON<Track[]>(path.join(dir, "tracks.json"), []);
      const cover = findCover(dir, slug);
      albums.push({ slug, cover, meta, description, tracks });
    } catch (err) {
      console.warn(`[albums] failed to load "${slug}":`, err);
      continue;
    }
  }
  return albums;
}
