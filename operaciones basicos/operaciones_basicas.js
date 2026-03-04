function operacionesBasicas() {
    // Pedir datos
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    // Operaciones
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num2 !== 0 ? num1 / num2 : "No se puede dividir entre 0";

    // Mostrar resultados
    console.log("Resultados:");
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
}
operacionesBasicas();