import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-12',

  runtimeConfig: {
    // NUXT_GITHUB_TOKEN（可選）：拉高 GitHub API rate limit
    githubToken: '',
    // NUXT_GITHUB_API_BASE：測試時可指向 fixture server
    githubApiBase: 'https://api.github.com',
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      title: "David's Notes",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '前端開發筆記：Vue、Nuxt、瀏覽器原理與 Web 效能。' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      script: [
        {
          // 在首次繪製前套用色彩模式，避免深色模式閃爍
          innerHTML: `(function(){try{var m=localStorage.getItem('color-mode');if(m==='dark'||(!m&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          tagPosition: 'head',
        },
      ],
    },
  },

  typescript: {
    strict: true,
  },
})
