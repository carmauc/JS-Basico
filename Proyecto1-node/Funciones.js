// Qué son las funciones, cómo se declaran y cómo se utilizan
const nom = "Gorka"

// saludar("Miguel")
saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

////

let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}

////

let persona = { nombre: "Juan", apellido: "González" }
console.log(persona)

saludarPersona(persona)

console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar()

///////

function imprimeNumero(numero = 7) { // Parámetros por defecto
    console.log(numero)
}

imprimeNumero()

/////////

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

/////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)

console.log(s)

//////
let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adiós"
    console.log(variable_interna)
    return a * b
}


console.log(multiplicar(4, 9))


//! Carga y sobrecarga de funciones
function saludar() {
    hola()
}

function hola() {
    console.log("Hola! Soy la función hola()")
}

saludar()

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

// function recursivo() {
//     recursivo()
// }

// recursivo()


//! Funciones asíncronas

function miAsinc() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

// async await

//! FUNCIONES GENERADORAS

function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)