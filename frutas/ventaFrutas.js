function ventaFrutas () {
    alert("Tienda de frutas");
    let frutas = [];
    let ventaActiva = true;
    while(ventaActiva){
        frutas.push(prompt("Que fruta desea?"));
        ventaActiva = confirm("desea otra fruta?");
    }
    console.log(frutas);
    alert("Sus frutas son " + frutas)
}
ventaFrutas();