function feedbackCampoContaCorrente() {
  if (
    $("[id=contacorrente]").val() == false ||
    $("[id=contacorrente]").val().length <= 3
  ) {
    if ($("[id=div-conta-corrente]").hasClass("has-error") == false) {
      if ($("[id=div-conta-corrente]").hasClass("has-success") == true) {
        $("[id=div-conta-corrente],[id=icon-17]").removeClass(
          "has-success has-feedback flaticon flaticon-check-circle icon-sm form-control-feedback"
        );
      }
      $("[id=div-conta-corrente]").addClass("has-error has-feedback");
      $("[id=icon-17]").addClass(
        "flaticon flaticon-info icon-sm form-control-feedback"
      );
      $("[name=contacorrente]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-17]").text("Digite os números da conta corrente.");
    }
  } else {
    $("[name=contacorrente]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-conta-corrente]").hasClass("has-success") == false) {
      if ($("[id=div-conta-corrente]").hasClass("has-error") == true) {
        $("[id=div-conta-corrente],[id=icon-17]").removeClass(
          "has-error has-feedback flaticon flaticon-info icon-sm form-control-feedback"
        );
      }
      $("[id=div-conta-corrente]").addClass("has-success has-feedback");
      $("[id=icon-17]").addClass(
        "flaticon flaticon-check-circle icon-sm form-control-feedback"
      );
      $("[id=help-17]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarContaCorrenteInput() {
//   const valorInput = document.getElementById("contacorrente").value;
//   const div = document.querySelector("#div-conta-corrente");
//   const span = document.querySelector("#icon-17");
//   const p = document.querySelector("#help-17");

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
//       $("[name=contacorrente]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "Digite a numeração da conta corrente";
//     }
//   } else {
//     $("[name=contacorrente]").attr("style", "border-color:#1ab83f;");
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
