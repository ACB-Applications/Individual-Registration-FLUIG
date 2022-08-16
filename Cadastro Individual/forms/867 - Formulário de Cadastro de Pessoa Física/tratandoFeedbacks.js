$(function () {
  tratandoFeedbacks();
});

function tratandoFeedbacks() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();

  if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
    eventoSairCampo();
    feedbackCampo();
  } else if (ATIVIDADE_ATUAL == 9) {
    eventoSairCampo();
    feedbackCampo();
  }
}

// Agrupa as functions responsáveis por fazer o feedback visual do campo, para simplificar a chamada na condicional.
function feedbackCampo() {
  campoCPF();
  campoNomeCompleto();
  campoEmail();
  campoCEP();
  campoEstado();
  campoCidade();
  campoBairro();
  campoRua();
  campoNomeBanco();
  campoCodigoBanco();
  campoAgencia();
  campoContaCorrente();
}

// Funções de chamada de feedback visual dos inputs
function campoCPF() {
  $("[name=CPF]").on("keyup", function () {
    feedbackCampoCPF();
  });
  $("[name=CPF]").on("blur", function () {
    feedbackCampoCPF();
  });
}

function campoNomeCompleto() {
  $("[name=nomecompleto]").on("keyup", function () {
    feedbackCampoNomeCompleto();
  });
  $("[name=nomecompleto]").on("blur", function () {
    feedbackCampoNomeCompleto();
  });
}

function campoEmail() {
  $("[name=email]").on("keyup", function () {
    feedbackCampoEmail();
  });
  $("[name=email]").on("blur", function () {
    feedbackCampoEmail();
  });
}

function campoCEP() {
  $("[name=CEP]").on("keyup", function () {
    feedbackCampoCEP();
  });
  $("[name=CEP]").on("blur", function () {
    feedbackCampoCEP();
  });
}

function campoEstado() {
  $("[name=estado]").on("keyup", function () {
    feedbackCampoEstado();
  });
  $("[name=estado]").on("blur", function () {
    feedbackCampoEstado();
  });
}

function campoCidade() {
  $("[name=cidade]").on("keyup", function () {
    feedbackCampoCidade();
  });
  $("[name=cidade]").on("blur", function () {
    feedbackCampoCidade();
  });
}

function campoBairro() {
  $("[name=bairro]").on("keyup", function () {
    feedbackCampoBairro();
  });
  $("[name=bairro]").on("blur", function () {
    feedbackCampoBairro();
  });
}

function campoRua() {
  $("[name=rua]").on("keyup", function () {
    feedbackCampoRua();
  });
  $("[name=rua]").on("blur", function () {
    feedbackCampoRua();
  });
}

function campoNomeBanco() {
  $("[name=nomebanco]").on("keyup", function () {
    feedbackCampoNomeBanco();
  });
  $("[name=nomebanco]").on("blur", function () {
    feedbackCampoNomeBanco();
  });
}

function campoCodigoBanco() {
  $("[name=codigobanco]").on("keyup", function () {
    feedbackCampoCodigoBanco();
  });
  $("[name=codigobanco]").on("blur", function () {
    feedbackCampoCodigoBanco();
  });
}

function campoAgencia() {
  $("[name=agencia]").on("keyup", function () {
    feedbackCampoAgencia();
  });
  $("[name=agencia]").on("blur", function () {
    feedbackCampoAgencia();
  });
}

function campoContaCorrente() {
  $("[name=contacorrente]").on("keyup", function () {
    feedbackCampoContaCorrente();
  });
  $("[name=contacorrente]").on("blur", function () {
    feedbackCampoContaCorrente();
  });
}

// Ação de clicar fora ou sair do campo
function eventoSairCampo() {
  $(
    "[name=CPF],[name=nomecompleto],[name=CEP],[name=estado],[name=cidade],[name=bairro],[name=rua],[name=nomebanco],[name=codigobanco],[name=agencia],[name=contacorrente]"
  ).on("blur", function (eval) {
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
