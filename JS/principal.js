//console.log(document.querySelector("h1"));
var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Nego nutritations");




var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(paciente);
console.log(tdPeso);




var tdAltura = document.querySelector("#primeiro-paciente");
var altura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);
if (peso < 0 || peso > 1000) {
    console.log("peso inválido");
}


if (altura, 0 || altur > 3.00) {
    console.log("Altura inválida");
}
