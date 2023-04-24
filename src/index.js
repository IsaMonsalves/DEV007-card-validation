import validator from "./validator.js";

function refresh() {
  location.reload();
}

function maskify() {
  const number = document.getElementById("creditCardNumber").value;
  const acumulador = validator.maskify(number);
  console.log(number);
  document.getElementById("creditCardNumber").value = acumulador;
}

function isValid() {
  const creditCardNumber = document.getElementById("creditCardNumber").value;
  if (creditCardNumber.length < 12 || creditCardNumber.length > 18) {
    alert("Su tarjeta debe tener entre 12 y 18 números");
    return;
  }

  const validate = validator.isValid(creditCardNumber);
  if (validate === true) {
    alert("El número de tarjeta Si corresponde a una tarjeta de crédito");
  } else {
    alert("El número de tarjeta No coresponde a una tarjeta de crédito ");
  }
}

//Creo variables para poder usar las funciones en el html
window.isValid = isValid;
window.refresh = refresh;
window.maskify = maskify;
