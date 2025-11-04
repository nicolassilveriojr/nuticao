var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Aparecida Nutricionista");

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

    var pesoNumerico = parseFloat(peso);
    var alturaNumerica = parseFloat(altura);

    if (pesoNumerico <= 0 || pesoNumerico >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaNumerica <= 0 || alturaNumerica >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = pesoNumerico / (alturaNumerica * alturaNumerica);
        tdImc.textContent = imc.toFixed(2);
    }
}

// Funções duplicadas removidas e mantida apenas uma
function mostraMensagem() {
    alert("Olá eu fui clicado.")
}
titulo.addEventListener("click", mostraMensagem);

// Função anônima duplicada removida


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    // alert("OI eu sou o botão e fui clicado");

    var form = document.querySelector("#from-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pesoNumerico = parseFloat(peso);
    var alturaNumerica = parseFloat(altura);

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

    var imc = pesoNumerico / (alturaNumerica * alturaNumerica);
    imcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    // Linha duplicada removida
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    // Seletor corrigido para ID (#)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});