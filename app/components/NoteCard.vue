<script setup lang="ts">
import type { Note } from '~~/shared/types'

const props = defineProps<{ note: Note }>()

// 去掉 markdown 語法做為摘要
const excerpt = computed(() =>
  props.note.body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*`|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120),
)
</script>

<template>
  <NuxtLink
    :to="`/notes/${note.id}`"
    class="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-primary-400/60 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-primary-400/40"
  >
    <div class="flex flex-wrap items-center gap-2">
      <span
        v-for="label in note.labels"
        :key="label.name"
        class="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950/60 dark:text-primary-400"
      >
        {{ label.name }}
      </span>
      <time class="text-xs text-gray-400 dark:text-gray-500">{{ formatDate(note.createdAt) }}</time>
    </div>
    <h3 class="text-lg font-semibold text-gray-900 transition group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
      {{ note.title }}
    </h3>
    <p class="line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
      {{ excerpt }}…
    </p>
  </NuxtLink>
</template>
