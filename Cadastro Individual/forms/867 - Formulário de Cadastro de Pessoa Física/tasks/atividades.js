// $(function () {
//   esconderCampoAprovador();
//   atividadeAtual();
// });

// // Pega os códigos de identificação
// function atividadeAtual() {
//   var VISIBILIDADE = buscarModoForm();
//   var ATIVIDADE_ATUAL = buscarAtividadeAtual();
//   atividades(ATIVIDADE_ATUAL);
// }

// // Chama as funções de feedback, show camera, ocultar e aparecer
// function atividades(ATIVIDADE_ATUAL) {
//   if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
//     sairCampo();
//     feedbackToClient();
//     aparecerInstrucaoUsuario();
//     aparecerInstrucaoAnexo();
//     esconderCampoNomeAbreviado();
//   } else if (ATIVIDADE_ATUAL == 5) {
//     mostrarCampoAprovador();
//     aparecerCampoNomeAbreviado();
//     esconderinputAnexo();
//     regrasCampoAbreviado();
//     sairCampoNomeAbreviado();
//     removerInstrucaoUsuario();
//     removerInstrucaoAnexo();
//   } else if (ATIVIDADE_ATUAL == 9) {
//     sairCampo();
//     feedbackToClient();
//     aparecerInstrucaoUsuario();
//     aparecerInstrucaoAnexo();
//     esconderCampoNomeAbreviado();
//     mostrarCampoAprovador();
//   }
// }

// // Agrupa as functions responsáveis por fazer o feedback visual do campo, para simplificar a chamada na condicional.
// function feedbackToClient() {
//   regrasCampoNomeCompleto();
//   regrasCampoCPF();
//   regrasCampoCEP();
//   regrasCampoEstado();
//   regrasCampoCidade();
//   regrasCampoBairro();
//   regrasCampoRua();
//   regrasCampoNomeBanco();
//   regrasCampoCodigoBanco();
//   regrasCampoAgencia();
//   regrasCampoContaCorrente();
// }

// // Funções de chamada de feedback visual dos inputs
// function regrasCampoCPF() {
//   $("[name=CPF]").on("keyup", function () {
//     validarCPFInput();
//   });
//   $("[name=CPF]").on("blur", function () {
//     validarCPFInput();
//   });
// }

// function regrasCampoNomeCompleto() {
//   $("[name=nomecompleto]").on("keyup", function () {
//     validarNomeCompletoInput();
//   });
//   $("[name=nomecompleto]").on("blur", function () {
//     validarNomeCompletoInput();
//   });
// }

// function regrasCampoAbreviado() {
//   $("[name=nomeabreviado]").on("keyup", function () {
//     validarNomeAbreviado();
//   });
//   $("[name=nomeabreviado]").on("blur", function () {
//     validarNomeAbreviado();
//   });
// }

// function regrasCampoCEP() {
//   $("[name=CEP]").on("keyup", function () {
//     validarCEPInput();
//   });
//   $("[name=CEP]").on("blur", function () {
//     validarCEPInput();
//   });
// }

// function regrasCampoEstado() {
//   $("[name=estado]").on("keyup", function () {
//     validarEstadoInput();
//   });
//   $("[name=estado]").on("blur", function () {
//     validarEstadoInput();
//   });
// }

// function regrasCampoCidade() {
//   $("[name=cidade]").on("keyup", function () {
//     validarCidadeInput();
//   });
//   $("[name=cidade]").on("blur", function () {
//     validarCidadeInput();
//   });
// }

// function regrasCampoBairro() {
//   $("[name=bairro]").on("keyup", function () {
//     validarBairroInput();
//   });
//   $("[name=bairro]").on("blur", function () {
//     validarBairroInput();
//   });
// }

// function regrasCampoRua() {
//   $("[name=rua]").on("keyup", function () {
//     validarRuaInput();
//   });
//   $("[name=rua]").on("blur", function () {
//     validarRuaInput();
//   });
// }

// function regrasCampoNomeBanco() {
//   $("[name=nomebanco]").on("keyup", function () {
//     validarNomeBancoInput();
//   });
//   $("[name=nomebanco]").on("blur", function () {
//     validarNomeBancoInput();
//   });
// }

// function regrasCampoCodigoBanco() {
//   $("[name=codigobanco]").on("keyup", function () {
//     validarCodigoBancoInput();
//   });
//   $("[name=codigobanco]").on("blur", function () {
//     validarCodigoBancoInput();
//   });
// }

// function regrasCampoAgencia() {
//   $("[name=agencia]").on("keyup", function () {
//     validarAgenciaInput();
//   });
//   $("[name=agencia]").on("blur", function () {
//     validarAgenciaInput();
//   });
// }

// function regrasCampoContaCorrente() {
//   $("[name=contacorrente]").on("keyup", function () {
//     validarContaCorrenteInput();
//   });
//   $("[name=contacorrente]").on("blur", function () {
//     validarContaCorrenteInput();
//   });
// }

// // Ação de clicar fora ou sair do campo
// function sairCampo() {
//   $(
//     "[name=CPF],[name=nomecompleto],[name=CEP],[name=estado],[name=cidade],[name=bairro],[name=rua],[name=nomebanco],[name=codigobanco],[name=agencia],[name=contacorrente]"
//   ).on("blur", function (eval) {
//     var nomeCampo = eval.currentTarget.name;
//     setBordaVermelha(nomeCampo);
//   });
// }

// function sairCampoNomeAbreviado() {
//   $("[name=nomeabreviado]").on("blur", function (eval) {
//     var nomeCampo = eval.currentTarget.name;
//     setBordaVermelha(nomeCampo);
//   });
// }

// // Mostra o input do nome abreviado
// function aparecerCampoNomeAbreviado() {
//   $(".CampoNomeAbreviado").show();
// }

// // Funções para mostrar as intruções
// function aparecerInstrucaoUsuario() {
//   $("[id=card-instrucao-usuario]").append(
//     '<div class="card-body"> <h3 class="card-title"> <i class="fluigicon fluigicon-warning-sign icon-sm"></i> Instruções para o usuário </h3> <p style="margin: 0px 0px 4px 0px;"> Siga abaixo as instruções e informações para não se perder na hora de preencher os campos do formulário: </p><ol style="padding: 0px 16px 0px 16px;"><li> Os campos com o símbolo<strong style="color: red;"> * </strong>são obrigatórios, caso contrário não tenha, são opcionais;</li><li>Os campos do formulário só aceitam digitos com letra Maiúscula;</li><li>Digite somente os números nos campos <strong>CPF, Telefone, CEP, Código, Agência, Conta Corrente</strong> que o formulário completa com a formatação correta;</li></ol></div>'
//   );
// }

// function aparecerInstrucaoAnexo() {
//   $("[id=card-instrucao-anexo]").append(
//     '<div class="card-body"> <h3 class="card-title"> <i class="fluigicon fluigicon-warning-sign icon-sm"></i> Instrução para o arquivo do anexo </h3> <p style="margin: 0px 0px 4px 0px;">Comprovante bancário válido. São os que contenham os dados de <strong>AGÊNCIA, CONTA, BANCO, TITULAR,</strong> sendo possível a perceber o vínculo bancário, como por ex: </p> <ul style="list-style: none; padding: 0px 0px 0px 0px;"> <li> - Folha de cheque;</li><li> - Foto do cartão do banco;</li><li> - Extrato de conta(ocultar dados financeiros);</li><li> - Print de tela do app do banco;</li><li> - Comprovante de transferência ou pix (ocultar dados financeiros);</li><li> - Formulário de abertura de conta;</li></ul></div>'
//   );
// }

// // Funções para mostrar o campo do feedback do aprovador
// function mostrarCampoAprovador() {
//   $(".painelAprovador").show();
// }

// // Funções para ocultar os input
// function esconderCampoNomeAbreviado() {
//   $(".CampoNomeAbreviado").hide();
// }

// function esconderinputAnexo() {
//   $(".inputAnexo").hide();
// }

// function esconderCampoAprovador() {
//   $(".painelAprovador").hide();
// }

// // Remove instruções
// function removerInstrucaoUsuario() {
//   $("[id=card-instrucao-usuario]").remove();
// }

// function removerInstrucaoAnexo() {
//   $("[id=card-instrucao-anexo]").remove();
// }

// // Show camera function
// function showCamera(param) {
//   JSInterface.showCamera();
// }

// // Colorir input com borda vermelha
// function setBordaVermelha(nomeCampo) {
//   if ($("[name=" + nomeCampo + "]").val() == "") {
//     $("[name=" + nomeCampo + "]").attr("style", "border-color:red;");
//   }
// }
