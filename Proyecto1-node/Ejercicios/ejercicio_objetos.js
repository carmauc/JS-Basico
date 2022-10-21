
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datospersonales = {
    nombre: "Mauricio",
    apellido: "Correa",
    edad: 28,
    altura: "1.80",
    eresdesarrollador: true,

}

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = datospersonales.edad
console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = {...datospersonales}
lista.nombre = "Mateo"
lista.apellido= "Vallejo"
lista.edad= 30,
lista.eresdesarrollador= false

const lista2 = {...datospersonales}
lista2.nombre = "Samir"
lista2.apellido= "Trejos"
lista2.edad= 29,
lista2.eresdesarrollador= false

const listaamigos = [datospersonales,lista,lista2]

console.log(listaamigos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

listaamigos.sort((a, b) => b.edad - a.edad)
console.log(listaamigos);
