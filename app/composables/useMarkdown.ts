import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/common'

const md: MarkdownIt = new MarkdownIt({
  html: false, // 筆記來自 GitHub Issues，關閉 raw HTML 以避免 XSS
  linkify: true,
  highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre><code class="hljs language-${lang}">${hljs.highlight(code, { language: lang }).value}</code></pre>`
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
