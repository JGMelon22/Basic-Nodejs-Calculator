const prompt = require('prompt-sync')();

let numeroUm;
let numeroDois;
let operacao;

console.log("=== Calculadora Simples em JS === ");
console.log("Informe o primeiro número: ");
numeroUm = parseFloat(prompt());

console.log("Informe o segundo número: ");
numeroDois = parseFloat(prompt());

console.log("Escolha uma operação a baixo: ");
console.log("Somar: +\nSubtrair: -\nDividir: /\nMultiplicar: +");
console.log("Opção: ");
operacao = prompt();

switch (operacao) {
    case '+':
        console.log(`${numeroUm} + ${numeroDois} = ${(numeroUm + numeroDois).toFixed(2)}`);
        break;

    case "-":
        console.log(`${numeroUm} - ${numeroDois} = ${(numeroUm - numeroDois).toFixed(2)}`);
        break;

    case "*":
        console.log(`${numeroUm} * ${numeroDois} = ${(numeroUm * numeroDois).toFixed(2)}`);
        break;

    case "/":
        console.log(`${numeroUm} / ${numeroDois} = ${(numeroUm / numeroDois).toFixed(2)}`);
        break;

    default:
        console.log("Operação inválida!");
        break;
}