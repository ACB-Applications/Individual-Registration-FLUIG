function servicetask19() {
  var v_CPF = hAPI.getCardValue("CPF") + "";
  
  v_CPF = v_CPF.replace(".","").replace(".","").replace("-","");
  
  var v_nomeabreviado = hAPI.getCardValue("nomeabreviado") + "";
  var v_nomecompleto = hAPI.getCardValue("nomecompleto") + "";
  var v_email = hAPI.getCardValue("email") + "";
  var v_telefonecelular = hAPI.getCardValue("telefonecelular") + "";
  var v_telefonefixo = hAPI.getCardValue("telefonefixo") + "";

  var v_CEP = parseInt(hAPI.getCardValue("CEP")) + "";
  var v_estado = hAPI.getCardValue("estado") + "";
  var v_cidade = hAPI.getCardValue("cidade") + "";
  var v_bairro = hAPI.getCardValue("bairro") + "";
  var v_rua = hAPI.getCardValue("rua") + "";

  try {
    var clientService = fluigAPI.getAuthorizeClientService();
        
    
    var dados = {
          cCgc: V_CPF,
          cNome: v_nomecompleto,
          nomeAbrev: v_nomeabreviado,
          cEmail: v_email,
          cFoneCel: v_telefonecelular,
          cFoneFixo: v_telefonefixo,
          iCep: v_CEP,
          cUF: v_estado,
          cCidade: v_cidade,
          cBairro: v_bairro,
          //iNum: 999, //provisorio
          cRua: v_rua,
    };

    var data = {
      companyId: getValue("WKCompany") + "",
      serviceCode: "apiDatasul",
      endpoint:
        "/dts/datasul-rest/resources/prg/esp/v1/esrest0001/implantaFornecedor",
      method: "post", 
      timeoutService: "100", 

      options: {
        encoding: "UTF-8",
        mediaType: "application/json",
        //useSSL:true,
        crossDomain: true
      },

      headers: {
        "Content-Type": "application/json",
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

    hAPI.setTaskComments(
      getValue("WKUser"),
      getValue("WKNumProces"),
      0,
      clientOauth.getHttpStatusResult()
    );

    hAPI.setCardValue("statusIntegracao", clientOauth.getHttpStatusResult());

    if (result == null || result.isEmpty()) {
      hAPI.setTaskComments(
        getValue("WKUser"),
        getValue("WKNumProces"),
        0,
        "retorno vazio"
      );

      hAPI.setCardValue("codFornecedorIntegracao", "");
      hAPI.setCardValue(
        "RespostaIntegracao",
        clientOauth.getHttpStatusResult() + " - " + clientOauth.getDescription()
      );
    } else {
      var result = JSON.parse(clientOauth.getResult());

      hAPI.setTaskComments(
        getValue("WKUser"),
        getValue("WKNumProces"),
        0,
        result
      );

      if (clientOauth.getHttpStatusResult() == 200) {
        hAPI.setCardValue("RespostaIntegracao", result.tt - msg[0].descMsg);

        if (result.tt - msg[0].codFornec == null)
          hAPI.setCardValue("codFornecedorIntegracao", "");
        else
          hAPI.setCardValue("RespostaIntegracao", result.tt - msg[0].codFornec);
      } else {
        hAPI.setCardValue("codFornecedorIntegracao", "");
        hAPI.setCardValue(
          "RespostaIntegracao",
          clientOauth.getHttpStatusResult() +
            " - " +
            clientOauth.getDescription()
        );
      }
    }

    log.info("result: " + result);
  } catch (e) {
    log.error("Ocorreu um erro incluir no Datasul: " + e);

    hAPI.setCardValue("statusIntegracao", "999");
    hAPI.setCardValue("RespostaIntegracao", e.message);
  }
}
