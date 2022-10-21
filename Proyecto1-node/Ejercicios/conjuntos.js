// - Un nuevo Set con los nombres de tu familia
const nombresfamilia = ["Martha","Carmen", "Gustavo", "Juan Jose"]
const familia = new Set(nombresfamilia)
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add("Mauricio")
familia.add("Mauricio")
console.log(familia);
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add("javascript")