<script setup lang="ts">
const route = useRoute()
const { notes, asyncData } = useNotes()
await asyncData

const note = computed(() =>
  notes.value.find(item => item.id === Number(route.params.id)),
)

if (!note.value) {
  throw createError({ statusCode: 404, statusMessage: '找不到這篇筆記', fatal: true })
}

const rendered = computed(() => note.value ? renderMarkdown(note.value.body) : '')

useSeoMeta({
  title: computed(() => note.value ? `${note.value.title} — David's Notes` : "David's Notes"),
})
</script>

<template>
  <article v-if="note" class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
    <NuxtLink
      to="/notes"
      class="mb-8 inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
    >
      ← 回筆記列表
    </NuxtLink>

    <header class="mb-10">
      <div class="mb-4 flex flex-wrap items-center gap-2">
        <NuxtLink
          v-for="label in note.labels"
          :key="label.name"
          :to="{ path: '/notes', query: { tag: label.name } }"
          class="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 transition hover:bg-primary-100 dark:bg-primary-950/60 dark:text-primary-400 dark:hover:bg-primary-950"
        >
          {{ label.name }}
        </NuxtLink>
      </div>
      <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
        {{ note.title }}
      </h1>
      <p class="mt-4 text-sm text-gray-400 dark:text-gray-500">
        發布於 {{ formatDate(note.createdAt) }}
        <template v-if="note.updatedAt !== note.createdAt">
          ・更新於 {{ formatDate(note.updatedAt) }}
        </template>
        ・<a :href="note.url" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:underline dark:text-primary-400">在 GitHub 上查看</a>
      </p>
    </header>

    <div
      class="prose prose-gray max-w-none dark:prose-invert prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-primary-400 prose-img:rounded-xl"
      v-html="rendered"
    />
  </article>
  <div v-else class="py-32 text-center text-gray-400">載入中⋯</div>
</template>
