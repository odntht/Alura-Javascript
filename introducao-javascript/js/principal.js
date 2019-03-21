//Cria o Titulo na pagina
var tituloPagina = document.querySelector(".tituloPagina");
tituloPagina.textContent = "Aparecida Nutrição";

var paciente = document.querySelector("#primeiro"); //busca todos os dados do paciente #primeiro
var tdPeso = paciente.querySelector(".info-peso").textContent; //busca o peso do paciente
var tdAltura = paciente.querySelector(".info-altura").textContent; //busca a altura do paciente
var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true

if(tdPeso <= 0 || tdPeso >= 500) {
	pesoValido = false;
}

if (tdAltura <= 0 || tdAltura >= 3) {
	alturaValida = false;
}

if (alturaValida && pesoValido) {

var imc = tdPeso/(tdAltura*tdAltura);
tdImc.textContent = imc;

} else {
	alert("Peso e/ou altura invalidos! \nIMC não calculado!" );
}


