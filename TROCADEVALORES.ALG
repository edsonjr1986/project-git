Algoritmo "TrocaDeValores"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : MAX MULLER JUSTINO DOS SANTOS
// Descrição   : Troca de Valores
// Autor(a)    : Edson Junior
// Data atual  : 02/09/2025
Var
num1, num2, aux: inteiro


Inicio
escreval("**Troca de Valores**")

escreva("Digite o valor de A: ")
   leia(num1)

   escreva("Digite o valor de B: ")
   leia(num2)

   escreval("Antes da troca: valor de A é = ", num1, ", valor de B é = ", num2)

   aux := num1
   num1 := num2
   num2 := aux

   escreval("Depois da troca: valor de A é = ", num1, ", valor de B é = ", num2)

Fimalgoritmo