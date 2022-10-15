// Tipos Primitivos

// NUMBER
4;

//STRING
("hola mundo");

// BOOLEANOS
true;
false;

// NULO Y INDEFINIDO
null;
undefined;

// NULL; UNDEFINED;0 == todas son falsy
if (undefined) {
  console.log("cumple");
} else {
  console.log("no cumple");
}

// LISTAS; OBJETOS Y FECHAS
const nombre = "Carlos Mauricio Correa";
const edad = 28;
const eresdesarrollador = true;
const fechadenacimiento = new Date(1994, 8, 3);

const libro = {
  titulo: "conde de montecristo",
  autor: "Alejandro Dumas",
  fecha: "1844",
  URL: "https://es.wikipedia.org/wiki/El_conde_de_Montecristo",
};
const datos = [nombre, edad, eresdesarrollador, fechadenacimiento, libro];
console.log(datos);

//! BIFURCACIONES IF --- ELSE

let saldo = 50;
let efectivo = 100;
if (efectivo < saldo) {
  console.log("puedes sacar dinero");
} else {
  console.log("Saldo Insuficiente");
}

// IF else + if else

let nota = 200;

if (nota === 5) {
    console.log("Enhorabuena, has obtenido un sobresaliente");
} else if (nota === 4) {
    console.log("Buen trabajo, pero podrías haberlo hecho mejor");
} else if (nota === 3) {
    console.log("Has obtenido un suficiente");
} else if (nota === 2) {
    console.log("No has aprobado por poco");
} else if (nota === 1) {
    console.log("No has estudiado nada, trabaja un poquito más para la próxima");
} else {
    console.log("Error, introduce una nota entre el 1 y el 5");
}

// Switch
switch (nota) {
  case 5:
    console.log("muy buen trabajo");
    break;
  case 4:
    console.log("buen trabajo");
    break;
  case 3:
    console.log("pasaste");
    break;
  case 2:
    console.log("regular");
    break;
  case 1:
    console.log("malo");
    break;
  default:
    console.log("error");
    break;
}


//! Comparaciones

// Igualdad
if (5 == 5) {
    console.log("5 es igual a 5")
}

if (5 === 5) {
    console.log("5 es muy igual a 5")
}

let a = 5; //number
console.log(typeof a)
let b = "5"; //String
console.log(typeof b)

// == sólo compara el valor
// === compara el valor y el tipo

if (a == b) {
    console.log("a es igual a b - Débil")  //en este son iguales 
}

if (a === b) {
    console.log("a es igual a b - Fuerte") // en este no son iguales
}

// diferencia
let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d - Débil")
}

if (c !== d) {
    console.log("c es diferente a d - Fuerte")
}


//! Bucles For

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
    // Esto es el bucle
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2)
}

// Estructura for...of
for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

// Estructura for...in
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}
console.log(persona.nombre)  // esto devuelve Gorka

let prop = "edad";
console.log(persona[prop]) // esto devuelve 34

for (let propiedad in persona) {
    console.log(propiedad); // nombre, apellido, edad, ,....
    console.log(persona[propiedad]) // Gorka, Villar, 34
}

// Bucles While

let i = 0;
let max = 10;
while (i < max) {
    console.log(i);
    i++;
}

i = 15;
// Do...while
do {
    console.log("Estoy en el do while")
} while (i < max)

// Casos muy específicos - break, continue
let lista2 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }
    let j = 50;
    const k = 100;
    console.log(lista[i]);
    console.log(j);
    console.log(k);

    if (lista[i] > 5) {
        break;
    }
}


// Cuál es el ámbito de un bucle
console.log(k);
console.log(i);
console.log(j);