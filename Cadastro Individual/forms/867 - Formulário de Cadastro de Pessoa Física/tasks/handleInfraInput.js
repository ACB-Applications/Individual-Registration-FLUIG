$(function () {
  handleInfraInput();
});

function handleInfraInput() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();

  if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
    esconderPainelInfra();
  } else if (ATIVIDADE_ATUAL == 5) {
    esconderPainelInfra();
  } else if (ATIVIDADE_ATUAL == 9) {
    esconderPainelInfra();
  } else if (ATIVIDADE_ATUAL == 28) {
    mostrarPainelInfra();
  } else if (VISIBILIDADE == "VIEW") {
    esconderPainelInfra();
  }
}

function mostrarPainelInfra() {
  $(".painelInfra").show();
}

function esconderPainelInfra() {
  $(".painelInfra").hide();
}
