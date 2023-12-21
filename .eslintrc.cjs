//ts-check

/**
 * @type {import("eslint").ESLint.ConfigData}
 * @see https://eslint.bootcss.com/docs/rules/
 */
const config = {
  env: {
    browser: true,
    es2024: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    // jsxPragma: 'React',
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // eslint (http://eslint.bootcss.com/docs/rules/)
    'no-var': 'error', //要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typescript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 禁止定义未使用的变量，除非以 _ 开头
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn', // 禁止使用 TypeScript 中的注释，以减少代码中可能导致问题的某些使用方式。例如，一些特定的 // @ts-ignore 注释

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 "-" 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止 <script setup> 使用的变量 <template> 被标记未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop 的改变
    'vue/attribute-hyphenation': 'off', // 对模板的自定义组件强制执行属性命名样式
  },
}

module.exports = config
