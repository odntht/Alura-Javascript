//Cria o Titulo na pagina
var tituloPagina = document.querySelector(".tituloPagina");
tituloPagina.textContent = "Aparecida Nutrição";

var pacientes = document.querySelectorAll(".paciente"); //busca todos os dados de todos os pacientes

console.log(pacientes);

console.log(pacientes.length);

console.log(100/2.00);



for(var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso"); //busca o peso do paciente
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura"); //busca a altura do paciente
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true

if(peso <= 0 || peso >= 500) {
	pesoValido = false;
	tdImc.textContent = "Peso inválido!";
	paciente.classList.add("paciente-invalido");
}

if (altura <= 0 || altura >= 3) {
	alturaValida = false;
	tdImc.textContent = "Altura inválida!";
	paciente.classList.add("paciente-invalido");

}

if (alturaValida && pesoValido) {

var imc = peso/(altura*altura);
tdImc.textContent = imc.toFixed(2);

} 

};





