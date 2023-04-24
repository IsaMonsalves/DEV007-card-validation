const validator = {
  isValid: (creditCardNumber) => {
    //const creditCardNumber = document.getElementById("creditCardNumber").value;
    /* if (creditCardNumber.length < 12 || creditCardNumber.length > 18) {
      alert("Su tarjeta debe tener entre 12 y 18 números");
      return;
    }
    */
    const reverse = creditCardNumber.toString().split("").reverse();
    for (let i = 0; i < reverse.length; i++) {
      if ((i + 1) % 2 === 0) {
        reverse[i] = reverse[i] * 2;
      }
      if (reverse[i] >= 10) {
        reverse[i] = reverse[i] - 9;
      }
    }
    let total = 0;
    for (let i = 0; i < reverse.length; i++) {
      total = total + parseInt(reverse[i]);
    }
    let validate = false;
    if (total % 10 === 0) {
      validate = true;
    }
    console.log(total);
    console.log(validate);
    /*  if (validate === true) {
      alert("El número de tarjeta Si corresponde a una tarjeta de crédito");
    } else {
      alert("El número de tarjeta No coresponde a una tarjeta de crédito ");
    }*/
    return validate;
  },
  maskify: (creditCardNumber) => {
    if (creditCardNumber.length < 5) {
      return creditCardNumber;
    }
    creditCardNumber = creditCardNumber.toString();
    const arreglo = creditCardNumber.split("");

    for (let i = 0; i < arreglo.length - 4; i++) {
      arreglo[i] = "#";
    }

    creditCardNumber = arreglo.join("");

    return creditCardNumber;
  },
};

export default validator;
