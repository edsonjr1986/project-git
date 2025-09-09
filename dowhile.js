let senhaCorreta = "secreta123";
let senhaDigitada = "";

do {
    if (senhaDigitada === "") {
        console.log("Por favor, digite sua senha");
        senhaDigitada = "tentativa1"; // Simula entrada do usuário
    } else if (senhaDigitada === "tentativa1") {
        console.log("Tente novamente");
        senhaDigitada = "tentativa2"; // Simula nova tentativa
    } else if (senhaDigitada === "tentativa2") {
        console.log("Tente novamente");
        senhaDigitada = prompt("Digite a senha:"); // Só funciona em navegador
    }
} while (senhaDigitada !== senhaCorreta);

console.log("Senha correta");