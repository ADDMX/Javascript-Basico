//¿Qué es una variable y para qué sirve?

// una variable es un espacio guardado en la memoria

// ¿Cuál es la diferencia entre declarar e inicializar una variable?

// declarar una variable es darle un nombre a esa variable e inicializarla es darle un valor.

//  ¿Cuál es la diferencia entre sumar números y concatenar strings?

// sumar numeros seria una operacion en javascript ejemplo var suma = 4 + 7; y concatenar es sumar valores ejemplo var alumnos = "pedro" + "jorgre" + "luis";

// ¿Cuál operador me permite sumar o concatenar?

// el signo de "+"

// Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

// Nombre : "Rafael" este valor es de tipo STRING
// Apellido: "Reyes" este valor es de tipo STRING
// Nombre de usuario en Platzi: 45 este valor es de tipo número
// Edad 45 valor de tipo numero
// Correo electrónico: "rafael_2007@hotmail.es" valor de tipo STRING
// Mayor de edad: True : valor de tipo booleano
// Dinero ahorrado: 35000 valor de tipo numero
// Deudas: 3500 valor de tipo numero

// Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

var nombre = "Rafael Ivan";
var apellido = "Reyes Vázquez";
var nombreUsuarioPlatzi = "Rafa009";
var edad = 40;
var correoElectronico = "rafael_2007@hotmail.es";
var mayoDeEdad = true;
var dineroAhorrado = 3500;
var deudas = null;

//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

var NombreCompleto = nombre + apellido;

console.log(NombreCompleto);

var DineroReal = dineroAhorrado - deudas;

console.log(DineroReal);

//¿Qué es una función?
//¿Cuándo me sirve usar una función en mi código?
// nos sirve para devolver un valor
//¿Cuál es la diferencia entre parámetros y argumentos de una función?

var name = "Rafael Iván";
var lastname = "Reyes Vázquez";
var completeName = name + lastname;
var nickname = "rafa09";

function registrer(completeName, nickname) {
  console.log(
    "Mi nombre es " + completeName + ",prefiero que me digas " + nickname + "."
  );
}

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

var suscripcion = "Free";

if (suscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (suscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (suscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (suscripcion === "Deluxe") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("Te invitamos a registrarte");
}

var suscripcion = "Free";

if (suscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (suscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (suscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (suscripcion === "Deluxe") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

var i = 0;

for (var i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

var i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

i = 10;

while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

let respuesta = 0;

do {
  respuesta = prompt("Cual es el resultado de 2 + 2");
  respuesta += 1;
} while (!(respuesta === 4));
{
}

var nombres = ["Luis", "Maria", "jairo", "Damian"];

function nombrealumnos(nombres) {
  console.log(nombres[0]);
}

var nombres = ["Luis", "Maria", "jairo", "Damian"];

function nombrealumnos(nombres) {
  console.log(nombres[0]);
  console.log(nombres[1]);
  console.log(nombres[2]);
  console.log(nombres[3]);
}
