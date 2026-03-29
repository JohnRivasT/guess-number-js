let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);

if (edad >= 18) {
  alert("Puedes votar 🗳️");
} else {
  alert("Aún no puedes votar 🧒");
}
let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

//---Diagnóstico de temperatura

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}

//---Reto 1: Contraseña segura

let clave = prompt("Crea una contraseña:");
if (clave.length >= 6) {
  alert("Contraseña válida ✅");
} else {
  alert("Contraseña muy corta ❌");
}
//---Reto 2: Clasificar la edad

if (edad < 13) {
  alert("Eres un niño 🧒");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}

//---Reto 3:Combinar condición

if (edad > 18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
}

//--Reto 4: Pedir el total al usuario

let total = parseFloat(prompt("Ingresa el total de tu compra:"));

// Variable para el precio final
let precioFinal;

// Evaluar condiciones
if (total > 100) {
    precioFinal = total * 0.8; // 20% de descuento
} else if (total >= 50 && total <= 100) {
    precioFinal = total * 0.9; // 10% de descuento
} else {
    precioFinal = total; // sin descuento
}

// Mostrar resultado
alert("El precio final es: $" + precioFinal.toFixed(2));

