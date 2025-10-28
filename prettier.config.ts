import { type Config } from 'prettier';

const config: Config = {
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
