// Ejemplo 01

var estudiantes = ["Maria", "Sergio", "Daniel", "Rosa"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

// Ejemplo 02

var estudiantes = ["Maria", "Sergio", "Daniel", "Rosa"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}
