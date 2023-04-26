const validator = {
  isValid: (creditCardNumber) => {
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
