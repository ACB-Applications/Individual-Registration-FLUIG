function feedbackCampoBairro() {
  if ($("[id=bairro]").val() == false || $("[id=bairro]").val().length <= 0) {
    if ($("[id=div-bairro]").hasClass("has-error") == false) {
      if ($("[id=div-bairro]").hasClass("has-success") == true) {
        $("[id=div-bairro],[id=icon-11]").removeClass(
          "has-success has-feedback flaticon flaticon-check-circle icon-sm form-control-feedback"
        );
      }
      $("[id=div-bairro]").addClass("has-error has-feedback");
      $("[id=icon-11]").addClass(
        "flaticon flaticon-info icon-sm form-control-feedback"
      );
      $("[name=bairro]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-11]").text("Digite o nome do bairro.");
    }
  } else {
    $("[name=bairro]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-bairro]").hasClass("has-success") == false) {
      if ($("[id=div-bairro]").hasClass("has-error") == true) {
        $("[id=div-bairro],[id=icon-11]").removeClass(
          "has-error has-feedback flaticon flaticon-info icon-sm form-control-feedback"
        );
      }
      $("[id=div-bairro]").addClass("has-success has-feedback");
      $("[id=icon-11]").addClass(
        "flaticon flaticon-check-circle icon-sm form-control-feedback"
      );
      $("[id=help-11]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarBairroInput() {
//   const valorInput = document.getElementById("bairro").value;
//   const div = document.querySelector("#div-bairro");
//   const span = document.querySelector("#icon-11");
//   const p = document.querySelector("#help-11");

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
//       $("[name=bairro]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "É necessário que digite o nome do bairro";
//     }
//   } else {
//     $("[name=bairro]").attr("style", "border-color:#1ab83f;");
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
