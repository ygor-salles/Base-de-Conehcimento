## Backend com NodeJS - JavaScript

* Instalar o knex de forma global(caso não tenha)
```bash
npm i -g knex
```

* Rodar as migrations:
```bash
knex migrate:latest
```

* Criar Migration:
```bash
knex migrate: make create_table_nameTable
```

* Inicializar knex:
```bash
knex init
```

* É necessário preencher os campos do arquivo .env

### Instalar dependencias, rodar projeto:
```bash
npm install
```

```bash
npm start
```

### Porta:
localhost 3000