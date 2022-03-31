function validarNumeroInput() {
  if ($("[id=numero]").val() == false || $("[id=numero]").val().length <= 0) {
    if ($("[id=div-numero]").hasClass("has-error") == false) {
      if ($("[id=div-numero]").hasClass("has-success") == true) {
        $("[id=div-numero],[id=icon-12]").removeClass(
          "has-success has-feedback fluigicon fluigicon-verified form-control-feedback"
        );
      }
      $("[id=div-numero]").addClass("has-error has-feedback");
      $("[id=icon-12]").addClass(
        "fluigicon fluigicon-remove form-control-feedback"
      );
      $("[name=numero]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-12]").text("Digite o número da residência.");
    }
  } else {
    $("[name=numero]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-numero]").hasClass("has-success") == false) {
      if ($("[id=div-numero]").hasClass("has-error") == true) {
        $("[id=div-numero],[id=icon-12]").removeClass(
          "has-error has-feedback fluigicon fluigicon-remove form-control-feedback"
        );
      }
      $("[id=div-numero]").addClass("has-success has-feedback");
      $("[id=icon-12]").addClass(
        "fluigicon fluigicon-verified form-control-feedback"
      );
      $("[id=help-12]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarNumeroInput() {
//   const valorInput = document.getElementById("numero").value;
//   const div = document.querySelector("#div-numero");
//   const span = document.querySelector("#icon-12");
//   const p = document.querySelector("#help-12");

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
//       $("[name=numero]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "Digite o número da residência";
//     }
//   } else {
//     $("[name=numero]").attr("style", "border-color:#1ab83f;");
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
