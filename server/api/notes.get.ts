import type { Note } from '~~/shared/types'
import type { GithubIssue } from '~~/shared/mapIssuesToNotes'
import { mapIssuesToNotes } from '~~/shared/mapIssuesToNotes'

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

    return mapIssuesToNotes(issues)
  },
  { name: 'notes', getKey: () => 'all', maxAge: 300, swr: true },
)
