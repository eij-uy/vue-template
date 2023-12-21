import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import viteSetupExtend from 'vite-plugin-vue-setup-extend'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
// unplugin-vue-components
// unplugin-auto-import
// 这两个插件可以实现组件的自动导入

export const createPlugins = (viteEnv: ViteEnv, isBuild) => {
  return [
    vue(),
    eslintPlugin(),
    viteSetupExtend(),
    eslintPlugin(),
    isBuild && createCompression(viteEnv),
    isBuild &&
      visualizer({
        filename: 'stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
  ]
}

/**
 * 根据 compress 配置，生成不同的压缩规则
 * @param viteEnv
 */
const createCompression = (viteEnv: ViteEnv): PluginOption | PluginOption[] => {
  const { VITE_BUILD_COMPRESS = 'none', VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv
  const compressList = VITE_BUILD_COMPRESS.split(',')
  const plugins: PluginOption[] = []
  if (compressList.includes('gzip')) {
    plugins.push(
      viteCompression({
        ext: '.gz',
        algorithm: 'gzip',
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
      }),
    )
  }
  if (compressList.includes('brotli')) {
    plugins.push(
      viteCompression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
      }),
    )
  }

  return plugins
}
