/*Exemplos básicos de Arrays*/
//Exemplo1: Declarando e inioiando um array vazio
let meuArrayVazio = [];
console.log('Exemplo 1 - Array Vazio:', meuArrayVazio);

//Exemplo 2: Um array com diferentes tipos
let frutas = ["Banana", "Maça", "Laranja", "Uva"];
console.log("Exemplo 2 - Array de Frutas", frutas);

let numbers = [10,20,30,40,50];
console.log("Exemplo 2 - Array de Números", numbers);

let misto = ["Texto",123,true,null];
console.log("Exemplo 2 - Array Misto", misto);

//Exemplo 3: Acessando Array pelo Índice
console.log("Exemplo 3 - Primeira Fruta: ", frutas[0]);

console.log("Exemplo 3 - Primeira Terceiro: ", numbers[3]);
//Exemplo 4: Modificando elementos do Array
frutas[1] = "Pera";
console.log("Exemplo 4 - Array de Frutas modificado:", frutas);

//Exemplo 5 Obtendo tamanho de um Array
console.log("Exemplo 5 - Tamanho do Array de Frutas:", frutas.length);

//Exemplo 6 - Adicionando elementos ao final de um Array
frutas.push("Morango");
console.log("Exemplo 6 - Array de Frutas adicionando:", frutas);

//Exemplo 7 - Removendo último elemento de um Array
let lastFruit = frutas.pop();
console.log("Exemplo 7 - Array de Frutas removendo:", lastFruit);

//Exemplo 8: Adicionar elemento ao inicio de um Array
frutas.unshift("Abacaxi");
console.log("Exemplo 8 - Array de Frutas adicionando:", frutas);

//Exemplo 9: Remover o primeiro elemento de um Array
let firstFruit = frutas.shift();
console.log("Exemplo 9 - Array de Frutas removendo primeiro item:", firstFruit);

//Exemplo 10: Interando sobre um Array com loop tradicional
console.log("Exemplo 10 - Interando sobre um array de números:");

for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

//Exemplo 11: Iterando sobre um array com for...of(mais moderno e simples)
console.log("Exemplo 11 Iterando sobre um array de frutas com for of");
for (let fruta of frutas) {
    console.log(fruta);
}