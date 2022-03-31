function validarNomeBancoInput() {
  if (
    $("[id=nomebanco]").val() == false ||
    $("[id=nomebanco]").val().length <= 0
  ) {
    if ($("[id=div-nome-banco]").hasClass("has-error") == false) {
      if ($("[id=div-nome-banco]").hasClass("has-success") == true) {
        $("[id=div-nome-banco],[id=icon-14]").removeClass(
          "has-success has-feedback fluigicon fluigicon-verified form-control-feedback"
        );
      }
      $("[id=div-nome-banco]").addClass("has-error has-feedback");
      $("[id=icon-14]").addClass(
        "fluigicon fluigicon-remove form-control-feedback"
      );
      $("[name=nomebanco]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-14]").text("Digite o nome do banco.");
    }
  } else {
    $("[name=nomebanco]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-nome-banco]").hasClass("has-success") == false) {
      if ($("[id=div-nome-banco]").hasClass("has-error") == true) {
        $("[id=div-nome-banco],[id=icon-14]").removeClass(
          "has-error has-feedback fluigicon fluigicon-remove form-control-feedback"
        );
      }
      $("[id=div-nome-banco]").addClass("has-success has-feedback");
      $("[id=icon-14]").addClass(
        "fluigicon fluigicon-verified form-control-feedback"
      );
      $("[id=help-14]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarNomeBancoInput() {
//   const valorInput = document.getElementById("nomebanco").value;
//   const div = document.querySelector("#div-nome-banco");
//   const span = document.querySelector("#icon-14");
//   const p = document.querySelector("#help-14");

//   if (valorInput == false || valorInput.length <= 0) {
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
//       $("[name=nomebanco]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "Digite o nome do banco";
//     }
//   } else {
//     $("[name=nomebanco]").attr("style", "border-color:#1ab83f;");
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
