var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) { //Funcao que remove toda a linha da tabela

  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  },500); //tempo em xx ms
  //Uma forma alternativa de fazer o que está nas linhas acima!

  // var alvoEvento = event.target; //Seleciona a celula clicada 'alvo'
  // var paiDoAlvo = alvoEvento.parentNode; //Seleciona o pai da celula clicada 'a linha'
  // paiDoAlvo.remove();

});
