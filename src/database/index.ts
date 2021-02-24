import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async(): Promise<Connection> => {
    //Busca todas as informacoes que estao sendo usadas na conexao padrao
    const defaultOptions = await getConnectionOptions();

    //Testa se a variavel passada no comando para rodar a aplicacao eh de 'test', caso seja, cria a conexao com o banco de testes, caso contrario, cria a conexao com o banco padrao
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? './src/database/database.test.sqlite' : defaultOptions.database,
        })
    )
}
