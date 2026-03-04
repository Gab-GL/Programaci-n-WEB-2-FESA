function compararNumeros() {

// Pedir datos
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Comparación
if (num1 > num2) {
console.log("El  número " + num1 + " es mayor " + num2);
} else if (num1 < num2) {
console.log("El  número " +num2 +  " es mayor que " + num1);
} else {
console.log("Ambos números son iguales.");
}

}
compararNumeros();