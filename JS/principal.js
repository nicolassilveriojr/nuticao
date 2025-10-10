var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent=("nickin nutricao");

var paciente = document.querySelector("#primeiro-paciente");
var tdNome = documentquerySelector(".info-nome");
var nome = tdNome.textContent;
console.log(nome);

var tdPeso = document.querySelector(".info-peso")
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var tdImc = document.querySelector(".info-imc");
consolelog(imc);


var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
console.log("Peso inválido");
pesoEhValido = false;
tdImc.textContent = "Peso inválido!";
}

if (altura > 3.00 || altura < 0) {
console.log("Altura inválida");
alturaEhValida = false;
tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}

if (alturaEhValida && pesoEhValido){
var imc = peso / (altura * altura);
tdImc.textContent = imc;
}
