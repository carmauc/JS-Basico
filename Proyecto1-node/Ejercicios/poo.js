// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:
// - Una variable llamada nombre
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
class Estudiante {
    nombre = "Mauricio"
    asignaturas = ["javascript", "HTML", "CSS"]
    obtendatos(){ 
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }}}

// - Crea una nueva instancia de "Estudiante"
const Estudiante = new estudiante ()
// - Haz la llamada al método obtenDato
console.log(estudiante.obtendatos());