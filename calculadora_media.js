let nota1 = 70;
let nota2 = 85;
let nota3 = 60;

let media = (nota1 + nota2 + nota3) / 3;
console.log("Média: " + media.toFixed(2));

if (media >= 70) {
    console.log("Aprovado");
} else if (media >= 50 && media < 70) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

console.log("Volte Sempre!");