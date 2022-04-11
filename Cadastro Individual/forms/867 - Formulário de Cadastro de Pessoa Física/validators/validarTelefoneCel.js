function validarTelefoneCelInput() {
  if (
    $("[id=telefone-celular]").val() == false ||
    $("[id=telefone-celular]").val().length <= 19
  ) {
    if ($("[id=div-telefone-celular]").hasClass("has-error") == false) {
      if ($("[id=div-telefone-celular]").hasClass("has-success") == true) {
        $("[id=div-telefone-celular],[id=icon-6]").removeClass(
          "has-success has-feedback fluigicon fluigicon-verified form-control-feedback"
        );
      }
      $("[id=div-telefone-celular]").addClass("has-error has-feedback");
      $("[id=icon-6]").addClass(
        "fluigicon fluigicon-remove form-control-feedback"
      );
      $("[name=telefonecelular]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-6]").text("Digite o número do celular.");
    }
  } else {
    $("[name=telefonecelular]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-telefone-celular]").hasClass("has-success") == false) {
      if ($("[id=div-telefone-celular]").hasClass("has-error") == true) {
        $("[id=div-telefone-celular],[id=icon-6]").removeClass(
          "has-error has-feedback fluigicon fluigicon-remove form-control-feedback"
        );
      }
      $("[id=div-telefone-celular]").addClass("has-success has-feedback");
      $("[id=icon-6]").addClass(
        "fluigicon fluigicon-verified form-control-feedback"
      );
      $("[id=help-6]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarTelefoneCelInput() {
//   const valorInput = document.getElementById("telefone-celular").value;
//   const div = document.querySelector("#div-telefone-celular");
//   const span = document.querySelector("#icon-6");
//   const p = document.querySelector("#help-6");

//   if (valorInput == false || valorInput.length <= 19) {
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
//       $("[name=telefonecelular]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "É necessário que digite o número do celular.";
//     }
//   } else {
//     $("[name=telefonecelular]").attr("style", "border-color:#1ab83f;");
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
