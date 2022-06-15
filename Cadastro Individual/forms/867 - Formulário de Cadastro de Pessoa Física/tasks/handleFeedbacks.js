$(function () {
  handleFeedbacks();
});

function handleFeedbacks() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();

  if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
    sairCampo();
    feedbackToClient();
  } else if (ATIVIDADE_ATUAL == 9) {
    sairCampo();
    feedbackToClient();
  }
}

// Agrupa as functions responsáveis por fazer o feedback visual do campo, para simplificar a chamada na condicional.
function feedbackToClient() {
  regrasCampoCPF();
  regrasCampoNomeCompleto();
  regrasCampoEmail();
  regrasCampoCEP();
  regrasCampoEstado();
  regrasCampoCidade();
  regrasCampoBairro();
  regrasCampoRua();
  regrasCampoNomeBanco();
  regrasCampoCodigoBanco();
  regrasCampoAgencia();
  regrasCampoContaCorrente();
}

// Funções de chamada de feedback visual dos inputs
function regrasCampoCPF() {
  $("[name=CPF]").on("keyup", function () {
    validarCPFInput();
  });
  $("[name=CPF]").on("blur", function () {
    validarCPFInput();
  });
}

function regrasCampoNomeCompleto() {
  $("[name=nomecompleto]").on("keyup", function () {
    validarNomeCompletoInput();
  });
  $("[name=nomecompleto]").on("blur", function () {
    validarNomeCompletoInput();
  });
}

function regrasCampoEmail() {
  $("[name=email]").on("keyup", function () {
    validarEmailInput();
  });
  $("[name=email]").on("blur", function () {
    validarEmailInput();
  });
}

function regrasCampoCEP() {
  $("[name=CEP]").on("keyup", function () {
    validarCEPInput();
  });
  $("[name=CEP]").on("blur", function () {
    validarCEPInput();
  });
}

function regrasCampoEstado() {
  $("[name=estado]").on("keyup", function () {
    validarEstadoInput();
  });
  $("[name=estado]").on("blur", function () {
    validarEstadoInput();
  });
}

function regrasCampoCidade() {
  $("[name=cidade]").on("keyup", function () {
    validarCidadeInput();
  });
  $("[name=cidade]").on("blur", function () {
    validarCidadeInput();
  });
}

function regrasCampoBairro() {
  $("[name=bairro]").on("keyup", function () {
    validarBairroInput();
  });
  $("[name=bairro]").on("blur", function () {
    validarBairroInput();
  });
}

function regrasCampoRua() {
  $("[name=rua]").on("keyup", function () {
    validarRuaInput();
  });
  $("[name=rua]").on("blur", function () {
    validarRuaInput();
  });
}

function regrasCampoNomeBanco() {
  $("[name=nomebanco]").on("keyup", function () {
    validarNomeBancoInput();
  });
  $("[name=nomebanco]").on("blur", function () {
    validarNomeBancoInput();
  });
}

function regrasCampoCodigoBanco() {
  $("[name=codigobanco]").on("keyup", function () {
    validarCodigoBancoInput();
  });
  $("[name=codigobanco]").on("blur", function () {
    validarCodigoBancoInput();
  });
}

function regrasCampoAgencia() {
  $("[name=agencia]").on("keyup", function () {
    validarAgenciaInput();
  });
  $("[name=agencia]").on("blur", function () {
    validarAgenciaInput();
  });
}

function regrasCampoContaCorrente() {
  $("[name=contacorrente]").on("keyup", function () {
    validarContaCorrenteInput();
  });
  $("[name=contacorrente]").on("blur", function () {
    validarContaCorrenteInput();
  });
}

// Ação de clicar fora ou sair do campo
function sairCampo() {
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
