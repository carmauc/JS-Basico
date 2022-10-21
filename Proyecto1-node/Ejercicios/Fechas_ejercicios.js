// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

const fecha = new Date ();

// - La fecha de tu nacimiento

const fechanacimiento = new Date (1994,08,3)
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fecha.getTime() > fechanacimiento.getTime() );

// - Una variable que contenga el día de tu nacimiento
const diaNac = fechanacimiento.getDate();
console.log(diaNac);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNac = fechanacimiento.getMonth()+1;
console.log(mesNac);
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const añoN = fechanacimiento.getFullYear();
console.log(añoN);