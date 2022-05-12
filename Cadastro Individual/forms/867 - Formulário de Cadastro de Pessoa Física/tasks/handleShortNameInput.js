$(function () {
  handleShortNameInput();
});

function handleShortNameInput() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();

  if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
    esconderCampoNomeAbreviado();
  } else if (ATIVIDADE_ATUAL == 5) {
    aparecerCampoNomeAbreviado();
    regrasCampoAbreviado();
    sairCampoNomeAbreviado();
  } else if (ATIVIDADE_ATUAL == 9) {
    esconderCampoNomeAbreviado();
  }
}

// Mostra o input do nome abreviado
function aparecerCampoNomeAbreviado() {
  $(".CampoNomeAbreviado").show();
}

function regrasCampoAbreviado() {
  $("[name=nomeabreviado]").on("keyup", function () {
    validarNomeAbreviado();
  });
  $("[name=nomeabreviado]").on("blur", function () {
    validarNomeAbreviado();
  });
}

// Dispara um evento de feedback visual
function sairCampoNomeAbreviado() {
  $("[name=nomeabreviado]").on("blur", function (eval) {
    var nomeCampo = eval.currentTarget.name;
    setBordaVermelha(nomeCampo);
  });
}

// Colorir input com borda vermelha
function setBordaVermelha(nomeCampo) {
  if ($("[name=" + nomeCampo + "]").val() == "") {
    $("[name=" + nomeCampo + "]").attr("style", "border-color:red;");
  }
}

// Funções para ocultar o input do nome abreviado
function esconderCampoNomeAbreviado() {
  $(".CampoNomeAbreviado").hide();
}
