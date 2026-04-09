const boton = document.querySelector("#generar");
const lista = document.querySelector("#lista");
const input = document.querySelector("#cantidad");

boton.addEventListener("click", () => {
    const cantidad = parseInt(input.value);

    if (cantidad <= 0 || isNaN(cantidad)) return;

    for (let i = 1 ; i <= cantidad; i++) {
        const li = document.createElement("li");
        li.textContent = "Elemento " + i;
        lista.appendChild(li);
    }

    input.value = "";
});