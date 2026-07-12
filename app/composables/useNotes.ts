import type { Note } from '~~/shared/types'

export function useNotes() {
  const asyncData = useFetch<Note[]>('/api/notes', {
    key: 'notes',
    default: () => [],
  })
  const { data: notes, pending, error } = asyncData

  const categories = computed(() => {
    const map = new Map<string, number>()
    for (const note of notes.value) {
      for (const label of note.labels) {
        map.set(label.name, (map.get(label.name) ?? 0) + 1)
      }
    }
    return [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }))
  })

  // asyncData 可 await：需要在 SSR 期間確保資料就緒的頁面（如筆記內文的 404 判斷）使用
  return { notes, categories, pending, error, asyncData }
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
