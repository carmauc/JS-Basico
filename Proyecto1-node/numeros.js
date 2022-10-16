//! Numeros

// Declaración de variables numéricas (enteros y con decimales)
let entero = 5;

console.log(a);

let decimal = 0.1;

console.log(b);

// Precisión
let g = 0.2;

console.log(b + c);  // esto da 0.33333333333333333339 lo cual esta mal. 
// Pequeño truco para obtener valores "reales"
console.log(Math.round((0.1 + 0.2) * 100)/100);

//! Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multiplicación (*)
console.log(a * b);
// División (/)
console.log(a / b);

// Representación de los números en cadenas de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);

// .toFixed(x) - Limitar el número de decimales al valor x
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let m = 1839.1232456789;
let n= 2213556153215;
console.log(m.toFixed(2));
console.log(n.toFixed(2));

// .toPrecision(x) - Limita el número de cifras significativas
console.log(m.toPrecision(7));
console.log(n.toPrecision(7));

console.log(typeof n.toPrecision(3));

// Operador .valueOf() - Obtener valores numéricos a partir de literales
let e = 2;
let f = new Number(3);

console.log(e);
console.log(f);
console.log(e + f);
console.log(e.valueOf() + f.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let s = Number('adios');
console.log(s);
console.log(isNaN(s));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2);

console.log(parseInt(numero))
console.log(parseFloat(numero))

let num3 = 4;
console.log(parseInt(num3))
console.log(parseFloat(num3))

// Números hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));

// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);