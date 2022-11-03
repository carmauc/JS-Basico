// - Crea una variable con tu nombre
const nombre = "Mauricio"
// - Crea una variable con tu apellido
const apellido = "Correa"
// - Crea un objeto con tu nombre y tu apellido
const nombrec = {
    nombre: "Carlos",
    apellido: "Correa"
}
// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("objeto1", JSON.stringify (nombrec))
// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem("Objeto1", nombrec)
// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = `nombrecoockie=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado