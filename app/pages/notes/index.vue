<script setup lang="ts">
const route = useRoute()
const { notes, categories, pending, error } = useNotes()

const activeTag = computed(() => {
  const tag = route.query.tag
  return typeof tag === 'string' && tag.length ? tag : null
})

const filteredNotes = computed(() =>
  activeTag.value
    ? notes.value.filter(note => note.labels.some(label => label.name === activeTag.value))
    : notes.value,
)

useSeoMeta({
  title: computed(() => activeTag.value ? `${activeTag.value} 筆記 — David's Notes` : "筆記 — David's Notes"),
  description: '所有前端開發筆記，依分類瀏覽。',
})
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">筆記</h1>
    <p class="mt-2 text-gray-500 dark:text-gray-400">
      整理自 GitHub Issues，點分類篩選。
    </p>

    <!-- 分類 pills -->
    <div class="mt-8 flex flex-wrap gap-2">
      <NuxtLink
        to="/notes"
        class="rounded-full border px-4 py-1.5 text-sm font-medium transition"
        :class="activeTag === null
          ? 'border-primary-400 bg-primary-400 text-ink'
          : 'border-gray-300 text-gray-600 hover:border-primary-400 hover:text-primary-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-primary-400'"
      >
        全部（{{ notes.length }}）
      </NuxtLink>
      <NuxtLink
        v-for="category in categories"
        :key="category.name"
        :to="{ path: '/notes', query: { tag: category.name } }"
        class="rounded-full border px-4 py-1.5 text-sm font-medium transition"
        :class="activeTag === category.name
          ? 'border-primary-400 bg-primary-400 text-ink'
          : 'border-gray-300 text-gray-600 hover:border-primary-400 hover:text-primary-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-primary-400'"
      >
        {{ category.name }}（{{ category.count }}）
      </NuxtLink>
    </div>

    <div v-if="pending" class="py-20 text-center text-gray-400">載入中⋯</div>
    <div v-else-if="error" class="py-20 text-center text-red-500">
      筆記載入失敗，稍後再試或直接到
      <a href="https://github.com/gloriousky/Notes/issues" target="_blank" rel="noopener noreferrer" class="underline">GitHub Issues</a> 查看。
    </div>
    <div v-else-if="!filteredNotes.length" class="py-20 text-center text-gray-400">
      這個分類還沒有筆記。
    </div>
    <div v-else class="mt-10 grid gap-5 sm:grid-cols-2">
      <NoteCard v-for="note in filteredNotes" :key="note.id" :note="note" />
    </div>
  </div>
</template>
