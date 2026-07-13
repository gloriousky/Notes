import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/common'

// hljs 沒有的語言 → 借用最接近的文法上色（vue SFC 是 HTML 結構，
// xml 文法連 <script>/<style> 內容都會用子語言上色）
const LANG_ALIASES: Record<string, string> = {
  vue: 'xml',
  svelte: 'xml',
}

const md: MarkdownIt = new MarkdownIt({
  html: false, // 筆記來自 GitHub Issues，關閉 raw HTML 以避免 XSS
  linkify: true,
  highlight(code, lang) {
    const resolved = LANG_ALIASES[lang] ?? lang
    if (resolved && hljs.getLanguage(resolved)) {
      try {
        return `<pre><code class="hljs language-${lang}">${hljs.highlight(code, { language: resolved }).value}</code></pre>`
      }
      catch { /* fall through */ }
    }
    return `<pre><code class="hljs">${md.utils.escapeHtml(code)}</code></pre>`
  },
})

// 外部連結一律開新分頁
const defaultLinkRenderer = md.renderer.rules.link_open
  ?? ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  tokens[idx]!.attrSet('target', '_blank')
  tokens[idx]!.attrSet('rel', 'noopener noreferrer')
  return defaultLinkRenderer(tokens, idx, options, env, self)
}

export function renderMarkdown(source: string) {
  return md.render(source)
}
