module.exports = {
    semi: true,
    singleQuote: true,
    tabWidth: 3,
    useTabs: true,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '**/*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}