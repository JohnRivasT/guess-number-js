console.log("¡Hola desde JavaScript!");

let nombre = "John Rivas";
let edad = 39;
let estaaprendiendo = true

console.log(nombre);
console.log(edad);
console.log(estaaprendiendo);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estaaprendiendo);
console.log( "Mi nombre es",nombre,"tengo",edad,"años");

const curso = "Code 101";
const maxIntentos = 10

console.log("Estoy en el módulo de programación",curso);
console.log(maxIntentos);

// --- Entrada del usuario ---
let nombreUsuario = prompt("¿Cómo te llamas?");
let edadUsuario = prompt("¿Cuántos años tienes?");

// --- Verifica en consola ---
console.log("Nombre:",nombreUsuario);
console.log("Edad:",edadUsuario);
console.log(typeof nombreUsuario);
console.log(typeof edadUsuario);

// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);
console.log('Resta:', a - b);
console.log('Multiplicación:', a * b); 
console.log('División:', a / b); 
console.log('Modulo:', a % b); 

// --- ¿Qué resultado esperas? ---
console.log('5' + 3);    // ¿53 o 8?
console.log(5 + 3);      // ¿53 o 8?
console.log('5' - 3);    // ¿Qué pasa aquí?

// Forma 1: Concatenación con +
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)
let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años.`;
console.log(saludo2);

// --- Calculadora de edad ---
let anioActual = 2026; 
let anioNacimiento = anioActual - Number(edadUsuario);
let mensaje = `Hola ${nombre}, naciste aproximadamente en ${anioNacimiento}`;
console.log(mensaje);

//--Logro adicionales
let ciudad = prompt("¿En qué ciudad vives?");
console.log(ciudad);
let mensaje2 = `Hola ${nombre}, tienes ${edadUsuario} años, vives en ${ciudad} y naciste aproximadamente en ${anioNacimiento}`;
console.log(mensaje2);

//---Convertir  edad a número y operacióm matemática

let anio100 = anioActual + (100 - edad);
console.log(`Cumplirás 100 años en el año ${anio100}`);

//---Condicional
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
