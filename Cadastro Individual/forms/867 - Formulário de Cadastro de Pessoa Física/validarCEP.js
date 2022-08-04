function validarCEPInput() {
  if ($("[id=CEP]").val() == false || $("[id=CEP]").val().length <= 8) {
    if ($("[id=div-cep]").hasClass("has-error") == false) {
      if ($("[id=div-cep]").hasClass("has-success") == true) {
        $("[id=div-cep],[id=icon-8]").removeClass(
          "has-success has-feedback flaticon flaticon-check-circle icon-sm form-control-feedback"
        );
      }
      $("[id=div-cep]").addClass("has-error has-feedback");
      $("[id=icon-8]").addClass(
        "flaticon flaticon-info icon-sm form-control-feedback"
      );
      $("[name=CEP]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-8]").text("Digite o CEP.");
    }
  } else {
    $("[name=CEP]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-cep]").hasClass("has-success") == false) {
      if ($("[id=div-cep]").hasClass("has-error") == true) {
        $("[id=div-cep],[id=icon-8]").removeClass(
          "has-error has-feedback flaticon flaticon-info icon-sm form-control-feedback"
        );
      }
      $("[id=div-cep]").addClass("has-success has-feedback");
      $("[id=icon-8]").addClass(
        "flaticon flaticon-check-circle icon-sm form-control-feedback"
      );
      $("[id=help-8]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarCEPInput() {
//   const valorInput = document.getElementById("CEP").value;
//   const div = document.querySelector("#div-cep");
//   const span = document.querySelector("#icon-8");
//   const p = document.querySelector("#help-8");

//   if (valorInput == false || valorInput.length <= 8) {
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
//       $("[name=CEP]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "É necessário que digite o CEP.";
//     }
//   } else {
//     $("[name=CEP]").attr("style", "border-color:#1ab83f;");
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
