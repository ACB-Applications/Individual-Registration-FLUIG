$("#CEP").blur(function () {
  $.getJSON(
    "//viacep.com.br/ws/" + $("#CEP").val() + "/json/",
    function (dados) {
      $("#estado").val(dados.uf);
      $("#cidade").val(dados.localidade);
      $("#bairro").val(dados.bairro);
      $("#rua").val(dados.logradouro);
      $("#complemento").val(dados.complemento);
    }
  );
});
