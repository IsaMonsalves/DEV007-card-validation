
 function isValid(){
let creditCardNumber= document.getElementById("creditCardNumber").value
if(creditCardNumber.length < 12 || creditCardNumber.length >18){
  alert("Su tarjeta debe tener entre 12 y 18 números");
  return;
}
  let reverse = creditCardNumber.toString().split("").reverse();
  for(let i = 0; i < reverse.length; i++){
    if((i+1) % 2 == 0)
    {
      reverse[i] = reverse[i] * 2;
    }
    if(reverse[i] >= 10){
      reverse[i] = reverse[i] - 9;
    }
  }
  let total = 0;
  for(let i = 0; i < reverse.length; i++)
  {
    total = total + parseInt(reverse[i]);
  }
  let validate = false;
  if(total % 10 == 0)
  {
    validate = true;
  }
  console.log(total);
  console.log(validate);
  if(validate==true){
    alert("El número de tarjeta Si corresponde a una tarjeta de crédito");
  } else {
    alert("El número de tarjeta No coresponde a una tarjeta de crédito ");
  }
  return validate;
}

function maskify(){
  let number = document.getElementById("creditCardNumber").value;
  let acumulador= esconder(number);
  console.log(number);
  document.getElementById("creditCardNumber").value = acumulador;
}
  function esconder (creditCardNumber) {
    creditCardNumber= creditCardNumber.toString();
    let acumulador="";
      for(let i = 0; i<creditCardNumber.length; i++) {
        if (i<=12){
          acumulador= acumulador + "#"; 
        } else {
          acumulador= acumulador + creditCardNumber[i];
        }
      }
      console.log(acumulador);
      console.log(creditCardNumber);
return acumulador;
  }
 
  export default validator;



