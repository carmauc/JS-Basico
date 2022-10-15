//! Strings (cadenas de caracteres)


let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola soy un texto con comillas dobles";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"'
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'"
let str_comillas_simples_2 = 'El otro día me dijo literalmente \'ve a sacar la basura\''

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)

// Comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backticks`

console.log(str_backticks)

let nombre = "Iñigo"
let saludo = `Hola, ${nombre} bienvenido`  // con comillas invertidas podemos introducir funciones 

console.log(saludo)

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;

console.log(plantilla)

// Introducción de variables en html
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"]

// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(5, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10)
console.log(substring_str)

let substr_str = str.substr(5, 10)
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Gorka"
console.log(cadena)

// Al utilizar strings sólo reemplaza la primera instancia
console.log(cadena.replace('Gorka', 'Miguel'))

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// Al utilizar strings sólo reemplaza la primera instancia
console.log(texto_largo.replace('los', 'cinco'))

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'))

// replace() usando una expresión Regex para reemplazar espacios en blanco
console.log(texto_largo.replace(/\s+/g, ''))  // > "Textodeejemplo"

// Métodos de cadenas de texto (parte 2)
let input = "ESCORpio"
let db = "escorpio"

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length)
// trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4" // ["H", "o", "l", "a", " ", "s"........]

console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"
console.log(str_5.indexOf("Gorka"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Gorka"))


// Métodos de cadenas de texto (parte 3)
// https://regexr.com
let texto_largo2 = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo2.match(/no/g))

// ¿Existe la palabra dentro del texto?
console.log(texto_largo2.includes("terremoto"))

// Saber si un texto empieza con una palabra
console.log(texto_largo2.startsWith("Tito no es un mono"))

// Saber si un texto termina con otra palabra
console.log(texto_largo2.endsWith("árboles."))