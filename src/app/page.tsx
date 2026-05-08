import Banner from "@/components/Banner";
import AlbumGallery from "@/components/AlbumGallery";
import { getAlbums } from "@/lib/albums";

export default function HomePage() {
  const albums = getAlbums();
  return (
    <main>
      <Banner />
      {albums.length === 0 ? (
        <div className="empty-state">尚未建立任何專輯資料夾。</div>
      ) : (
        <AlbumGallery albums={albums} />
      )}
    </main>
  );
}
