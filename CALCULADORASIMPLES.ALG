Algoritmo "CalculadoraSimples"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Max
// Descrição   : Calculadora
// Autor(a)    : Edson Junior
// Data atual  : 02/09/2025
Var

num1, num2: real
soma, subtracao, multiplicacao, divisao: real

Inicio

escreval("*Calculadora Simples*")
escreva("Digite número:")
leia(num1)
escreva("Digite o proximo número:")
leia(num2)

soma <- num1 + num2
subtracao <- num1 - num2
multiplicacao <- num1 * num2
divisao <- num1 / num2

escreval("Resultados:")
escreval("Soma: ",soma)
escreval("Subtração: ",subtracao)
escreval("Multiplicação: ",multiplicacao)
escreval("Divisão: ",divisao)

Fimalgoritmo