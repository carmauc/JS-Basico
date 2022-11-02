const boton = document.querySelector("#btn")

boton.addEventListener ("click", () =>{
    alert ("click en el boton")
})

$("#btn").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})