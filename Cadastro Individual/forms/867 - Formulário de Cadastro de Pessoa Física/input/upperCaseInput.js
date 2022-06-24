// Deixa as palavras no input maiúscula sem precisar ativar o Caps Lock
function UpperCaseInput(e) {
  var ss = e.target.selectionStart;
  var se = e.target.selectionEnd;
  e.target.value = e.target.value.toUpperCase();
  e.target.selectionStart = ss;
  e.target.selectionEnd = se;
}
