function validarAgenciaInput() {
  if ($("[id=agencia]").val() == false || $("[id=agencia]").val().length <= 3) {
    if ($("[id=div-agencia]").hasClass("has-error") == false) {
      if ($("[id=div-agencia]").hasClass("has-success") == true) {
        $("[id=div-agencia],[id=icon-16]").removeClass(
          "has-success has-feedback fluigicon fluigicon-verified form-control-feedback"
        );
      }
      $("[id=div-agencia]").addClass("has-error has-feedback");
      $("[id=icon-16]").addClass(
        "fluigicon fluigicon-remove form-control-feedback"
      );
      $("[name=agencia]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-16]").text("Digite o código da agência.");
    }
  } else {
    $("[name=agencia]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-agencia]").hasClass("has-success") == false) {
      if ($("[id=div-agencia]").hasClass("has-error") == true) {
        $("[id=div-agencia],[id=icon-16]").removeClass(
          "has-error has-feedback fluigicon fluigicon-remove form-control-feedback"
        );
      }
      $("[id=div-agencia]").addClass("has-success has-feedback");
      $("[id=icon-16]").addClass(
        "fluigicon fluigicon-verified form-control-feedback"
      );
      $("[id=help-16]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarAgenciaInput() {
//   const valorInput = document.getElementById("agencia").value;
//   const div = document.querySelector("#div-agencia");
//   const span = document.querySelector("#icon-16");
//   const p = document.querySelector("#help-16");

//   if (valorInput == false || valorInput.length <= 3) {
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
//       $("[name=agencia]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "Digite a numeração da Agência do banco";
//     }
//   } else {
//     $("[name=agencia]").attr("style", "border-color:#1ab83f;");
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
