function validarNomeCompletoInput() {
  // const valorInput = document.getElementById("nomecompleto").value;
  const div = document.querySelector("#div-nome-completo");
  const span = document.querySelector("#icon-1");
  const p = document.querySelector("#help-1");

  if ($("[name=nomecompleto]").value == false || valorInput.length <= 3) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=nomecompleto]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o nome completo.";
    }
  } else {
    $("[name=nomecompleto]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarCPFInput() {
  const valorInput = document.getElementById("CPF").value;
  const div = document.querySelector("#div-cpf");
  const span = document.querySelector("#icon-2");
  const p = document.querySelector("#help-2");

  if (valorInput == false || valorInput.length <= 13) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=CPF]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o CPF.";
    }
  } else {
    $("[name=CPF]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarEmailInput() {
  const valorInput = document.getElementById("email").value;
  const div = document.querySelector("#div-email");
  const span = document.querySelector("#icon-5");
  const p = document.querySelector("#help-5");

  if (valorInput == false || valorInput.length <= 5) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=email]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o E-mail.";
    }
  } else {
    $("[name=email]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarTelefoneCelInput() {
  const valorInput = document.getElementById("telefone-celular").value;
  const div = document.querySelector("#div-telefone-celular");
  const span = document.querySelector("#icon-6");
  const p = document.querySelector("#help-6");

  if (valorInput == false || valorInput.length <= 19) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=telefonecelular]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o número do celular.";
    }
  } else {
    $("[name=telefonecelular]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarTelefoneFixoInput() {
  const valorInput = document.getElementById("telefone-fixo").value;
  const div = document.querySelector("#div-telefone-fixo");
  const span = document.querySelector("#icon-7");
  const p = document.querySelector("#help-7");

  if (valorInput == false || valorInput.length <= 17) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=telefonefixo]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o número do telefone fixo.";
    }
  } else {
    $("[name=telefonefixo]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarNomeAbreviado() {
  const valorInput = document.getElementById("nome-abreviado").value;
  const div = document.querySelector("#div-nome-abreviado");
  const span = document.querySelector("#icon-18");
  const p = document.querySelector("#help-18");

  if (valorInput == false || valorInput.length <= 11) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=nomeabreviado]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o nome abreviado.";
    }
  } else {
    $("[name=nomeabreviado]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarCEPInput() {
  const valorInput = document.getElementById("CEP").value;
  const div = document.querySelector("#div-cep");
  const span = document.querySelector("#icon-8");
  const p = document.querySelector("#help-8");

  if (valorInput == false || valorInput.length <= 8) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=CEP]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o CEP.";
    }
  } else {
    $("[name=CEP]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarEstadoInput() {
  const valorInput = document.getElementById("estado").value;
  const div = document.querySelector("#div-estado");
  const span = document.querySelector("#icon-9");
  const p = document.querySelector("#help-9");

  if (valorInput == false || valorInput.length <= 0) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=estado]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "Digite o nome do estado.";
    }
  } else {
    $("[name=estado]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarCidadeInput() {
  const valorInput = document.getElementById("cidade").value;
  const div = document.querySelector("#div-cidade");
  const span = document.querySelector("#icon-10");
  const p = document.querySelector("#help-10");

  if (valorInput == false || valorInput.length <= 0) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=cidade]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o nome da cidade.";
    }
  } else {
    $("[name=cidade]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarBairroInput() {
  const valorInput = document.getElementById("bairro").value;
  const div = document.querySelector("#div-bairro");
  const span = document.querySelector("#icon-11");
  const p = document.querySelector("#help-11");

  if (valorInput == false || valorInput.length <= 0) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=bairro]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "É necessário que digite o nome do bairro";
    }
  } else {
    $("[name=bairro]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarNumeroInput() {
  const valorInput = document.getElementById("numero").value;
  const div = document.querySelector("#div-numero");
  const span = document.querySelector("#icon-12");
  const p = document.querySelector("#help-12");

  if (valorInput == false || valorInput.length <= 0) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=numero]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "Digite o número da residência";
    }
  } else {
    $("[name=numero]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarRuaInput() {
  const valorInput = document.getElementById("rua").value;
  const div = document.querySelector("#div-rua");
  const span = document.querySelector("#icon-13");
  const p = document.querySelector("#help-13");

  if (valorInput == false || valorInput.length <= 0) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=rua]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "Digite o nome da rua";
    }
  } else {
    $("[name=rua]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarNomeBancoInput() {
  const valorInput = document.getElementById("nomebanco").value;
  const div = document.querySelector("#div-nome-banco");
  const span = document.querySelector("#icon-14");
  const p = document.querySelector("#help-14");

  if (valorInput == false || valorInput.length <= 0) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=nomebanco]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "Digite o nome do banco";
    }
  } else {
    $("[name=nomebanco]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarCodigoBancoInput() {
  const valorInput = document.getElementById("codigobanco").value;
  const div = document.querySelector("#div-codigo-banco");
  const span = document.querySelector("#icon-15");
  const p = document.querySelector("#help-15");

  if (valorInput == false || valorInput.length <= 2) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=codigobanco]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "Digite o código do banco";
    }
  } else {
    $("[name=codigobanco]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarAgenciaInput() {
  const valorInput = document.getElementById("agencia").value;
  const div = document.querySelector("#div-agencia");
  const span = document.querySelector("#icon-16");
  const p = document.querySelector("#help-16");

  if (valorInput == false || valorInput.length <= 3) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=agencia]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "Digite a numeração da Agência do banco";
    }
  } else {
    $("[name=agencia]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}

function validarContaCorrenteInput() {
  const valorInput = document.getElementById("contacorrente").value;
  const div = document.querySelector("#div-conta-corrente");
  const span = document.querySelector("#icon-17");
  const p = document.querySelector("#help-17");

  if (valorInput == false || valorInput.length <= 8) {
    if (div.classList.contains("has-error") == false) {
      if (div.classList.contains("has-success") == true) {
        div.classList.remove("has-success");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-verified");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-error");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-remove");
      span.classList.add("form-control-feedback");
      $("[name=contacorrente]").attr("style", "border-color:#cc3d3d;");
      p.innerText = "Digite a numeração da conta corrente";
    }
  } else {
    $("[name=contacorrente]").attr("style", "border-color:#1ab83f;");
    if (div.classList.contains("has-success") == false) {
      if (div.classList.contains("has-error") == true) {
        div.classList.remove("has-error");
        div.classList.remove("has-feedback");

        span.classList.remove("fluigicon");
        span.classList.remove("fluigicon-remove");
        span.classList.remove("form-control-feedback");
      }

      div.classList.add("has-success");
      div.classList.add("has-feedback");

      span.classList.add("fluigicon");
      span.classList.add("fluigicon-verified");
      span.classList.add("form-control-feedback");

      p.innerText = "";
    }
  }
}
