// function feedbackCampoEmail() {
//   var emailValido = false;
//   const regex = /^([._a-zA-Z0-9]+)@([a-zA-Z]+).([a-zA-Z]){2,8}$/;
//   const regexo = /^([._a-zA-Z0-9]+)@([a-zA-Z]+).([a-zA-Z]){2,3}.[a-zA-Z]{1,3}$/;

//   if (regex.test($("[id=email]").val()) || regexo.test($("[id=email]").val())) {
//     emailValido = true;
//   } else {
//     emailInput = false;
//   }

//   if ($("[id=email]").val() != false) {
//     if (emailValido == false) {
//       if ($("[id=div-email]").hasClass("has-error") == false) {
//         if ($("[id=div-email]").hasClass("has-success") == true) {
//           $("[id=div-email],[id=icon-5]").removeClass(
//             "has-success has-feedback flaticon flaticon-check-circle icon-sm form-control-feedback"
//           );
//         }
//         $("[id=div-email]").addClass("has-error has-feedback");
//         $("[id=icon-5]").addClass(
//           "flaticon flaticon-info icon-sm form-control-feedback"
//         );
//         $("[name=email]").attr("style", "border-color:#cc3d3d;");
//         $("[id=help-5]").text("Digite um e-mail válido.");
//       }
//     } else {
//       $("[name=email]").attr("style", "border-color:#1ab83f;");
//       if ($("[id=div-email]").hasClass("has-success") == false) {
//         if ($("[id=div-email]").hasClass("has-error") == true) {
//           $("[id=div-email],[id=icon-5]").removeClass(
//             "has-error has-feedback flaticon flaticon-info icon-sm form-control-feedback"
//           );
//         }
//         $("[id=div-email]").addClass("has-success has-feedback");
//         $("[id=icon-5]").addClass(
//           "flaticon flaticon-check-circle icon-sm form-control-feedback"
//         );
//         $("[id=help-5]").text("");
//       }
//     }
//   }

//   if (
//     $("[id=email]").val() == false &&
//     $("[id=div-email]").hasClass("has-error") === true
//   ) {
//     $("[id=div-email],[id=icon-5]").removeClass(
//       "has-error has-feedback flaticon flaticon-info icon-sm form-control-feedback"
//     );
//     $("[id=email]").attr(
//       "style",
//       "border-color: internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));"
//     );
//     $("[id=help-5]").text("");
//   }

//   if (
//     $("[id=email]").val() == false &&
//     $("[id=div-email]").hasClass("has-success") === true
//   ) {
//     $("[id=div-email],[id=icon-5]").removeClass(
//       "has-success has-feedback flaticon flaticon-check-circle icon-sm form-control-feedback"
//     );
//     $("[id=email]").attr(
//       "style",
//       "border-color: internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));"
//     );
//     $("[id=help-5]").text("");
//   }
// }

// Versão antiga do código
// Obs.: Código sem jQuery

// function validarEmailInput() {
//   const valorInput = document.getElementById("email").value;
//   const div = document.querySelector("#div-email");
//   const span = document.querySelector("#icon-5");
//   const p = document.querySelector("#help-5");

//   if (valorInput == false || valorInput.length <= 5) {
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
//       $("[name=email]").attr("style", "border-color:#cc3d3d;");
//       p.innerText = "É necessário que digite o E-mail.";
//     }
//   } else {
//     $("[name=email]").attr("style", "border-color:#1ab83f;");
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
