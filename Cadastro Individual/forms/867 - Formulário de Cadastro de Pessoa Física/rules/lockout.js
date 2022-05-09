$("[name=nomecompleto],[name=estado]").on("keypress", function () {
  var regex = new RegExp("^[A-Z ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

$("[name=cidade],[name=bairro],[name=rua],[name=nomebanco]").on(
  "keypress",
  function (event) {
    var regex = new RegExp("^[A-Z0-9 ]+$");
    var key = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  }
);

$("[name=numero]").on("keypress", function (event) {
  var regex = new RegExp("^[A-Z0-9 ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});
