function displayFields(form, customHTML) {

	recuperarAtividadeJS(form, customHTML);

}
function recuperarAtividadeJS(form, customHTML) {

	customHTML.append("<script>function buscarUsuarioLogado(){return " + "'" + getValue('WKUser') + "'" + ";}</script>");
	customHTML.append("<script>function buscaEmpresa(){return " + getValue('WKCompany') + ";}</script>");
	customHTML.append("<script>function buscarAtividadeAtual(){return " + getValue("WKNumState") + ";}</script>");
	customHTML.append("<script>function buscarModoForm(){return '" + form.getFormMode() + "';}</script>");
	customHTML.append("<script>function buscarIdSolicitacao(){return " + "'" + getValue('WKNumProces') + "'" + ";}</script>");

}
