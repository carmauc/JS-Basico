let nombre = "Carlos"
let apellido = "Correa"

let estudiante = nombre.concat(" ", apellido)
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus);

let caracteres = estudiante.length
console.log(caracteres);

let primeraletra = nombre.charAt(0)
console.log(primeraletra);

let ultimaletra = apellido.charAt(5)
console.log(ultimaletra);

let eliminarespacio = estudiante.replace(/\s+/g, '')
console.log(eliminarespacio);

let contenido =  estudiante.includes(nombre)
console.log(contenido);
