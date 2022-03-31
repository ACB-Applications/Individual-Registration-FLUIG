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
