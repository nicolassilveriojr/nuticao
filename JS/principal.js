var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Nickin nutrição");

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
console.log("Peso invalido");
pesoEhValido = false;
tdImc.textContent = "Peso ivalido";
}

if (altura <= 0 || altura >= 3.00) {
console.log("Altura invalida!");
alturaEhValida = false;
tdImc.textContent = "Altura invalida";
}

if (alturaEhValida && pesoEhValido) {
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}
}

