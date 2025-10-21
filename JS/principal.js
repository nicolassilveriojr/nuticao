var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "nickin nutricao";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
   var paciente = pacientes[i];

   var tdPeso = paciente.querySelector(".info-peso");
   var peso = parseFloat(tdPeso.textContent);

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = parseFloat(tdAltura.textContent);

   var tdImc = paciente.querySelector(".info-imc");

   var pesoEhValido = true;
   var alturaEhValida = true;

   if (peso <= 0 || peso >= 1000) {
      console.log("Peso inválido");
      pesoEhValido = false;
   }

   if (altura <= 0 || altura >= 3.00) {
      console.log("Altura inválida");
      alturaEhValida = false;
   }

   if (!pesoEhValido) {
      tdImc.textContent = "Peso inválido!";
      paciente.classList.add("paciente-invalido");

   } else if (!alturaEhValida) {
      tdImc.textContent = "Altura inválida!";
      paciente.classList.add("paciente-invalido");

   } else {
      var imc = peso / (altura * altura);
      tdImc.textContent = imc.toFixed(2);
   }
}