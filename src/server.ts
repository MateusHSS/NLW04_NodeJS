import express from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

// http://localhost:3333/

app.get('/', (req, res) => {
    return res.json({ message: "Hello World - NLW04" });
});

// 1 param => Rota(Recurso API)
// 2 param => req, res

app.post('/', (req, res) => {
    // Recebemos os dados para salvar

    return res.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
