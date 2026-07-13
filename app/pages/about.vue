<script setup lang="ts">
const skills = {
  主力技術: ['JavaScript', 'TypeScript', 'Vue 3', 'Nuxt', 'Pinia', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  工具: ['Git / GitHub', 'Docker', 'Postman', 'Chrome DevTools'],
  '正在探索': ['React', 'Functional Programming', 'Design Patterns'],
}

const highlightStack = ['Vue 3', 'Vite 5', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Socket.io', 'LINE LIFF SDK', 'GSAP', 'ECharts', 'RxJS']

// 拆開寫避免被 bundler 的 import.meta 替換誤傷（模板裡的純文字也會被掃到）
const importMetaGlob = ['import', 'meta', 'glob()'].join('.')

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

    <!-- 工作經歷 -->
    <section class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">💼 工作經歷</h2>

      <ol class="relative mt-8 space-y-10 border-l border-gray-200 pl-6 dark:border-gray-800">
        <!-- 巨兆數位 -->
        <li class="relative">
          <span class="absolute -left-[31px] top-1.5 size-2.5 rounded-full bg-primary-400 ring-4 ring-white dark:ring-ink" />
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Frontend Web Developer</h3>
            <span class="text-sm font-medium text-primary-600 dark:text-primary-400">巨兆數位有限公司</span>
          </div>
          <p class="mt-1 text-sm text-gray-400 dark:text-gray-500">
            2022/04 – 現在 ・ 全職 ・ 台中（遠距）
          </p>
          <ul class="mt-4 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            <li class="flex gap-2">
              <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
              <span>使用 <strong class="font-medium text-gray-900 dark:text-white">RxJS</strong> 提升網頁效能，改善使用者體驗</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
              <span>建立<strong class="font-medium text-gray-900 dark:text-white">多國語系</strong>，根據使用者裝置製作響應式頁面</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
              <span>串接 <strong class="font-medium text-gray-900 dark:text-white">LINE、Google 第三方登入</strong></span>
            </li>
            <li class="flex gap-2">
              <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
              <span>以 <strong class="font-medium text-gray-900 dark:text-white">Meta Pixel、Google Tag Manager</strong> 追蹤使用者行為並分析數據</span>
            </li>
            <li class="flex gap-2">
              <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
              <span>大量圖片與長列表場景導入 <strong class="font-medium text-gray-900 dark:text-white">Lazy Loading、Virtual List</strong></span>
            </li>
          </ul>

          <!-- 代表專案：LINE H5 娛樂平台 -->
          <div class="mt-5 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900/50">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">代表專案</p>
            <h4 class="mt-1.5 font-semibold text-gray-900 dark:text-white">LINE H5 娛樂平台</h4>
            <div class="mt-2.5 flex flex-wrap gap-1.5">
              <span
                v-for="tech in highlightStack"
                :key="tech"
                class="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950/60 dark:text-primary-400"
              >
                {{ tech }}
              </span>
            </div>
            <p class="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              基於 LINE 的線上娛樂平台完整 H5 應用：遊戲、金流、公會、推薦分潤、即時聊天。
              亮點：GTM/GA4/Meta Pixel 事件追蹤與轉換量測；Service Worker 差異化快取
              （hashed 資源 network-first、靜態資源 cache-first、index.html 強制更新）；
              PWA 加入主畫面；瀏覽器端圖片壓縮與自訂 lazy-load 指令；
              Terser 清除 console 與 <code class="rounded bg-gray-100 px-1 text-xs dark:bg-gray-800">{{ importMetaGlob }}</code> 自動註冊 + code splitting。
            </p>
          </div>
        </li>

        <!-- 創視科技 -->
        <li class="relative">
          <span class="absolute -left-[31px] top-1.5 size-2.5 rounded-full bg-gray-300 ring-4 ring-white dark:bg-gray-700 dark:ring-ink" />
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Frontend Web Developer</h3>
            <span class="text-sm font-medium text-primary-600 dark:text-primary-400">創視科技有限公司</span>
          </div>
          <p class="mt-1 text-sm text-gray-400 dark:text-gray-500">
            2021/02 – 2022/03 ・ 全職 ・ 台中
          </p>
          <ul class="mt-4 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            <li class="flex gap-2">
              <span class="mt-0.5 text-primary-500 dark:text-primary-400">▸</span>
              <span>以 <strong class="font-medium text-gray-900 dark:text-white">PHP、Vue 2、uni-app</strong> 開發與維護專案</span>
            </li>
          </ul>
        </li>
      </ol>
    </section>

  </div>
</template>
