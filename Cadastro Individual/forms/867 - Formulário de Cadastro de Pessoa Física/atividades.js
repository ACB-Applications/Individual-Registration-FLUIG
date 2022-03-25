$(function() {
	atividadeAtual();
});

function atividadeAtual() {
	
	var VISIBILIDADE = buscarModoForm();
	var ATIVIDADE_ATUAL = buscarAtividadeAtual();
	atividades(ATIVIDADE_ATUAL);

}

function atividades(ATIVIDADE_ATUAL) {
	
	if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
		
		sairCampo();
		esconderAprovador();
		esconderCampoNomeAbreviado();
		regrasDeCampos();
		
	} else if (ATIVIDADE_ATUAL == 5) {
		
		aparecerAprovador();
		aparecerCampoNomeAbreviado();
		
		esconderinputAnexo();
		
		regraDosCamposAvaliador();
		sairCampoNomeAbreviado();
		
	} else if (ATIVIDADE_ATUAL == 9) {
		
		sairCampo();
		regrasDeCampos();
		
		esconderCampoNomeAbreviado();
	}
	
}

function regrasDeCampos() {
	
	$("[name=contacorrente],[name=agencia],[name=codigobanco],[name=nomebanco],[name=rua],[name=numero],[name=bairro],[name=cidade],[name=estado],[name=nomecompleto],[name=CPF],[name=email],[name=telefonecelular],[name=telefonefixo],[name=CEP], [name=nomeabreviado]")
		.on("keyup", function() {
			validarNomeCompletoInput();
			validarCPFInput();
			validarNomeAbreviado();
			validarEmailInput();
			validarTelefoneCelInput();
			validarTelefoneFixoInput();
			validarCEPInput();
			validarEstadoInput();
			validarCidadeInput();
			validarBairroInput();
			validarNumeroInput();
			validarRuaInput();
			validarNomeBancoInput();
			validarCodigoBancoInput();
			validarAgenciaInput();
			validarContaCorrenteInput();
	});
	
	$("[name=contacorrente],[name=agencia],[name=codigobanco],[name=nomebanco],[name=rua],[name=numero],[name=bairro],[name=cidade],[name=estado],[name=nomecompleto],[name=CPF],[name=email],[name=telefonecelular],[name=telefonefixo],[name=CEP], [name=nomeabreviado]")
		.on("blur", function() {
			validarNomeCompletoInput();
			validarCPFInput();
			validarNomeAbreviado();
			validarEmailInput();
			validarTelefoneCelInput();
			validarTelefoneFixoInput();
			validarCEPInput();
			validarEstadoInput();
			validarCidadeInput();
			validarBairroInput();
			validarNumeroInput();
			validarRuaInput();
			validarNomeBancoInput();
			validarCodigoBancoInput();
			validarAgenciaInput();
			validarContaCorrenteInput();
	});
}

function esconderinputAnexo() {
	$(".inputAnexo").hide();
}

function aparecerAprovador() {
	$(".painelAprovador").show();
}

function esconderAprovador() {
	$(".painelAprovador").hide();
}

function sairCampo() {
	
	$("[name=contacorrente],[name=agencia],[name=codigobanco],[name=nomebanco],[name=rua],[name=numero],[name=bairro],[name=cidade],[name=estado],[name=nomecompleto],[name=CPF],[name=email],[name=telefonecelular],[name=telefonefixo],[name=CEP]")
		.on("blur", function(eval) {
			var nomeCampo = eval.currentTarget.name
			setBordaCinza(nomeCampo)
	});
	
}

function setBordaCinza(nomeCampo) {
	if ($("[name=" + nomeCampo + "]").val() == "") {
		$("[name=" + nomeCampo + "]").attr("style", "border-color:red;");
	}
}

function showCamera(param) {
	JSInterface.showCamera("Comprovante bancário");
}


function regraDosCamposAvaliador() {
	
	$("[name=nomeabreviado]").on("keyup", function() {
		validarNomeAbreviado();
	});
	
	$("[name=nomeabreviado]").on("blur", function() {
		validarNomeAbreviado();
	});
}

function sairCampoNomeAbreviado() {
	$("[name=nomeabreviado]").on("blur", function(eval) {
		var nomeCampo = eval.currentTarget.name
		setBordaCinza(nomeCampo)
	})
}

function esconderCampoNomeAbreviado() {
	$(".CampoNomeAbreviado").hide();
}

function aparecerCampoNomeAbreviado() {
	$(".CampoNomeAbreviado").show();
}