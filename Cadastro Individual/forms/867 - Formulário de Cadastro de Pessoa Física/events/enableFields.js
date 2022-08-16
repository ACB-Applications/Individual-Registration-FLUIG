function enableFields(form) {
  var ATIVIDADE_ATUAL = getValue("WKNumState");

  if (ATIVIDADE_ATUAL == 5) {
    bloquearCamposdePreenchimentopeloUsuario(form);
  }

  if (ATIVIDADE_ATUAL == 9) {
    bloquearCampoAprovador(form);
  }

  if (ATIVIDADE_ATUAL == 28) {
    // bloquearCampoRespostaIntegracao();
  }
}
function bloquearCampoAprovador(form) {
  form.setEnabled("observadorAprovador", false);
}
function bloquearCampoRespostaIntegracao(form) {
  form.setEnabled("RespostaIntegracao", false);
}
function bloquearCamposdePreenchimentopeloUsuario(form) {
  form.setEnabled("nomecompleto", false);
  form.setEnabled("CPF", false);
  form.setEnabled("email", false);
  form.setEnabled("telefonecelular", false);
  form.setEnabled("telefonefixo", false);
  form.setEnabled("CEP", false);
  form.setEnabled("estado", false);
  form.setEnabled("cidade", false);
  form.setEnabled("bairro", false);
  form.setEnabled("rua", false);
  form.setEnabled("complemento", false);
  form.setEnabled("nomebanco", false);
  form.setEnabled("codigobanco", false);
  form.setEnabled("agencia", false);
  form.setEnabled("contacorrente", false);
}
