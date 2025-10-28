/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 4,
    plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
    tailwindStylesheet: './src/styles/app.css',
    importOrder: ['^vue$', '^vue-router$', '', '<THIRD_PARTY_MODULES>', '', '^[.]', '', '<TYPES>'],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.9.0',
    importOrderCaseSensitive: true,
};

export default config;
