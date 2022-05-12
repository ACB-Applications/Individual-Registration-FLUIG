$(function () {
  handleEvaluatorFeedbackInput();
});

function handleEvaluatorFeedbackInput() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();

  if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
    esconderPainelFeedbackAprovador();
  } else if (ATIVIDADE_ATUAL == 5) {
    mostrarPainelFeedbackAprovador();
  } else if (ATIVIDADE_ATUAL == 9) {
    mostrarPainelFeedbackAprovador();
  }
}

function mostrarPainelFeedbackAprovador() {
  $(".painelAprovador").show();
}

// Funções para ocultar os input
function esconderPainelFeedbackAprovador() {
  $(".painelAprovador").hide();
}
