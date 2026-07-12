import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    // 元件測試檔用 // @vitest-environment nuxt 個別切換
  },
})
