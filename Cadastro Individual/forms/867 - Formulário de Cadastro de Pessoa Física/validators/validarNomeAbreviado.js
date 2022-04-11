function validarNomeAbreviado() {
  if (
    $("[id=nome-abreviado]").val() == false ||
    $("[id=nome-abreviado]").val().length <= 3
  ) {
    if ($("[id=div-nome-abreviado]").hasClass("has-error") == false) {
      if ($("[id=div-nome-abreviado]").hasClass("has-success") == true) {
        $("[id=div-nome-abreviado],[id=icon-18]").removeClass(
          "has-success has-feedback fluigicon fluigicon-verified form-control-feedback"
        );
      }
      $("[id=div-nome-abreviado]").addClass("has-error has-feedback");
      $("[id=icon-18]").addClass(
        "fluigicon fluigicon-remove form-control-feedback"
      );
      $("[name=nomeabreviado]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-18]").text(
        "É necessário que digite o nome abreviado utilizando 12 caracteres."
      );
    }
  } else {
    $("[name=nomeabreviado]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-nome-abreviado]").hasClass("has-success") == false) {
      if ($("[id=div-nome-abreviado]").hasClass("has-error") == true) {
        $("[id=div-nome-abreviado],[id=icon-18]").removeClass(
          "has-error has-feedback fluigicon fluigicon-remove form-control-feedback"
        );
      }
      $("[id=div-nome-abreviado]").addClass("has-success has-feedback");
      $("[id=icon-18]").addClass(
        "fluigicon fluigicon-verified form-control-feedback"
      );
      $("[id=help-18]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarNomeAbreviado() {
//   const valorInput = document.getElementById("nome-abreviado").value;
//   const div = document.querySelector("#div-nome-abreviado");
//   const span = document.querySelector("#icon-18");
//   const p = document.querySelector("#help-18");

//   if (valorInput == false || valorInput.length <= 11) {
//     if (div.classList.contains("has-error") == false) {
//       if (div.classList.contains("has-success") == true) {
//         div.classList.remove("has-success");
//         div.classList.remove("has-feedback");

//         span.classList.remove("fluigicon");
//         span.classList.remove("fluigicon-verified");
//         span.classList.remove("form-control-feedback");
//       }

//       div.classList.add("has-error");
//       div.classList.add("has-feedback");

//       span.classList.add("fluigicon");
//       span.classList.add("fluigicon-remove");
//       span.classList.add("form-control-feedback");
//       $("[name=nomeabreviado]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "É necessário que digite o nome abreviado.";
//     }
//   } else {
//     $("[name=nomeabreviado]").attr("style", "border-color:#1ab83f;");
//     if (div.classList.contains("has-success") == false) {
//       if (div.classList.contains("has-error") == true) {
//         div.classList.remove("has-error");
//         div.classList.remove("has-feedback");

//         span.classList.remove("fluigicon");
//         span.classList.remove("fluigicon-remove");
//         span.classList.remove("form-control-feedback");
//       }

//       div.classList.add("has-success");
//       div.classList.add("has-feedback");

//       span.classList.add("fluigicon");
//       span.classList.add("fluigicon-verified");
//       span.classList.add("form-control-feedback");

//       p.innerText = "";
//     }
//   }
// }
