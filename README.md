<h4 align="center">
    :computer: Aplicativo Web para cadastro de artigos com as suas respectivas categorias
</h4>

<p align="center">
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#user-content-clipboard-instruções-backend">Instruções Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
     <a href="#user-content-clipboard-instruções-frontend">Instruções Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ajustes-e-melhorias">Melhorias</a>
</p>

<img alt="Interface" src="https://raw.githubusercontent.com/ygor-salles/Base-de-Conhecimento/master/deviceframes.png" width="100%" align="center">
<div align="center">
    <img alt="Modelagem" src="https://raw.githubusercontent.com/ygor-salles/Base-de-Conhecimento/master/backend/assets/ModeloBanco.PNG" >
</div>
<br/>

---
## 💻 Projeto

* Projeto de conclusão do curso de desenvolvimento web completo 2020 da Udemy e da Cod3r.
https://www.udemy.com/course/curso-web/
* O sistema consite em cadastro e consulta de artigos relacionados as tecnologias da informação no ramo de linguages de programação, frameworks, bibliotecas, etc. No qual os usuários administradores podem cadastrar artigos, categorias desses artigos e até novos usuários administradores ou não adminsitradores.
* Um usuário comum pode se cadastrar no sistema para ter acesso de visualização desses artigos publicados.
* Os artigos podem conter imagens, descrição, títulos e trechos de codificação com formatação de suas respectivas linguagens
- Frontend App em VueJS. Aplicação frontend para registro artigos e suas respectivas categorias, com autenticação de usuário para cadastro dos artigos e categorias
- API em ExpressJS. Aplicação backend para para registro artigos e suas respectivas categorias, com autenticação de usuário para cadastro dos artigos e categorias

<br>

---
## :rocket: Tecnologias

- [JavaScript](https://www.javascript.com/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [knex](https://knexjs.org/)
- [mongoose](https://mongoosejs.com/)
- [PostgresSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [passport-jwt](http://www.passportjs.org/packages/passport-jwt/)
- [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt)
- [VueJS](https://vuejs.org/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Axios](https://axios-http.com/)
- [Bootstrap-Vue](https://bootstrap-vue.org/)
- [fontawesome](https://fontawesome.com/)

---
## :clipboard: Instruções Backend

### VARIÁVEIS DE AMBIENTE

- Criar na raiz da pasta do projeto um arquivo `.env` e preencher as informações conforme se encontra no arquivo `env_file`.

### DOCKER

- Após preenchida as variáveis de ambiente, subir o container do docker pelo terminal com o comando:

```bash
docker-compose up
```

### MONGODB

- Criar um banco mongoDB e inserir a informação de conexão com o mongodb na variável `uri` em `./backend/config/mongodb.js` 

### DEPENDÊNCIAS

- No terminal executar o comando para instalar as dependências:

```bash
npm i
```

### MIGRATIONS

- Instalar o knex de forma global(caso não tenha):

```bash
npm i -g knex
```

- Rodar as migrations

```bash
knex migrate:latest
```

### START

- Finalizado! Basta agora executar a aplicação backend com o seguinte comando:

```bash
npm start
```

- A Api estará rodando na porta 3000. `http://localhost:3000`

----
## ⚙️ Comandos básicos para as migrations

- inicializar Knex

```bash
knex init
```

- Criar uma migration

```bash
knex migrate: make create_table_nameTable
```

- Rodar as migrations

```bash
knex migrate:latest
```

- Desfazer alterações da migration

```bash
knex migrate:rollback
```

```bash
knex migrate:down 001_migration_name.js
```

---
## :clipboard: Instruções Frontend

- Instalar as dependencias

```bash
npm i
```

- Rodar o frontend

```bash
npm run serve
```

- Gerar o build do front

```bash
npm run build
```

- Fixar Lints nos arquivos

```bash
npm run lint
```

----
 ## ✈️ Collection das requisições - insomnia
 
 - As collections das requisições backend se encontram: `./backend/assets/knowledge-Insomnia.json`.

----


## 📌 Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Alterar a forma com que os arquivos são salvos, não salvar arquivos diretamente na coluna do banco de dados mas em outra hospedagem como firebase ou aws
- [ ] Subir o backend no heroku, o front na vercel e o mongodb no mongoAtlas

