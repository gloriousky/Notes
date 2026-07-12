# David's Notes

個人網站：前端開發筆記。筆記內容即本 repo 的 [GitHub Issues](https://github.com/gloriousky/Notes/issues)——開新 issue 就是發新筆記，issue 的 label 就是筆記分類，網站自動同步（伺服器端快取 5 分鐘）。

## 技術

- [Nuxt 4](https://nuxt.com)（Vue 3 + TypeScript）
- [Tailwind CSS 4](https://tailwindcss.com)（`@tailwindcss/vite` 整合）
- markdown-it + highlight.js 渲染筆記內容
- 深淺色模式、依 label 分類篩選

## 開發

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 產出 .output/（Node server）
```

## 結構

```
app/
  pages/index.vue        # 首頁（hero + 最新筆記）
  pages/notes/index.vue  # 筆記列表（?tag= 篩選分類）
  pages/notes/[id].vue   # 筆記內文（id = issue number）
  composables/useNotes.ts    # 筆記資料與分類
  composables/useMarkdown.ts # markdown 渲染（html:false 防 XSS）
server/api/notes.get.ts  # 抓 GitHub Issues，快取 5 分鐘 + SWR
shared/types.ts
```
