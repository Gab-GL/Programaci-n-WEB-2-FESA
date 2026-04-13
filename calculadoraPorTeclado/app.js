function agregarPantalla(value){
    document.getElementById("pantalla").value += value;

}
function limpiarPantalla(){
    document.getElementById("pantalla").value = "";

}
function calcularResultado(){
    try{
        const resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
    }
    catch(error){

    }
}

//modificar el programa para que al pulsar la tecla del teclado se muestre automaticamete en la pantalla
const input = document.getElementById("pantalla");

document.addEventListener("keydown", function(event) {
    const tecla = event.key;

    const permitidas = "0123456789+-*/. \n";

    if (permitidas.includes(tecla)) {
        input.value += tecla;
    }

    
    if (tecla === "Backspace") {
        input.value = input.value.slice(0, -1);
    }

    if( tecla === "Enter"){
        calcularResultado();
    }

    // Evitar comportamiento por defecto en algunos casos
    event.preventDefault();
});