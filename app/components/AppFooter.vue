<template>
  <footer class="border-t border-gray-200/60 py-8 dark:border-gray-800/60">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-gray-500 dark:text-gray-400 sm:flex-row sm:px-6">
      <p>© {{ new Date().getFullYear() }} David (gloriousky)</p>
      <p class="flex items-center gap-1.5">
        筆記源自
        <a
          href="https://github.com/gloriousky/Notes/issues"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-primary-500 hover:underline dark:text-primary-400"
        >GitHub Issues</a>
      </p>
    </div>
  </footer>
</template>
