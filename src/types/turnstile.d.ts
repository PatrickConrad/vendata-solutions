export {}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string
          callback?: (token: string) => void
          'error-callback'?: () => void
          theme?: 'light' | 'dark' | 'auto',
          size?: 'normal' | 'flexible' | 'compact'
        }
      ) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}
