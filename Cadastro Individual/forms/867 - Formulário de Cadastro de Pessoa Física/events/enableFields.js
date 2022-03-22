function enableFields(form) {

	var ATIVIDADE_ATUAL = getValue("WKNumState");

	if (ATIVIDADE_ATUAL == 5) {
		bloquearCampoInicial(form);
	}
	if (ATIVIDADE_ATUAL == 9) {
		bloquearCampoAprovador(form);
	}

}
function bloquearCampoAprovador(form) {
	form.setEnabled("observadorAprovador", false);
}
function bloquearCampoInicial(form) {
	
	form.setEnabled("nomecompleto", false);
	form.setEnabled("CPF", false);
	form.setEnabled("email", false);
	form.setEnabled("telefonecelular", false);
	form.setEnabled("telefonefixo", false);
	form.setEnabled("CEP", false);
	form.setEnabled("estado", false);
	form.setEnabled("cidade", false);
	form.setEnabled("bairro", false);
	form.setEnabled("numero", false);
	form.setEnabled("rua", false);
	form.setEnabled("nomebanco", false);
	form.setEnabled("codigobanco", false);
	form.setEnabled("agencia", false);
	form.setEnabled("contacorrente", false);

}