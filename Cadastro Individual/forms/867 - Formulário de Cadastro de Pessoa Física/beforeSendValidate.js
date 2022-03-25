var msg = "";
var beforeSendValidate = function(numState, nextState) {

	var ATIVIDADE_ATUAL = numState;
	var PROXIMA_ATIVIDADE = nextState;
	var lineBreaker = "<br>";
	var msg = "";
	var vazio = " não pode ser vazio<br>";
	
	if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0  || ATIVIDADE_ATUAL == 9) {

		var validaCampo = $("[name=nomecompleto]").val();
		var nomeCampo = $("[name=nomecompleto]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-1", "div-nome-completo")
			msg += "<b>Nome Completo </b> " + vazio;
		}

		var validaCampo = $("[name=CPF]").val();
		var nomeCampo = $("[name=CPF]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-2", "div-cpf")
			msg += "<b>CPF  </b> " + vazio;
		}

		var validaCampo = $("[name=email]").val();
		var nomeCampo = $("[name=email]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-5", "div-email")
			msg += "<b>E-mail  </b> " + vazio;
		}

		var validaCampo = $("[name=telefonecelular]").val();
		var nomeCampo = $("[name=telefonecelular]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-6", "div-telefone-celular")
			msg += "<b>Telefone Celular  </b> " + vazio;
		}

		var validaCampo = $("[name=telefonefixo]").val();
		var nomeCampo = $("[name=telefonefixo]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-7", "div-telefone-fixo")
			msg += "<b>Telefone Fixo  </b> " + vazio;
		}

		var validaCampo = $("[name=CEP]").val();
		var nomeCampo = $("[name=CEP]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-8", "div-cep")
			msg += "<b>CEP  </b> " + vazio;
		}

		var validaCampo = $("[name=estado]").val();
		var nomeCampo = $("[name=estado]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-9", "div-estado")
			msg += "<b>Estado  </b> " + vazio;
		}

		var validaCampo = $("[name=cidade]").val();
		var nomeCampo = $("[name=cidade]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-10", "div-cidade")
			msg += "<b>Cidade  </b> " + vazio;
		}

		var validaCampo = $("[name=bairro]").val();
		var nomeCampo = $("[name=bairro]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-11", "div-bairro")
			msg += "<b>Bairro  </b> " + vazio;
		}

		var validaCampo = $("[name=numero]").val();
		var nomeCampo = $("[name=numero]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-12", "div-numero")
			msg += "<b>Número  </b> " + vazio;
		}

		var validaCampo = $("[name=rua]").val();
		var nomeCampo = $("[name=rua]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-13", "div-rua")
			msg += "<b>Rua  </b> " + vazio;
		}

		var validaCampo = $("[name=nomebanco]").val();
		var nomeCampo = $("[name=nomebanco]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-14", "div-nome-banco")
			msg += "<b>Nome do Banco  </b> " + vazio;
		}

		var validaCampo = $("[name=codigobanco]").val();
		var nomeCampo = $("[name=codigobanco]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-15", "div-codigo-banco")
			msg += "<b>Código do Banco  </b> " + vazio;
		}

		var validaCampo = $("[name=agencia]").val();
		var nomeCampo = $("[name=agencia]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-16", "div-agencia")
			msg += "<b>Agência  </b> " + vazio;
		}

		var validaCampo = $("[name=contacorrente]").val();
		var nomeCampo = $("[name=contacorrente]")[0].name

		if (validaCampo == "") {
			setBordaVermelha(nomeCampo, "icon-17", "div-conta-corrente")
			msg += "<b>Conta Corrente  </b> " + vazio;
		}
		
	} else if (PROXIMA_ATIVIDADE == 9) {

		var validaCampo = $("[name=observadorAprovador]").val();
		if (validaCampo == "") {
			msg += "<b>Pontos a serem revisados  </b> " + vazio;
		}
	} else if (PROXIMA_ATIVIDADE == 19) {

		var validaCampo = $("[name=nomeabreviado]").val();
		if (validaCampo == "") {
			msg += "<b>Nome Abreviado  </b> " + vazio;
		}
	}

	if (msg != "") {
		
		throw msg;
		
		
	}
}

function setBordaVermelha(nomeCampo, iconeSpan, iconeDiv) {
	$("[name=" + nomeCampo + "]").attr("style", "border-color:red;");
	$("#" + iconeSpan).addClass(
			"fluigicon fluigicon-remove form-control-feedback");
	$("#" + iconeDiv).addClass("form-group has-error has-feedback");

}