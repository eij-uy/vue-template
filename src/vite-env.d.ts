/// <reference types="vite/client" />

declare module '*.vue'

interface ViteEnv {
  readonly VITE_APP_BASE_API: string
  readonly VITE_APP_PUBLIC_PATH: string
  readonly VITE_BUILD_COMPRESS: string
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
}

interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
