import type { Note } from './types'

export interface GithubLabel {
  name: string
  color: string
}

export interface GithubIssue {
  number: number
  title: string
  body: string | null
  state: string
  labels: (GithubLabel | string)[]
  created_at: string
  updated_at: string
  html_url: string
  pull_request?: unknown
}

/** GitHub issues → 筆記：過濾 PR 與空內容，正規化 label 格式 */
export function mapIssuesToNotes(issues: GithubIssue[]): Note[] {
  return issues
    .filter(issue => !issue.pull_request && issue.body)
    .map(issue => ({
      id: issue.number,
      title: issue.title,
      body: issue.body as string,
      labels: issue.labels.map(label =>
        typeof label === 'string'
          ? { name: label, color: '' }
          : { name: label.name, color: label.color },
      ),
      createdAt: issue.created_at,
      updatedAt: issue.updated_at,
      url: issue.html_url,
    }))
}
