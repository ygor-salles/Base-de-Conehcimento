# knowledge

* Projeto de conclusão do curso de desenvolvimento web completo 2020 da Udemy e da Cod3r.
https://www.udemy.com/course/curso-web/

## Sobre o sistema:

* O sistema consite em cadastro e consulta de artigos relacionados as tecnologias da informação no ramo de linguages de programação, frameworks, bibliotecas, etc. No qual os usuários administradores podem cadastrar artigos, categorias desses artigos e até novos usuários administradores ou não adminsitradores.
* Um usuário comum pode se cadastrar no sistema para ter acesso de visualização desses artigos publicados.
* Os artigos podem conter imagens, descrição, títulos e trechos de codificação com formatação de suas respectivas linguagens

## Tecnologias utilizadas

### Frontend

* Linguagens: Javascript
* Frameworks/libs: VueJS, axios, Bootstrap-vue, font-awesome, highlightjs, liquor-tree, e outras dependencias adicionais do VueJS

### Backend

* Linguagens: Javascript(NodeJS)
* Frameworks/libs: express, knex, mongoose, bcrypt-nodejs, body-parser, consign, cors, jwt, node-schedule, passaport-jwt, pm2, entre outros

### Banco de dados

* PostgreSQL e MongoDB

![Image](https://github.com/ygor-salles/Base-de-Conhecimento/blob/master/backend/assets/ModeloBanco.PNG "Modelagem do sistema")

## instalar depencias e rodar o projeto local:

* banco:
Criar um banco local no postgresql com nome knowledge e no mongodb será criado automaticamente um banco com nome knowledge_stats durante a execução do programa. Ambos bancos devem estar em execução na máquina. No diretório backendDeve ser alterado o nome do arquivo env_file para .env e preenchido os campos em vazio conforme as configurações do banco knowledge no PostgreSQL, além de ser preenchido a chave do authsecret com uma certa complexidade

* backend:
```bash
npm install
```
```bash
npm start
```
* frontend:
```bash
npm install
```
```bash
npm run serve
```


## Testes

* O backend pode ser testado com o Insomnia através do seguinte bkp
https://github.com/ygor-salles/Base-de-Conhecimento/blob/master/backend/assets/knowledge-Insomnia.json
