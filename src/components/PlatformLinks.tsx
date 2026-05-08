import type { AlbumLinks } from "@/lib/albums";

type PlatformDef = {
  key: keyof AlbumLinks;
  label: string;
  className: string;
  // Brand-aligned simplified SVG icons (24x24 viewBox)
  Icon: () => React.JSX.Element;
};

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.991c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.282.027.424.05.815.154 1.624.464 2.39.811 2.022 2.299 3.205 4.45 3.514.853.123 1.717.114 2.575.117 4.728.001 9.456.001 14.184 0 .323 0 .647-.012.97-.045 1.252-.097 2.55-.418 3.65-1.048a4.999 4.999 0 0 0 1.55-1.524c.595-.918.83-1.95.918-3.014.066-.776.055-1.554.055-2.331 0-3.992 0-7.985-.003-11.978zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 0 1 1.55-2.18c.426-.054.842-.024 1.262.064l.243.063c.084.012.114-.024.114-.105V8.025c0-.18-.05-.21-.21-.18l-7.27 1.477c-.193.04-.219.073-.219.27v8.196c0 .393-.067.776-.249 1.13-.27.515-.71.844-1.27 1.022-.354.107-.706.158-1.067.18-.94.046-1.773-.643-1.94-1.554-.158-.851.366-1.74 1.244-2.06.339-.13.69-.16 1.046-.18.392-.02.78.018 1.16.118.12.025.225.07.342.09.058.012.087-.025.087-.082V9.066c0-.218.043-.291.252-.331l7.65-1.564c.198-.04.398-.067.6-.097.142-.014.18.024.18.156z"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const YouTubeMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228 0 3.432 2.796 6.228 6.228 6.228 3.432 0 6.228-2.796 6.228-6.228 0-3.432-2.796-6.228-6.228-6.228zM9.684 15.54V8.46L15.84 12l-6.156 3.54z"/>
  </svg>
);

const AmazonMusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 6.75c0-.414.336-.75.75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 0-.75.75v3.375c0 .79-.34 1.541-.928 2.069A2.997 2.997 0 0 1 8.25 14.5a.75.75 0 0 1 0-1.5c.41 0 .8-.165 1.085-.456.286-.291.415-.677.415-1.044V6.75zm6 6c0 1.657-1.343 3-3 3a.75.75 0 0 1 0-1.5c.828 0 1.5-.672 1.5-1.5V8.25a.75.75 0 0 1 1.5 0v4.5zM6.75 18a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H6.75z"/>
  </svg>
);

const BandcampIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"/>
  </svg>
);

const SoundCloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566zm3 0h1v-9.224c-.32-.119-.661-.18-1-.205zm-2 0h1v-9.427c-.339.025-.679.086-1 .205zm-4 0h1v-7.348c-.367.276-.71.585-1 .91zm-2-2.962c-.16.502-.25 1.036-.25 1.59 0 .416.062.815.18 1.196l.07.176v-2.962zm22-1.038c0 2.485-2.018 4.5-4.5 4.5h-8.5v-9.798c1.456-.879 3.171-1.292 4.834-1.066 3.18.43 5.61 2.985 6.029 5.999 1.275.241 2.137 1.27 2.137 2.365zm-19 1c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z"/>
  </svg>
);

const PLATFORMS: PlatformDef[] = [
  { key: "appleMusic",    label: "Apple Music",    className: "apple",          Icon: AppleMusicIcon },
  { key: "spotify",       label: "Spotify",        className: "spotify",        Icon: SpotifyIcon },
  { key: "youtubeMusic",  label: "YouTube Music",  className: "youtube",        Icon: YouTubeMusicIcon },
  { key: "amazonMusic",   label: "Amazon Music",   className: "",               Icon: AmazonMusicIcon },
  { key: "bandcamp",      label: "Bandcamp",       className: "",               Icon: BandcampIcon },
  { key: "soundcloud",    label: "SoundCloud",     className: "",               Icon: SoundCloudIcon },
];

export default function PlatformLinks({ links }: { links: AlbumLinks }) {
  const visible = PLATFORMS.filter((p) => {
    const url = links[p.key];
    return typeof url === "string" && url.trim().length > 0;
  });
  if (visible.length === 0) return null;
  return (
    <div className="platform-links">
      {visible.map((p) => {
        const url = links[p.key] as string;
        const Icon = p.Icon;
        return (
          <a
            key={p.key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`platform-link ${p.className}`}
          >
            <Icon />
            <span>{p.label}</span>
          </a>
        );
      })}
    </div>
  );
}
