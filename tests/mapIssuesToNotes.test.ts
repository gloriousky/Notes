import { describe, it, expect } from 'vitest'
import { mapIssuesToNotes, type GithubIssue } from '../shared/mapIssuesToNotes'

function makeIssue(overrides: Partial<GithubIssue> = {}): GithubIssue {
  return {
    number: 1,
    title: '測試筆記',
    body: '內容',
    state: 'open',
    labels: [{ name: 'Vue', color: '0e8a16' }],
    created_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-01-02T00:00:00Z',
    html_url: 'https://github.com/gloriousky/Notes/issues/1',
    ...overrides,
  }
}

describe('mapIssuesToNotes', () => {
  it('把 issue 轉成筆記格式', () => {
    const notes = mapIssuesToNotes([makeIssue()])
    expect(notes).toHaveLength(1)
    expect(notes[0]).toEqual({
      id: 1,
      title: '測試筆記',
      body: '內容',
      labels: [{ name: 'Vue', color: '0e8a16' }],
      createdAt: '2026-01-01T00:00:00Z',
      updatedAt: '2026-01-02T00:00:00Z',
      url: 'https://github.com/gloriousky/Notes/issues/1',
    })
  })

  it('過濾掉沒有內文的 issue（例如只有標題的空 issue）', () => {
    const notes = mapIssuesToNotes([
      makeIssue({ number: 1 }),
      makeIssue({ number: 2, body: null }),
      makeIssue({ number: 3, body: '' }),
    ])
    expect(notes.map(n => n.id)).toEqual([1])
  })

  it('過濾掉 pull request（issues API 會把 PR 混在裡面回傳）', () => {
    const notes = mapIssuesToNotes([
      makeIssue({ number: 1 }),
      makeIssue({ number: 2, pull_request: { url: 'x' } }),
    ])
    expect(notes.map(n => n.id)).toEqual([1])
  })

  it('label 是字串時也能正規化成物件', () => {
    const notes = mapIssuesToNotes([makeIssue({ labels: ['JS'] })])
    expect(notes[0]!.labels).toEqual([{ name: 'JS', color: '' }])
  })

  it('空陣列回空陣列', () => {
    expect(mapIssuesToNotes([])).toEqual([])
  })
})
