let alumno = {
    id: 321149170,
    nombre: "Gabriel",
    primerApellido: "Gonzalez",
    segundoApellido: "Lopez",
    edad: 20,
    titulado: false,
    egresado: {
        estado: false
    },
    domicilio: {
        calle: {
            callejon: "colima",
            numero: 7,
            
        },
        numero: "24B",
        colonia: "San Lorenzo",
        municipio: "Coacalco",
        estado: "EDO MEX",
        pais: "México",
        continenete: "Latinoamérica"
    },
    kinder: {
        nombre: "EDmundo de amsis",
        actividadPrimerdia: function () {
            console.log("correr");
        },
        actividadRecurrente: function () {
            console.log("cantar canciones");
        },
        datosMiss: {
            nombre: "Paola",
            edad: 29,
            estudios: "Docorado"
        }
    },
    primaria: {
        nombre: "Benito Juárez",
        comer(comida) {
            return `ahora está comiendo ${comida}`;
        },
        mensaje(mensajeAlumno) {
            return `${this.nombre} es la Primaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
}
console.log(alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Biblioteca"));
console.log(alumno.primaria.comer("Manzana"));
