let numeroSecreto = 7;
let palpite = 0;
console.log("Tente advinhar o número (1 e 10)");

while (palpite !== numeroSecreto){
    if (palpite < numeroSecreto) {
        console.log("Seu palpite(" + (palpite - 1)+ "é muito baixo. Tentando" + palpite + "...");
    } else if (palpite > numeroSecreto){
        palpite--;
        console.log("Seu palpite (" + (palpite + 1)+ "é muito alto. " + palpite + "...");
    }else {
        palpite = 1;
        console.log("Tentando" + palpite + "...");
    }
}