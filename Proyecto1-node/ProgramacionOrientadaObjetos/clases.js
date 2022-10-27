class Persona {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nueva_persona = new Persona("Gorka", 34, true)
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 // inicializar
console.log(typeof numero)

let persona_2 = new Persona("Maria", 34, false) // instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)

// instanceof -> similar a typeof pero para clases


//!     ATRIBUTOS PRIVADOS Y PROTEGIDOS 
class Persona {
    // Private -> #
    // Private -> Sólo se puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protected -> _
    // Protected -> Sólo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nom, edad) {
        this.#nombre = nom
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }

    obtenNombre() { // Función getter -> Nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Gorka", 70)
// console.log(persona)
// console.log(persona.nombre)
// persona.saludo()
// console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad())
// console.log(persona._isDeveloper)

//! GETTERS Y SETTERS

// Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(15)
console.log(persona.getEdad())


//! Inheritance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    saludo() { // Override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Gorka", 34, "Javascript")
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo => Varias formas