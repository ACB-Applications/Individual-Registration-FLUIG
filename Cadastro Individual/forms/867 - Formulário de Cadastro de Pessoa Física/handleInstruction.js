$(function () {
  handleInstruction();
});

function handleInstruction() {
  var VISIBILIDADE = buscarModoForm();
  var ATIVIDADE_ATUAL = buscarAtividadeAtual();

  if (ATIVIDADE_ATUAL == 12 || ATIVIDADE_ATUAL == 0) {
    aparecerInstrucaoUsuario();
    aparecerInstrucaoAnexo();
  } else if (ATIVIDADE_ATUAL == 5) {
    removerInstrucaoUsuario();
    removerInstrucaoAnexo();
  } else if (ATIVIDADE_ATUAL == 9) {
    aparecerInstrucaoUsuario();
    aparecerInstrucaoAnexo();
  }
}

// Funções para mostrar as intruções
function aparecerInstrucaoUsuario() {
  $("[id=card-instrucao-usuario]").append(
    '<div class="card-body"> <h3 class="card-title"> <i class="fluigicon fluigicon-warning-sign icon-sm"></i> Instruções para o usuário </h3> <p style="margin: 0px 0px 4px 0px;"> Siga abaixo as instruções e informações para não se perder na hora de preencher os campos do formulário: </p><ol style="padding: 0px 16px 0px 16px;"><li> Os campos com o símbolo<strong style="color: red;"> * </strong>são obrigatórios, caso contrário não tenha, são opcionais;</li><li>Os campos do formulário só aceitam digitos com letra Maiúscula;</li><li>Digite somente os números nos campos <strong>CPF, Telefone, CEP, Código, Agência, Conta Corrente</strong> que o formulário completa com a formatação correta;</li></ol></div>'
  );
}

function aparecerInstrucaoAnexo() {
  $("[id=card-instrucao-anexo]").append(
    '<div class="card-body"> <h3 class="card-title"> <i class="fluigicon fluigicon-warning-sign icon-sm"></i> Instrução para o arquivo do anexo </h3> <p style="margin: 0px 0px 4px 0px;">Comprovante bancário válido. São os que contenham os dados de <strong>AGÊNCIA, CONTA, BANCO, TITULAR,</strong> sendo possível a perceber o vínculo bancário, como por ex: </p> <ul style="list-style: none; padding: 0px 0px 0px 0px;"> <li> - Folha de cheque;</li><li> - Foto do cartão do banco;</li><li> - Extrato de conta(ocultar dados financeiros);</li><li> - Print de tela do app do banco;</li><li> - Comprovante de transferência ou pix (ocultar dados financeiros);</li><li> - Formulário de abertura de conta;</li></ul></div>'
  );
}

// Remove instruções
function removerInstrucaoUsuario() {
  $("[id=card-instrucao-usuario]").remove();
}

function removerInstrucaoAnexo() {
  $("[id=card-instrucao-anexo]").remove();
}
