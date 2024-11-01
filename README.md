# pzAstro

## Instalar

`npm create astro@latest -- --template portfolio project-name
`
## Correr en WSL
`npm run dev -- --host 0.0.0.0
`
## Crear nuevo proyecto en WSL

`npm create astro@latest projetName
`
## Instalar tailwind

`npx astro add tailwind
`
## Instalar prettier
`npm install --save-dev prettier prettier-plugin-astro
`
### En prettierrc.cjs

```js  
  module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: true,
  plugins: [require('prettier-plugin-astro')],
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
``` 
## Ejecutar Pruebas
npm test