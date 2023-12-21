import { defineConfig, loadEnv } from 'vite'
import { createPlugins } from './build/createPlugins'
import { resolve } from 'path'
import { createEnv } from './build/createEnv'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const ENV = loadEnv(mode, root)
  const VITE_ENV = createEnv(ENV)

  return {
    plugins: createPlugins(VITE_ENV, command.includes('build')),
    resolve: {
      alias: {
        '@': resolve(root, 'src'),
      },
    },
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: VITE_ENV.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    base: '/' + VITE_ENV.VITE_APP_PUBLIC_PATH,
    build: {
      target: 'es2015',
    },
  }
})
