// 1. STRING - Nome de usuário, mensagens, textos.
let usuario = "João";
let mensagem = "Bem-vindo ao sistema! " + usuario + "!";
console.log(mensagem);

// 2. NUMBER - Idade, notas, cálculos.
let preco = 19.99;
let quantidade = 3;
let total = preco * quantidade;
console.log("Total: R$ " + total);

// 3. BIGINT - Trabalhar com valores financeiros enormes ou IDs.
let idBlockchain = 1234567890123456789012345678901234567890n;
console.log("ID Blockchain: " + idBlockchain);

// 4. BOOLEAN - Controle de Fluxo, condições, status.
let estaLogado = true;
if (estaLogado) {
    console.log("Usuário está logado.");
} else {
    console.log("Usuário não está logado.");
}

// 5. UNDEFINED - Variáveis ainda não definida.
let telefone;
console.log("Telefone indefinido: " + telefone);

// 6. SYMBOL - Usado para criar identificadores (ex: chave de objeto).
let chave1 = Symbol("chaveAPI");
let chave2 = Symbol("chaveAPI");
console.log(chave1 === chave2); // false, símbolos são únicos

// 7. NULL - Valor intencionalmente vazio (ex: campo sem resposta).
let resposta = null;
console.log("Resposta ainda não recebida " + resposta);

//Exemplo prático combinado
let aluno = {
    nome: "Lucas",
    idade: 18,
    matricula: 12345678901234567890n,
    ativo: true,
    telefone: undefined,
    token: Symbol("token"),
    responsavel: null
};
console.log("Objeto aluno com diferentes tipos de primitivos:", aluno);