import { createIsomorphicFn } from '@tanstack/react-start'

export const getInitialTheme = createIsomorphicFn()
  .server(() => false) // Server always defaults to light
  .client(() => {
    const saved = localStorage.getItem('vendata-theme')
    if (saved !== null) return saved === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })