# AULA 1

## Packages:
    - express: Package que possibilita a craicao de rotas da aplicacao (http://expressjs.com/)
    - @types/express: package que importa todos os tipos de dados da biblioteca express (!!! utilizado apenas em ambiente de desenvolvimento "-D" !!! ) (https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express)
    - typescript: Package que possibilita trabalharmos com typescript dentro da API (https://www.typescriptlang.org/docs/)
    - ts-node-dev: Package que nos permite "traduzir" sintaxe typescript para o NodeJS

## Conceitos

    Métodos:

        - GET: Método utilizado para buscar informações do servidor;
        - POST: Método utilizado para enviar informações para o servidor;
        - DELETE: Método utilizado para deletar um registro do servidor;
        - PUT: Método utilizado para atualizar um registro dentro do servidor;
        - PATCH: Método utilizado para atualizar um registro específico dentro do servidor;

# AULA 2

## Packages:
    - typeorm: ORM utilizado para comunicacao do banco de dados, escolhido por se comunicar bem com o typescript e ser bem generico, facilitando a mudanca de banco de dados, se necessario;
    - reflect-metadata: Dependencia do typeorm;
    - sqlite3: Banco de dados o qual iremos utilizar, escolhido devido a facilidade de gravar os dados em memoria, excluindo a necessidade de criacao de um banco de dados local;
    - uuid: Package resoponsavel por gerar os ID`s do banco de dados, no proprio codigo
    - @types/uuid: Package com todos os tipos necessarios no package uuid

## Diferentes formas de se comunicar com o banco de dados:
    -Drivers nativos: Menos indicado pela dificuldade no caso de troca de banco de dados usado no projeto, por exemplo, a necessidade de refazer todas as querys;
    -Query builders: Utilizado para "reduzir" a query, mas ainda é necessário escrever alguma query;
    -ORM`s: Abstrai as tabelas do banco em classes, que possuem metodos que facilitam a comunicacao com o banco de dados, reduzindo ainda mais a necessidade de escrita de querys;

## Migrations
    - Criando uma migration: ''' yarn typeorm migration:create -n "NomeDaMigration" '''
    - Rodando as migrations: ''' yarn typeorm migration:run '''
    - Rollback na ultima migration: ''' yarn typeorm migration:revert '''

# AULA 3

## Testes automatizados:
    
### Tipos de testes
    - Testes unitarios: Testes que testam determinada funcionalidade da aplicacao (Geralmente testado criando informacoes fake, apenas para teste)
    - Testes de integracao: Teste que testa todo o fluxo da requisicao e resposta do usuario
    - Testes ponta a ponta: Testa todas as acoes do usuario (Geralmente utilizado no front end)

## Packages
    - jest: Package que sera utilizado para os testes da aplicacao
    - @types/jest: Package com todos os tipos necessarios no package jest
    - ts-jest: Preset utilizado para uso de typescript nos testes 
    - supertest: Package utilizado para auxilio nos testes de integracao com jest
    - @types/supertest: Package com todos os tipos necessarios no package supertest
