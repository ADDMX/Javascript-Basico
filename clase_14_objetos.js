//Ejemplo 01

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
};

miAuto.marca;
miAuto.modelo;
miAuto.annio;

//Ejemplo 01

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDeAuto: function () {
    console.log(`Auto ${this.modelo} ${this.marca} ${this.annio}`);
  },
};

miAuto.detalleDeAuto();
