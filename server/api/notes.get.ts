import type { Note } from '~~/shared/types'

interface GithubLabel {
  name: string
  color: string
}

interface GithubIssue {
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

// 筆記來源：GitHub Issues。快取 5 分鐘 + SWR，避免打到 API rate limit。
// 匿名額度為每 IP 60 次/小時，部署在共用 IP 平台時建議設 NUXT_GITHUB_TOKEN
// （fine-grained token 只需 public repo 讀取權）拉高到 5000 次/小時。
export default defineCachedEventHandler(
  async (): Promise<Note[]> => {
    const config = useRuntimeConfig()

    const issues = await $fetch<GithubIssue[]>(
      `${config.githubApiBase}/repos/gloriousky/Notes/issues`,
      {
        query: { state: 'open', per_page: 100 },
        headers: {
          'Accept': 'application/vnd.github+json',
          'User-Agent': 'gloriousky-notes-site',
          ...(config.githubToken
            ? { Authorization: `Bearer ${config.githubToken}` }
            : {}),
        },
      },
    )

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
  },
  { name: 'notes', getKey: () => 'all', maxAge: 300, swr: true },
)
