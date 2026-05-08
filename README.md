# 2084music-site

Apple 白底現代調風格的音樂作品站,基於 Next.js 16 + Turbopack + React 19 + Tailwind CSS 4。

## 開發

```bash
npm install
npm run dev
```

Dev server 預設在 http://localhost:3001

## 新增專輯

在 `public/albums/` 下建立新資料夾(命名前綴決定排序,例如 `04-foo/`),內含:

- `cover.jpg`(建議 1200x1200)
- `meta.json`
- `description.md`
- `tracks.json`

詳細格式見現有 `01-album-one/` ~ `03-album-three/`。
