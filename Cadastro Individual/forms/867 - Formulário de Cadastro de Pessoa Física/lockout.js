var nomeCompletoInput = document.querySelector("#nomeCompleto");
var estadoInput = document.querySelector("#estado");
var cidadeInput = document.querySelector("#cidade");
var bairroInput = document.querySelector("#bairro");
var ruaInput = document.querySelector("#rua");

$("[name=nomecompleto]").on("keypress", function () {
  var regex = new RegExp("^[a-zA-Zàèìòùáéíóúâêîôûãõ\b]+$");
  var _this = this;

  setTimeout(function () {
    var texto = $(_this).val();
    if (!regex.test(texto)) {
      $(_this).val(texto.substring(0, texto.length - 1));
    }
  }, 100);
});

// nomeCompletoInput.addEventListener("keypress", function (e) {
//   if (!checkChar(e)) {
//     e.preventDefault();
//   }
// });

estadoInput.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

cidadeInput.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

bairroInput.addEventListener("keypress", function (event) {
  if (!checkCharNumber(event)) {
    event.preventDefault();
  }
});

ruaInput.addEventListener("keypress", function (event) {
  if (!checkCharNumber(event)) {
    event.preventDefault();
  }
});
function checkChar(e) {
  var char = String.fromCharCode(e.keyCode);

  var pattern = "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]";
  if (char.match(pattern)) {
    return true;
  }
}

function checkCharNumber(event) {
  var charNumber = String.fromCharCode(event.keyCode);

  var pattern = "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]";
  if (charNumber.match(pattern)) {
    return true;
  }
}

var numero = document.querySelector("#numero");

numero.addEventListener("keypress", function (event) {
  if (!checkCharSNumber(event)) {
    event.preventDefault();
  }
});

function checkCharSNumber(event) {
  var charSNumber = String.fromCharCode(event.keyCode);

  var pattern = "[A-Za-z0-9 ]";
  if (charSNumber.match(pattern)) {
    return true;
  }
}
