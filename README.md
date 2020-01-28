# API ANTECIPAG

Este é o projeto API Teste

## Iniciando

Abaixo segue todos os passos para colocar o ambiente de desenvolvimento configurado e rodando.

### Pré Requisitos

Abaixo segue os comandos para instalar tudo que é necessário para o projeto:

É necessário ter a última versão do Node e NPM instalados:

https://nodejs.org/en/

```
npm install -g nodemon
npm install -g sequelize-cli

git clone 
npm install
```

### Instalando

Segue abaixo um passo a passo para instalar tudo que for necessário para rodar localmente o projeto:

Necessário ter o Postgres SQL instalado na sua máquina e dois bancos de dados criados:

- test
- development

Após isso necessário criar o usuário `development` com a senha `{senha}` e dar permissão total aos bancos.

```
grant all privileges on database development to development;

grant all privileges on database test to development;
```

É Necessário ter uma IDE com compatibilidade com ESLint, recomendado o uso do [VSCode](https://code.visualstudio.com/)

Após isso para rodar o projeto, dentro da pasta, execute o seguinte comando:

```
npm run dev
```

## Executando Testes

Execute o seguinte comando para rodas a suíte de testes do projeto e obter o feedback de cobertura:

```
npm run test
```

### Code Style

Para este projeto está sendo usado ES6 com suporte para o ES5,e utilizando o style guide do [AirBnB](https://github.com/airbnb/javascript)


## Deploy

TODO
