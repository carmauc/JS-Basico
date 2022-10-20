// Cómo trabajar con listas (arrays, arreglos, vectores...)
let var1 = { id: false }
let array = [1, "hola", false, { id: 5 }, null, undefined, var1]

console.log(array)

// Acceder a los valores de un array a través de su posición
// array[indice]  => 0, 1, 2, 3, 4, 5, ....
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

// Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array

// Valores al final -> Push
array.push("final", 45, 100, false)
console.log(array)

// Valores al principio -> Unshift
array.unshift("inicio", 87, 99)
console.log(array)

// Métodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array


const array2 = [1, 3, "hola", false]
// Valores al final -> Pop
array2.pop()
console.log(array2)

// Valores al principio -> Shift
array2.shift()
console.log(array2)

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array0 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array0)

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola")
console.log(array0)

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array0)

// Cómo unir dos listas .concat(lista2)
const lista1 = ["hola", 2, false, null]
const lista2 = ["adiós", 8, true, undefined]

console.log(lista1.concat(lista2))
console.log(lista1)

const lista3 = lista1.concat(lista2)
console.log(lista3)

// Cómo unir dos listas con el factor de propagación
console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4)

// ERROR!! Mal entendido el concepto del factor de propagación
const lista5 = [lista1, lista2]
console.log(lista5)

// Iterar los valores de una lista
const array5 = ["hola", 2, 5, 90, false, undefined]

// Forma antigua (poco eficiente)
for (let i = 0; i < array5.length; i++) {
    console.log(array5[i])
}

// Forma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma)

// Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})

console.log(variable)

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Miguel") {
//         return true
//     }
// })
const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad)

//! Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array3 = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array3.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray = array3.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

const listaObjetos2 = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })
const personasMayores = listaObjetos2.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos2.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista)

const valores = [3, 56, 23, 5, 90, 100]

const suma2 = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma2)

//! ORDENAR LISTAS
// .sort() -> MODIFICA EL ARRAY

console.log(array)

array.sort((a, b) => {
    if (a < b) {
        return +1
    } else if (a > b) {
        return -1
    } else { // a === b
        return 0
    }
})

console.log(array)

// Ordenar únicamente arrays numéricos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

arrayNumerico.sort((a, b) => b - a)

console.log(arrayNumerico)

// Interesante en arrays de objetos


// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)

//! COMPARAR LISTAS
// .every()
const array8 = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

// const resultado = array.every(valor => {
//     if (valor > 0) {
//         return true
//     } else {
//         return false
//     }
// })
const resultado = array8.every(valor => valor > 0)

console.log(resultado)


// Cómo podemos comparar listas

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2)

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays(ar1, ar2))

const ar3 = [1, 2, 3, 9]

console.log(compararArrays(ar1, ar3))

// .some()
const array10 = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array10.some(valor => valor < -0)

console.log(res)

const existe = array10.some(valor => valor === 9)

console.log(existe)


//s
const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan")

console.log(existeJuan)

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Gorka"
console.log(str[5])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)