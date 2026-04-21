// Variables globales
let usuarios = [];

// Referencias al DOM
const form = document.getElementById('formUsuario');
const tabla = document.getElementById('tablaUsuarios');
const inputArchivo = document.getElementById('importarJSON');
const BtnDescargar = document.getElementById('descargarBtn');

// Generar ID único
function generarID(){
    return usuarios.length > 0 
        ? Math.max(...usuarios.map(u => u.id)) + 1 
        : 1;
}

// Evento del formulario (AGREGAR USUARIO)
form.addEventListener('submit', function(e) { 
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('correo').value.trim();

    // VALIDACIÓN
    if (nombre === '' || email === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    usuarios.push({ id: generarID(), nombre, email });
    mostrarUsuarios();
    form.reset();
});

// Mostrar usuarios en tabla
function mostrarUsuarios() {
    tabla.innerHTML = '';

    usuarios.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.id}</td>
            <td id="nombre-${index}">${user.nombre}</td>
            <td id="email-${index}">${user.email}</td>
            <td>
                <button onclick="editarUsuario(${index}, this)">Editar</button>
                <button onclick="eliminarUsuario(${index})">Eliminar</button>
            </td>
        `;

        tabla.appendChild(row);
    });
}

// EDITAR / GUARDAR USUARIO
function editarUsuario(index, boton) {
    const nombreTd = document.getElementById(`nombre-${index}`);
    const emailTd = document.getElementById(`email-${index}`);

    if (boton.textContent === 'Editar') {
        // Activar edición
        nombreTd.contentEditable = true;
        emailTd.contentEditable = true;
        nombreTd.focus();
        boton.textContent = 'Guardar';
    } else {
        const nuevoNombre = nombreTd.textContent.trim();
        const nuevoEmail = emailTd.textContent.trim();

        // VALIDACIÓN
        if (nuevoNombre === '' || nuevoEmail === '') {
            alert('No se permiten campos vacíos');
            return;
        }

        usuarios[index].nombre = nuevoNombre;
        usuarios[index].email = nuevoEmail;

        nombreTd.contentEditable = false;
        emailTd.contentEditable = false;

        boton.textContent = 'Editar';
    }
}

// ELIMINAR USUARIO
function eliminarUsuario(index) {
    if(confirm('¿Estás seguro de eliminar este usuario?')) {
        usuarios.splice(index, 1);
        mostrarUsuarios();
    }
}

// IMPORTAR JSON
inputArchivo.addEventListener('change', function(e) {
    const archivo = e.target.files[0];
    const lector = new FileReader();

    lector.onload = function(e) {
        try {
            const datos = JSON.parse(e.target.result);

            if (Array.isArray(datos)) {
                usuarios = datos;
                mostrarUsuarios();
            } else {
                throw new Error('El archivo JSON debe contener un arreglo');
            }
        } catch (error) {
            alert('Error al cargar JSON: ' + error.message);
        }
    };

    lector.readAsText(archivo);
});

// EXPORTAR JSON
BtnDescargar.addEventListener('click', function() {
    const blob = new Blob(
        [JSON.stringify(usuarios, null, 2)],
        { type: 'application/json' }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios.json';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
});
