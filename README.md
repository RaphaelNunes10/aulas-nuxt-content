# Aulas via Nuxt Content

## Instruções

- Instalar o pacote de extensões [Nuxt Extension Pack](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxt-vscode-extentions) no VSCode.
- instalar os pacotes NPM do projeto (npm install | yarn i | pnpm i)
- Rodar o projeto através do script "dev" (npm run dev | yarn dev | pnpm dev)
- Adicionar os conteúdos das aulas em arquivos .md dentro da pasta "content" e dentro de suas respectivas pastas de matéria e módulo.
- Customizar os componentes de página dentro da pasta "pages" e utilizar o componente "app.vue" para acrescentar elementos e outros componentes para montar um layout padrão para todas as páginas. 
- Se necessário, acrescentar componentes mistos reutilizáveis dentro da pasta "components", que contém um componente estilo card apenas de exemplo.
- Se necessário, utilizar composables que funcionam assim como um script reativo do Vue que armazena dados de forma global e pode ser reutilizado dentro de qualquer componente SFC (.vue) e/ou funções utilitárias da pasta "utils" que são automaticamente importadas pelo Nuxt (mais instruções na composable "conteudo" da pasta "composables")

O projeto é extremamente detalhado e um tanto complexo apenas para poder exemplificar diversas técnicas de reutilização de código e outros conceitos do Vue e Nuxt.  
Aconselho verificar cada arquivo por comentários que explicam seu funcionamento.

A estrutura de pastas dentro da raíz do projeto tem um padrão expecífico definido pelo Nuxt. Aconselho estudar a [estrutura de pastas do Nuxt](https://nuxt.com/docs/guide/directory-structure/app) para entender o propósito de cada pasta.

Aconselho utilizar o pacote de extensões do Nuxt no VSCode para poder acrescentar pastas do Nuxt ao clicar com o botão direito do mouse sob a raíz do projeto e sob cada pasta para adicionar diferentes componentes com sua extrutura inicial já pré montada.

## Documentação

[Vue.js](https://pt.vuejs.org/)  
[Nuxt](https://nuxt.com/)  
[Nuxt Content](https://content.nuxt.com/)  
[Tailwind](https://tailwindcss.com/docs/guides/nuxtjs)  