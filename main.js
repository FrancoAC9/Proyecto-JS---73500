prompt("ingresa un numero");
alert("numero incorrecto");

let emaildelusuario = "jorgeluis@gmail.com";
let nombre = "Jorge";
let password = "cumbia";
let edad = "60";

console.log(nombre);
console.log(password);
console.log(emaildelusuario);
console.log(edad);

edad = 60;
console.log(edad);

let numero = 12;
console.log(numero);

let Nombre_prompt = prompt("ingresa un numero");
console.log(Nombre_prompt);

let numeroincorrecto = true;
let ingresaunnumero = false;
console.log(numeroincorrecto);
console.log(ingresaunnumero);

let saludo = "Hola como estas " + nombre + " todo bien?";
console.log(saludo);

let despedida = `Adios ${password} nos vemos pronto`;
console.log(despedida);

let X = 12;
let Y = 12;
console.log(X == Y);
let A = 13;
let B = 14;
console.log(A == B);
console.log(X != Y);
console.log(X >= Y);
console.log(X <= Y);
console.log(X < Y);
console.log(X > Y);

let temperatura = prompt("ingresa la temperatura");
if (temperatura < 20 && temperatura >= 10) {
  console.log("otoño");
} else if (temperatura >= 20 && temperatura < 30) {
  console.log("primavera");
} else if (temperatura >= 30 && temperatura < 40) {
  console.log("verano");
} else if (temperatura < 10 && temperatura >= 0) {
  console.log("invierno");
} else {
  console.log("alerta de clima extremo");
}

console.log("Inicio de bucle");
for (let i = 20; i < 35; i++) {
  console.log("Ja Ja");
}
console.log("Fin de bucle");
