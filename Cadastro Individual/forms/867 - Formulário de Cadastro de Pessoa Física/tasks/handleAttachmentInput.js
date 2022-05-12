$(function () {
  handleAttachmentInput();
});

function handleAttachmentInput() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();

  if (ATIVIDADE_ATUAL == 5) {
    esconderinputAnexo();
  }
}

function esconderinputAnexo() {
  $(".inputAnexo").hide();
}

// Show camera function
function showCamera(param) {
  JSInterface.showCamera();
}
