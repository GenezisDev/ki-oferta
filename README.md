# Ki-Oferta

> **Projeto em construção.** Este repositório está em desenvolvimento ativo como projeto de estudos (FATEC) e ainda não representa uma versão final.

## Sobre o projeto

O Ki-Oferta é um modelo de aplicação criado com duas frentes de aprendizado em mente:

1. **Desenvolvimento web moderno** — uso de ferramentas atuais de build e um fluxo de trabalho baseado em módulos JavaScript (ES Modules), organização de código em componentes/páginas e boas práticas de estruturação de projeto front-end.
2. **Conceitos de desenvolvimento de aplicativos** — o mesmo código-fonte web é empacotado como um aplicativo mobile nativo (Android/iOS) usando o [Capacitor](https://capacitorjs.com/), permitindo estudar como uma aplicação web se transforma em um app instalável, com acesso a APIs nativas do dispositivo (câmera, splash screen, etc.).

A ideia é usar um único projeto para explorar, ao mesmo tempo, o "mundo web" e o "mundo mobile", entendendo onde as duas abordagens se encontram e onde elas divergem.

## Padrão utilizado

O projeto segue uma estrutura simples de **SPA (Single Page Application) em JavaScript puro (vanilla JS)**, sem frameworks como React, Vue ou Angular. Os principais pontos do padrão são:

- **Roteamento por hash**: a navegação entre telas é controlada pelo hash da URL (`#buscar`, `#mapa`, `#enviar`, etc.), interceptado pelo evento `hashchange` em [src/js/main.js](src/js/main.js).
- **Páginas como módulos**: cada tela vive em seu próprio arquivo dentro de [src/js/paginas/](src/js/paginas/) e exporta um objeto com sua `url` e uma função `pagina()` responsável por renderizar o conteúdo dentro do elemento `#app`.
- **Mapa de rotas central**: [src/js/rotas/rotas.js](src/js/rotas/rotas.js) reúne todas as páginas disponíveis em uma lista única, usada tanto pelo roteador quanto pela navbar.
- **Navbar dinâmica**: o componente em [src/js/navbar/navbar.js](src/js/navbar/navbar.js) é montado a partir do mesmo mapa de rotas, evitando duplicação entre navegação e páginas.
- **Build com Vite**: o [Vite](https://vitejs.dev/) cuida do bundling e do servidor de desenvolvimento, gerando a pasta `dist/` que o Capacitor usa como `webDir` para empacotar o app nativo.

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomendado LTS mais recente)
- npm (instalado junto com o Node.js)

### Passo a passo

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone https://github.com/faustinopsy/ki-oferta
   cd ki-oferta
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o projeto em modo de desenvolvimento (abre no navegador, com hot reload):

   ```bash
   npm run dev
   ```

4. Para gerar a versão de produção (usada também pelo Capacitor):

   ```bash
   npm run build
   ```

5. Para pré-visualizar o build de produção localmente:

   ```bash
   npm run preview
   ```

### Rodando como app nativo (Capacitor)

Este projeto usa o [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app) como base. Para sincronizar o build web com os projetos nativos (Android/iOS), consulte a [documentação do Capacitor](https://capacitorjs.com/docs) — em resumo, após o `npm run build`, é necessário adicionar a plataforma desejada e sincronizar os arquivos web com o projeto nativo antes de rodar em um emulador ou dispositivo.

## Status

Este é um projeto didático em construção. Funcionalidades, estrutura de pastas e padrões podem mudar conforme o aprendizado avança.

## Respostas das questões
A1. O que é o framework e qual abordagem ele segue? 
   O framework escolhido, bulma, é um framework de biblioteca css que funciona a partir de classes, contando com vários componentes e modificadores pra maior customização.
A2. Como você incluiu o framework na página?
   baixei o arquivo zip e, após extrair os arquivos, instalei a folha de estilo css principal na pasta css da página, então importei ao arquivo pela url.
A3. Cite três benefícios que você percebeu ao usar, não apenas os que o site do framework anuncia.
   Aplicar os estilos usando o framework é bem mais rápido, além de os modificadores aumentam ainda mais as possibilidades.
   Poder definir componentes como botões usando os recursos do framework realmente é uma facilidade maior.
   Os recursos de layout ajudam a organizar os elementos da página, diminuindo a quantidade de regras que eu preciso fazer manualmente.
A4. Cite duas limitações ou desvantagens. Exemplos: tamanho do arquivo baixado, aparência genérica, curva de aprendizado, dificuldade para sobrescrever um estilo. 
   A quantidade de linhas de código de cada arquivo torna muito dificil de conseguir se lembrar e acompanhar os recursos, que acaba tirando o propósito de usar o framework, por precisar o tempo todo ficar voltando na documentação pra encontrar o que eu preciso.
   Nos momentos que eu quero trocar cores ou alguma característica da página, ter que ir no arquivo css e procurar manualmente a parte que eu quero fazer diferente é péssimo,, além da dificuldade de sobrescrever caso tivesse usado o framework através de um import. 
A5. Abra o CSS do framework (ou inspecione um elemento no DevTools F12). Ele estiliza usando classes ou IDs? Por que você acha que frameworks preferem um dos dois?
   O bulma utiliza de classes principalmente, a preferência se deve por poder aplicar as mudanças de uma forma mais abrangente a todos os itens que utilizarem da classe, ao invés de por ID que é uma aplicação mais individual.
A6. Fontes: a documentação oficial é obrigatória, mais pelo menos uma outra fonte. Para cada uma: título, endereço e data de acesso. 
   Official Bulma Documentation
   https://bulma.io/documentation/
   15/09/2026