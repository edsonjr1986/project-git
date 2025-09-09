// Declaração dos lados do triângulo
let ladoA = 3;
let ladoB = 5;
let ladoC = 4;

// Verificação se é um triângulo válido
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    // Classificação do triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo Equilátero");
    } else {
        if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("Triângulo Isósceles");
        } else {
            console.log("Triângulo Escaleno");
        }
    }
} else {
    console.log("Não é um triângulo");
}
