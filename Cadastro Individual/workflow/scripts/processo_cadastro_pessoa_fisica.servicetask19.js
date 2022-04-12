function servicetask19() {
  var v_CPF = hAPI.getCardValue("CPF") + "";

  v_CPF = v_CPF.replace(".", "");
  v_CPF = v_CPF.replace(".", "");
  v_CPF = v_CPF.replace("-", "");

  var v_nomecompleto = hAPI.getCardValue("nomecompleto") + "";
  var v_nomeabreviado = hAPI.getCardValue("nomeabreviado") + "";
  var v_email = hAPI.getCardValue("email") + "";
  var v_telefonefixo = hAPI.getCardValue("telefonefixo") + "";
  var v_telefonecelular = hAPI.getCardValue("telefonecelular") + "";
  var v_CEP = parseInt(hAPI.getCardValue("CEP") + "");
  var v_estado = hAPI.getCardValue("estado") + "";
  var v_cidade = hAPI.getCardValue("cidade") + "";
  var v_bairro = hAPI.getCardValue("bairro") + "";
  var v_numero = parseInt(hAPI.getCardValue("numero") + "");
  var v_rua = hAPI.getCardValue("rua") + "";

  try {
    var clientService = fluigAPI.getAuthorizeClientService();

    var dados = {
      "tt-fornecedor": [
        {
          cCgc: v_CPF,
          cNome: v_nomecompleto,
          nomeAbrev: v_nomeabreviado,
          cEmail: v_email,
          cFoneCel: v_telefonecelular,
          cFoneFixo: v_telefonefixo,
          iCep: v_CEP,
          cUF: v_estado,
          cCicade: v_cidade,
          cBairro: v_bairro,
          iNum: v_numero,
          cRua: v_rua,
        },
      ],
    };

    hAPI.setTaskComments(
      getValue("WKUser"),
      getValue("WKNumProces"),
      0,
      "teste"
    );
    hAPI.setTaskComments(
      getValue("WKUser"),
      getValue("WKNumProces"),
      0,
      JSON.stringify(dados)
    );

    var data = {
      companyId: getValue("WKCompany") + "",
      serviceCode: "apiDatasul",
      endpoint:
        "/dts/datasul-rest/resources/prg/esp/v1/esrest0001/implantaFornecedor",
      method: "post", // 'delete', 'patch', 'put', 'get'
      timeoutService: "100", // segundos
      options: {
        encoding: "UTF-8",
        mediaType: "application/json",
        useSSL: true,
        crossDomain: true,
      },
      params: dados,
    };

    hAPI.setTaskComments(
      getValue("WKUser"),
      getValue("WKNumProces"),
      0,
      JSON.stringify(data)
    );

    clientOauth = clientService.invoke(JSON.stringify(data));

    var result = clientOauth.getResult();

    if (result == null || result.isEmpty())
      hAPI.setTaskComments(
        getValue("WKUser"),
        getValue("WKNumProces"),
        0,
        "retorno vazio"
      );
    else
      hAPI.setTaskComments(
        getValue("WKUser"),
        getValue("WKNumProces"),
        0,
        result
      );

    //hAPI.setCardValue("retornoIntegracao",result);

    //if(result== null || result.isEmpty())

    log.info("result: " + result);

    var result = JSON.parse(clientOauth.getResult());

    hAPI.setCardValue("retornoIntegracao", "Fim integracao");

    return false; //provisorio
  } catch (e) {
    log.error("Ocorreu um erro incluir no Datasul: " + e);

    hAPI.setCardValue("retornoIntegracao", e.message);

    return false;
  }
}
