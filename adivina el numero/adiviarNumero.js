function juegoAdivinar() {

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let maxIntentos = 3;
let adivinado = false;

while (intentos < maxIntentos && !adivinado) {

let intento = parseInt(prompt("Adivina el número (1-10). Intento " + (intentos + 1) + " de 3:"));


intentos++;

if (intento === numeroSecreto) {
console.log("Correcto. Adivinaste el número.");
adivinado = true;
} else if (intento < numeroSecreto) {
console.log("El número es mayor.");
} else {
console.log("El número es menor.");
}

}

if (!adivinado) {
console.log("Fin del juego. El número era:", numeroSecreto);
}

}
juegoAdivinar();