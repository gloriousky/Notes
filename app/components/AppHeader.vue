<script setup lang="ts">
const { categories } = useNotes()
const notesMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-gray-200/60 bg-white/80 backdrop-blur dark:border-gray-800/60 dark:bg-ink/80">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
      <NuxtLink to="/" class="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
        <span class="flex size-7 items-center justify-center rounded-lg bg-primary-400 font-mono text-sm text-ink">D</span>
        David's Notes
      </NuxtLink>

      <div class="flex items-center gap-1 sm:gap-2">
        <NuxtLink
          to="/"
          class="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/60 dark:hover:text-white"
          active-class="!text-primary-500 dark:!text-primary-400"
        >
          首頁
        </NuxtLink>

        <!-- 筆記：滑鼠移入展開子分類 -->
        <div
          class="relative"
          @mouseenter="notesMenuOpen = true"
          @mouseleave="notesMenuOpen = false"
        >
          <NuxtLink
            to="/notes"
            class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/60 dark:hover:text-white"
            active-class="!text-primary-500 dark:!text-primary-400"
          >
            筆記
            <svg class="size-3.5 transition-transform" :class="notesMenuOpen && 'rotate-180'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </NuxtLink>

          <Transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="scale-95 opacity-0"
            leave-active-class="transition duration-75 ease-in"
            leave-to-class="scale-95 opacity-0"
          >
            <div
              v-if="notesMenuOpen && categories.length"
              class="absolute right-0 top-full w-48 pt-2"
            >
              <div class="overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <NuxtLink
                  to="/notes"
                  class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  @click="notesMenuOpen = false"
                >
                  全部筆記
                </NuxtLink>
                <NuxtLink
                  v-for="category in categories"
                  :key="category.name"
                  :to="{ path: '/notes', query: { tag: category.name } }"
                  class="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  @click="notesMenuOpen = false"
                >
                  {{ category.name }}
                  <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400">{{ category.count }}</span>
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>

        <span class="mx-1 hidden h-5 w-px bg-gray-200 dark:bg-gray-800 sm:block" />

        <ColorModeToggle />

        <a
          href="https://github.com/gloriousky"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/60 dark:hover:text-white"
        >
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </a>
      </div>
    </nav>
  </header>
</template>
