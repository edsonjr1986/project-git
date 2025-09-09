const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const senhaCorreta = "secreta123";
let tentativas = 0;
const maxTentativas = 3;

function pedirSenha() {
    if (tentativas >= maxTentativas) {
        console.log("Número máximo de tentativas excedido.");
        rl.close();
        return;
    }

    rl.question("Digite sua senha: ", (senhaDigitada) => {
        if (senhaDigitada === senhaCorreta) {
            console.log("Senha correta");
            rl.close();
        } else {
            tentativas++;
            console.log("Senha incorreta. Tentativas restantes:", maxTentativas - tentativas);
            pedirSenha();
        }
    });
}

console.log("Bem-vindo!");
pedirSenha();