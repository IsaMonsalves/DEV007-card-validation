
//const validator = {
  //isValid: function(creditCardNumber){}
  // debe retornar un boolean según si es válida (creditcardnumber)
  //validator es un objeto y se deben ejecutar funciones dentrode él (metodo)

// function rev(){
//  let numbers=document.getElementById("creditCardNumber").value;
// { 
//     for(i=0; i<numbers; i++){
//    if(i<0){
//   numbers=numbers.reverse();
//       }
//    }
//     }
//  return numbers
//  }   


 function validate(){

 // console.log("antes de reversar " + creditCardNumber);
  //se pasa el integer a string con elobjetivo de poder realizar split
  //al tener el split para generar el array, luego de eso se reversa
  //reverse es una función o método de arrays, cuando no era array no uncionaba
let creditCardNumber= document.getElementById("creditCardNumber").value
//value es para que almacene el valor del objeto, de lo contrario intentaria usar la etiqueta id
if(creditCardNumber.length < 12 || creditCardNumber.length >18){
  alert("Su tarjeta debe tener entre 12 y 18 números");
  return;
}
// return es para que al salir la alerta no ejecute la finción sino que vuelva al principio
  //Paso 1 : Reversar
  let reverse = creditCardNumber.toString().split("").reverse();

  for(let i = 0; i < reverse.length; i++){
  //Paso 2 : Duplicar los pares
  //determino que estoy en una posición par
    if((i+1) % 2 == 0)
    {
      //multiplico por 2 y reemplazo el valor anterior
      reverse[i] = reverse[i] * 2;
    }

    //Paso 3: Sumo los mayores a 10, en este caso se le restó 9
    //para optimizar se podría hacer dentro del if anterior, para que no recorra las posiciones impares
    //no se hizo para no confundir
    if(reverse[i] >= 10){
      reverse[i] = reverse[i] - 9;
    }
  }

  //Paso 4 : Se suman todos los números
  let total = 0;
  for(let i = 0; i < reverse.length; i++)
  {
    total = total + parseInt(reverse[i]);
  }

  let isValid = false;
  if(total % 10 == 0)
  {
    isValid = true;
  }

  console.log("después de reversar y multiplicar " + reverse.join(""));
  console.log(total);
  console.log(isValid);
  if(isValid==true){
    alert("El número de tarjeta corresponde a una tarjeta de crédito");
  } else {
    alert("El número de tarjeta No coresponde a una tarjeta de crédito ")
  }
  return isValid;

 // return finaliza la isntriccpn por lo que no se ejecuta nda debajo

}

//igual== o identico===
//= lo asigna y == lo comppara
// if se puede abreviar

  function enmascarar(){

  let number = document.getElementById("creditCardNumber").value;
  //obtener el valor del input

  //TODO enmascarar el valor del inpit
  let acumulador= esconder(number);

  //invocar a la función esconder


  //asignar el valor que retorna la función al input

  
  document.getElementById("creditCardNumber").value = acumulador;

}

  function esconder (creditCardNumber) {
    
    creditCardNumber= creditCardNumber.toString();
    let acumulador="";
      for(let i = 0; i<creditCardNumber.length; i++) {
        if (i<=12){
          acumulador= acumulador + "0"; 
        } else {
          acumulador= acumulador + creditCardNumber[i];
        
        }
      }
return acumulador;
  }
 // debe retornar string,en todos excpeto los ultimos 4 con #, revisar si debe ir dentro del mismo objeto
 //validator.maskify(aqui van los numeros de la tarjet) o validator.isValid(idem) se escribe así porque 
 //validator es un objeto que contiene la función, el objeto llama la función
 //console.log para enviar el sring a la consola, asi se pone el mensaje de vuelta
//export default validator;
