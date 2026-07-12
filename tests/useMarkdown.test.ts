import { describe, it, expect } from 'vitest'
import { renderMarkdown } from '../app/composables/useMarkdown'

describe('renderMarkdown', () => {
  it('把 markdown 轉成 HTML', () => {
    const html = renderMarkdown('### 標題\n\n一段 **粗體** 文字')
    expect(html).toContain('<h3>標題</h3>')
    expect(html).toContain('<strong>粗體</strong>')
  })

  it('跳脫 raw HTML，防止 issue 內容注入 XSS', () => {
    const html = renderMarkdown('<script>alert("xss")</script>')
    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
  })

  it('程式碼區塊套用 highlight.js（已知語言）', () => {
    const html = renderMarkdown('```javascript\nconst a = 1\n```')
    expect(html).toContain('class="hljs language-javascript"')
    expect(html).toContain('hljs-keyword')   // const 被上色
  })

  it('未知語言的程式碼區塊仍以跳脫後的純文字輸出', () => {
    const html = renderMarkdown('```notalang\n<b>raw</b>\n```')
    expect(html).toContain('class="hljs"')
    expect(html).toContain('&lt;b&gt;raw&lt;/b&gt;')
  })

  it('連結一律開新分頁並帶 rel 保護', () => {
    const html = renderMarkdown('[Vue 官網](https://vuejs.org)')
    expect(html).toContain('target="_blank"')
    expect(html).toContain('rel="noopener noreferrer"')
    expect(html).toContain('href="https://vuejs.org"')
  })
})
