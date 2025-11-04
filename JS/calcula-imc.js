//console.log(document.querySelector("h1"));
var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Nego nutritations");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso >= 1000){
console.log("Peso inválido!");
pesoEhvalido = false;
tdImc.textContent = "Peso inválido!";
paciente.classList.add("paciente-invalido");
}

if (altura <= 0 || altura >= 3.00){
console.log("Altura inválida!");
alturaEhValido = false;
tdImc.textContent = "Altura inválida!";
paciente.classList.add("paciente-invalido");
}

if (alturaEhValido && pesoEhValido){
var imc = peso / (altura * altura);
tdImc.textContent = imc.toFixed(2);
}
}


titulo.addEventListener("click", mostraMensagem);
function mostraMensagem(){
alert("Olá eu fui clicado.")
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
event.preventDefault();
//alert("Oi eu sou o botão e fui clicado");


var form = document.querySelector("#form-adiciona");

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

var pacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");


nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
//imcTd.textContent = imc;

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);

});