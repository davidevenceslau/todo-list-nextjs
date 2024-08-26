<!-- ABOUT THE PROJECT -->
# Lista de Tarefas em NextJs

## Sobre o projeto
O projeto Lista de Tarefas (To-do List), tem como o principal propósito aplicar os novos recursos do Next.js, Tailwind CSS para aplicar estilizações dos templates, boas práticas voltadas padrões, qualidade de código (Código limpo, Princípios SOLID, Design Patterns), performance, segurança e experiência do usuário.

Neste momento está na fase MVP, contemplando as funcionalidades mais básicas, sendo elas: Cadastro de tarefas, Ordernação pelas mais recentes, Marcar tarefas concluídas e Modo Escuro. No decorrer haverá implementações técnicas como Testes Unitários, DevOps etc., e novas funcionalidades serão implementadas, como Remover/editar tarefa, Agrupamento por dia, Categoria/filtro por categoria etc.

Por enquanto está sendo possível o acesso local, porém assim que for desenvolvido o acesso multiusuário, subirei e disponibilizarei em um link público.

- Nota:
Quanto ao layout, me inspirei em um que encontrei na comunidade do Figma, que pode ser utilizado e publicado, link <a href="https://www.figma.com/design/Jqrkvl2WBjzwFHzIayAcG2/Interactive-To-Do-List-Prototype-with-variables-(Community)?node-id=13-1596&t=TKVcEgdj7G00w3di-0" target="_blank">aqui</a>.

<!-- GETTING STARTED -->

### Tecnologias utilizadas:
- [Git](https://git-scm.com).: Sistema de controle de versões distribuído
- [Node](https://nodejs.org/en/).: Ambiente de tempo de execução JavaScript multiplataforma e de código aberto
- [Json Server](https://www.npmjs.com/package/json-server).: Simulador de API RestFull.
- [Next.js 14](https://nextjs.org/).: Framework com utilização do React.js no servidor.
- [Tailwind CSS](https://tailwindcss.com/).: Ferramenta utilitária para estilizações CSS.
- [React.js 18](https://reactjs.org/).: Criação de Interfaces e Componentes
- [Typescript](https://www.typescriptlang.org/).: Extensão do JavaScript, adiciona tipagem estática à linguagem
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).: Ferramenta de análise de código
- [Prettier](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.prettier-vscode).: Ferramenta de análise de código

### Pré requisitos:
- [Node 18/19+](https://nodejs.org);
- (Opcional) [nvm](https://github.com/nvm-sh/nvm): Node version manager (permite instalar múltiplas versões do node e trocá-las ao vivasso);
- É preciso ter ciência do uso do Git, para o controle de versionamento do projeto. 
E recomendado ter o Yarn instalado no projeto, como um gerenciado de pacotes, para que possa aplicar comandos de código de aplicação. 
- Sistema operacional *nix: Linux, macOS ou WSL (compatibilidade no Windows não é garantido).

## Como executar localmente

### 1- Baixar o projeto
Link do repositório para que possa ser feito o clone localmente. 


  ```bash
  # Clone este repositório
  $ git clone https://github.com/davidevenceslau/todo-list-nextjs
  ```

### 2. Instale as dependências:
`yarn install`

### 3. Rodar o Json Server
`yarn mock-api`

### 4. Execute o Projeto:
`yarn dev`