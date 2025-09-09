// 1. Crie um array, com pelo menos 10 elementos
let filmes = [
  "O Alto da Compadecida",
  "Clube da Luta",
  "Interestelar",
  "Matrix",
  "Forrest Gump",
  "A Origem",
  "Creed",
  "Gladiador",
  "Os Vingadores",
  "O Senhor dos Anéis"
];

console.log("Array original:", filmes);

// 2a) Exiba o primeiro e o último elemento
console.log("Primeiro filme:", filmes[0]);
console.log("Último filme:", filmes[filmes.length - 1]);

// 2b) Substitua o terceiro elemento por um novo valor
filmes[2] = "Homem-Aranha: Sem Volta para Casa";
console.log("Após substituir o terceiro elemento:", filmes);

// 2c) Adicione um novo elemento ao final com .push()
filmes.push("Barbie");
console.log("Após adicionar um novo filme ao final:", filmes);

// 2d Remova o primeiro elemento com .shift()
filmes.shift();
console.log("Após remover o primeiro filme:", filmes);