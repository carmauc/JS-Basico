

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listacompra = ["tomates", "Cebolla", "huevos", "Aceite", "Sal"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listacompra.push("Aceite de Girasol");
console.log(listacompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listacompra.pop();
console.log(listacompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listapeliculas = [
    {titulo: "el señor de los anillos", director: "peter jackson", fecha: 2001},
    {titulo: "El Hobbit", director: "peter jackson", fecha: 2012},
    {titulo: "star wars", director: "George lucas", fecha: 1977},
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasR = listapeliculas.filter(obj => obj.fecha > 2010)
console.log(peliculasR);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listadirectores = listapeliculas.map ((valor) => valor.director);
console.log(listadirectores);


// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listatitulos = listapeliculas.map ((valor) => valor.titulo);
console.log(listatitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

let lista2 = listadirectores.concat(listatitulos);
console.log(lista2);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */

let lista3 = [...listadirectores,...listatitulos];
console.log(lista3);