function validarRuaInput() {
  if ($("[id=rua]").val() == false || $("[id=rua]").val().length <= 3) {
    if ($("[id=div-rua]").hasClass("has-error") == false) {
      if ($("[id=div-rua]").hasClass("has-success") == true) {
        $("[id=div-rua],[id=icon-13]").removeClass(
          "has-success has-feedback flaticon flaticon-check-circle icon-sm form-control-feedback"
        );
      }
      $("[id=div-rua]").addClass("has-error has-feedback");
      $("[id=icon-13]").addClass(
        "flaticon flaticon-info icon-sm form-control-feedback"
      );
      $("[name=rua]").attr("style", "border-color:#cc3d3d;");
      $("[id=help-13]").text("Digite o nome da rua.");
    }
  } else {
    $("[name=rua]").attr("style", "border-color:#1ab83f;");
    if ($("[id=div-rua]").hasClass("has-success") == false) {
      if ($("[id=div-rua]").hasClass("has-error") == true) {
        $("[id=div-rua],[id=icon-13]").removeClass(
          "has-error has-feedback flaticon flaticon-info icon-sm form-control-feedback"
        );
      }
      $("[id=div-rua]").addClass("has-success has-feedback");
      $("[id=icon-13]").addClass(
        "flaticon flaticon-check-circle icon-sm form-control-feedback"
      );
      $("[id=help-13]").text("");
    }
  }
}

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarRuaInput() {
//   const valorInput = document.getElementById("rua").value;
//   const div = document.querySelector("#div-rua");
//   const span = document.querySelector("#icon-13");
//   const p = document.querySelector("#help-13");

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
//       $("[name=rua]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "Digite o nome da rua";
//     }
//   } else {
//     $("[name=rua]").attr("style", "border-color:#1ab83f;");
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
