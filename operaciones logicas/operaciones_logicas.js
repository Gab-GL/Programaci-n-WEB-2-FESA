function operacionesLogicas() {

let valor1 = prompt("Ingresa el primer valor (0 o 1):");
let valor2 = prompt("Ingresa el segundo valor (0 o 1):");
valor1 = Number(valor1);
valor2 = Number(valor2);


let resultadoAND = valor1 && valor2;
let resultadoOR = valor1 || valor2;

console.log("Valor 1:", valor1);
console.log("Valor 2:", valor2);
console.log("AND (valor1 && valor2):", resultadoAND);
console.log("OR (valor1 || valor2):", resultadoOR);

}

operacionesLogicas();
