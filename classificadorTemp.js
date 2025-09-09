// Arrays vazios para as classificações
let frios = [];
let agradaveis = [];
let quentes = [];

// Array com 12 temperaturas
let temperaturas = [18, 21, 25, 19, 30, 35, 22, 28, 15, 20, 29, 31];

// Laço for para percorrer o array temperaturas
for (let i = 0; i < temperaturas.length; i++) {
  let temp = temperaturas[i];
  
  // Verificar a temperatura e adicionar no array correto
  if (temp < 20) {
    frios.push(temp);
  } else if (temp <= 29) {
    agradaveis.push(temp);
  } else {
    quentes.push(temp);
  }
}

//Exibir os arrays no console
console.log("Temperaturas Frias:", frios);
console.log("Temperaturas Agradáveis:", agradaveis);
console.log("Temperaturas Quentes:", quentes);