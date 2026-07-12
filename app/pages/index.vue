<script setup lang="ts">
const { notes, categories } = useNotes()

const latestNotes = computed(() => notes.value.slice(0, 3))

useSeoMeta({
  title: "David's Notes — 前端開發筆記",
  description: '前端開發筆記：Vue、Nuxt、瀏覽器原理與 Web 效能。',
})
</script>

<template>
  <div>
    <!-- Hero：仿 nuxt.com 的漸層光暈 + 大標題 -->
    <section class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-96 max-w-3xl rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-400/10"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p class="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-50/50 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-950/40 dark:text-primary-400">
          <span class="size-1.5 rounded-full bg-primary-400" />
          持續更新中
        </p>
        <h1 class="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          寫下來的，<br class="sm:hidden">
          才是<span class="text-primary-500 dark:text-primary-400">自己的</span>
        </h1>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          這裡是 David 的前端開發筆記——Vue、Nuxt、瀏覽器原理與 Web 效能，
          從日常開發與踩坑中整理而成。
        </p>
        <div class="mt-10 flex items-center justify-center gap-4">
          <NuxtLink
            to="/notes"
            class="rounded-lg bg-primary-400 px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-primary-300"
          >
            瀏覽筆記
          </NuxtLink>
          <a
            href="https://github.com/gloriousky"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800/60"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- 最新筆記 -->
    <section v-if="latestNotes.length" class="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div class="mb-8 flex items-end justify-between">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">最新筆記</h2>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            共 {{ notes.length }} 篇，分類：{{ categories.map(c => c.name).join('、') }}
          </p>
        </div>
        <NuxtLink to="/notes" class="text-sm font-medium text-primary-500 hover:underline dark:text-primary-400">
          查看全部 →
        </NuxtLink>
      </div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <NoteCard v-for="note in latestNotes" :key="note.id" :note="note" />
      </div>
    </section>
  </div>
</template>
