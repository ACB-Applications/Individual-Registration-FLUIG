$(function () {
  tratandoInputAnexo();
});

function tratandoInputAnexo() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();

  if (ATIVIDADE_ATUAL == 5) {
    esconderinputAnexo();
  }
  if (ATIVIDADE_ATUAL == 9) {
    mostrarinputAnexo();
  }
}

function mostrarinputAnexo() {
  $(".inputAnexo").show();
}

function esconderinputAnexo() {
  $(".inputAnexo").hide();
}

// Show camera function
function showCamera(param) {
  JSInterface.showCamera();
}
