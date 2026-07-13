<script setup lang="ts">
const skills = {
  主力技術: ['JavaScript', 'TypeScript', 'Vue 3', 'Nuxt', 'Pinia', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  工具: ['Git / GitHub', 'Docker', 'Postman', 'Chrome DevTools'],
  '正在探索': ['React', 'Functional Programming', 'Design Patterns'],
}

const highlightStack = ['Vue 3', 'Vite 5', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Socket.io', 'LINE LIFF SDK', 'GSAP', 'ECharts', 'RxJS']

useSeoMeta({
  title: "關於我 — David's Notes",
  description: '前端工程師 David：Vue/Nuxt/TypeScript，直播平台與運動賽事應用開發經驗。',
})
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
    <!-- 自介 -->
    <section>
      <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-50/50 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-950/40 dark:text-primary-400">
        🧑🏻‍💻 About Me
      </p>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        嗨，我是 David
      </h1>
      <div class="mt-6 space-y-4 leading-relaxed text-gray-600 dark:text-gray-400">
        <p>
          個性沉穩、好奇心強——遇到問題總想挖出根本原因，再找出有效的解法。
          對我來說，工作不只是一份職業，而是持續成長的途徑。
        </p>
        <p>
          目前在新創擔任<strong class="font-semibold text-gray-900 dark:text-white">前端工程師</strong>，
          負責網頁開發、與 PM 協作定義需求、與後端協調 API 介接，
          並確保產品在各種裝置與瀏覽器上的相容性。做過<strong class="font-semibold text-gray-900 dark:text-white">直播平台</strong>與<strong class="font-semibold text-gray-900 dark:text-white">運動賽事應用</strong>。
        </p>
        <p>
          寫程式時奉行 Clean Code 原則，追求低耦合、高擴充性的元件設計；
          對 functional programming 與 design pattern 特別有熱情。
        </p>
      </div>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          href="https://github.com/gloriousky"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-primary-400 px-4 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:bg-primary-300"
        >
          GitHub 逛逛
        </a>
        <NuxtLink
          to="/notes"
          class="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800/60"
        >
          看我的筆記
        </NuxtLink>
      </div>
    </section>

    <!-- 技能 -->
    <section class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">🔧 技能與工具</h2>
      <div class="mt-6 space-y-5">
        <div v-for="(items, group) in skills" :key="group">
          <h3 class="mb-2.5 text-sm font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
            {{ group }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in items"
              :key="skill"
              class="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-300"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 專案亮點 -->
    <section class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">💼 專案亮點</h2>

      <article class="mt-6 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          LINE H5 娛樂平台
        </h3>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <span
            v-for="tech in highlightStack"
            :key="tech"
            class="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950/60 dark:text-primary-400"
          >
            {{ tech }}
          </span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          基於 LINE 的線上娛樂平台完整 H5 應用：遊戲、金流、公會、推薦分潤、即時聊天。
        </p>
        <ul class="mt-4 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <li class="flex gap-2">
            <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
            <span><strong class="font-medium text-gray-900 dark:text-white">廣告與分析整合</strong>：GTM、GA4、Meta Pixel 的事件追蹤與轉換量測</span>
          </li>
          <li class="flex gap-2">
            <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
            <span><strong class="font-medium text-gray-900 dark:text-white">Service Worker 差異化快取</strong>：hashed JS/CSS 走 network-first 確保新鮮度、靜態資源 cache-first 支援離線、<code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-800">index.html</code> 強制 cache-busting</span>
          </li>
          <li class="flex gap-2">
            <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
            <span><strong class="font-medium text-gray-900 dark:text-white">PWA</strong>：manifest + standalone 模式，支援加入主畫面</span>
          </li>
          <li class="flex gap-2">
            <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
            <span><strong class="font-medium text-gray-900 dark:text-white">效能優化</strong>：瀏覽器端圖片壓縮、自訂 lazy-load 與錯誤 fallback 指令、Terser 移除 console、<code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-800">import.meta.glob()</code> 自動註冊與 code splitting</span>
          </li>
        </ul>
      </article>

      <article class="mt-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            台股三大法人持股追蹤器
          </h3>
          <span class="shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">Side Project</span>
        </div>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <span
            v-for="tech in ['Python', 'pandas', 'GitHub Actions', 'ECharts']"
            :key="tech"
            class="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950/60 dark:text-primary-400"
          >
            {{ tech }}
          </span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          每日自動抓取 TWSE/TPEX 三大法人買賣超與外資持股資料，推估投信/自營商持股比重，
          以 GitHub Actions 全自動更新並發佈互動圖表到 GitHub Pages。
        </p>
        <a
          href="https://github.com/gloriousky/tw-institutional-stocker"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-sm font-medium text-primary-500 hover:underline dark:text-primary-400"
        >
          GitHub Repo →
        </a>
      </article>

      <article class="mt-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            這個網站
          </h3>
          <span class="shrink-0 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">Meta</span>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Nuxt 4 + Tailwind CSS 4 打造的筆記站：內容直接來自 GitHub Issues——開 issue 就是發文章、
          label 就是分類；Actions 在 issue 變動時自動測試、建置、部署到 GitHub Pages。
        </p>
        <a
          href="https://github.com/gloriousky/Notes"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-sm font-medium text-primary-500 hover:underline dark:text-primary-400"
        >
          原始碼 →
        </a>
      </article>
    </section>
  </div>
</template>
