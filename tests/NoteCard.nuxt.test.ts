// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import NoteCard from '../app/components/NoteCard.vue'
import type { Note } from '../shared/types'

const note: Note = {
  id: 4,
  title: 'Service Worker 的原理與應用',
  body: '### 什麼是 Service Worker？\n\nService Worker 是介於**瀏覽器與網路之間的 Proxy**。\n\n```javascript\nconst a = 1\n```',
  labels: [{ name: 'Front-End', color: '1d76db' }],
  createdAt: '2026-07-12T13:45:15Z',
  updatedAt: '2026-07-12T13:45:15Z',
  url: 'https://github.com/gloriousky/Notes/issues/4',
}

describe('NoteCard', () => {
  it('顯示標題與 label', async () => {
    const wrapper = await mountSuspended(NoteCard, { props: { note } })
    expect(wrapper.text()).toContain('Service Worker 的原理與應用')
    expect(wrapper.text()).toContain('Front-End')
  })

  it('摘要去除 markdown 語法（不應出現 ###、**、code fence）', async () => {
    const wrapper = await mountSuspended(NoteCard, { props: { note } })
    const text = wrapper.text()
    expect(text).not.toContain('###')
    expect(text).not.toContain('**')
    expect(text).not.toContain('```')
  })

  it('連結指向筆記內文頁', async () => {
    const wrapper = await mountSuspended(NoteCard, { props: { note } })
    expect(wrapper.attributes('href')).toBe('/notes/4')
  })
})
