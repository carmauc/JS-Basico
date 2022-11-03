// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function devuelveTrue() {
  return true;
}
// - Una función asíncrona qe utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function damePromesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}
// - Una función generadora de índices pares automáticos

function* idsPares() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}
