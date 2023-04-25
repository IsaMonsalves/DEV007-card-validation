# Validando una tarjeta de crédito

![](https://thumbs.gfycat.com/FarBarrenBull-max-1mb.gif)

## Índice
* [1. Preámbulo](#1-Preámbulo)
* [2. Eligiendo el proyecto](#2-Eligiendo-el-proyecto)
* [3. Metodología de trabajo](#3-Metodología-de-trabajo)
* [4. Funcionalidad](#4-funcionalidad)
* [5. Plataforma](#5-plataforma)

***

## 1. Preámbulo.

¿Estás realizando ventas con tarjeta de crédito y necesitas saber si realmente esta sirve?

¿ Debes realizar una compra y no tienes seguridad del tipo de tarjeta que estás usando

A continuación te presentamos una herramienta muy útil al momento de querer realizar o recibir una compra con el número de una tarjeta de crédito. 
Nos referimos al validador de tarjetas, el cual fue creado para evitar estafas y fraudes al momento de recibir una compra y evitar vergüenzas y confusión al momento de realizar una compra.

A través de esta herramienta, te ofrecemos de una manera fácil y segura la oportunidad de validar tu tarjeta de crédito. Para mayor seguridad y entendimiento hemos anexado una sección de preguntas frecuentes para que realizes con toda la confianza el proceso de validación de tu tarjeta.


## 2. Eligiendo el proyecto.

Es cierto que hoy en día las compras por internet se realizan de manera masiva en todos los lugares del mundo, si bien su uso puede ser casi intuitivo,se sabe que no todas las personas confían en aplicar los métodos de pago de manera inmediata, ya que en algunos casos el pago puede ser rechazado debido al tipo de tarjeta a utilizar.

Es por esto que se decidió crear un proyecto pensando en aquellas personas que antes de realizar cualquier movimiento prefieren corroborar la validez del medio de pago utilizado antes de hacerlo efectivo, ya sea como vendedor o comprador.

Debido a lo anterior se comenzó a trabajar en un prototipo de validador de tarjeta que sea comprensible y fácil de usar pero que a la vez otorgue confianza y seguridad al usuario, dando una estructura seria y elaborada a la interfaz del proyecto.

## 3. Metodología de trabajo.

Para comenzar el proyecto se realió un bosquejo manual de la interfaz de la página, pensando en que se despliegue una página de incio en la que se puede seleccionar botones que te redirijan al validador o las preguntas frecuentes. 

Este bosquejo fue digitalizado para comenzar a dar forma al proyectoa través de HTML y CSS respectivamente.


IMAGEN


Una vez realizado el esqueleto visual de la página se comenzó a dar funcionalidad a través de Javascript. En este caso se crearon 2 archivos .JS para separar la lógica de la validación y enmascarado de los números del resto de funciones asociadas al DOM.

Cabe destacar que la validación de la tarjeta se realizó bajo la metodología del [Algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn#:~:text=El%20algoritmo%20de%20Luhn%20o,cr%C3%A9dito%2C%20n%C3%BAmeros%20IMEI%2C%20etc.).

## 4. Funcionalidad.
En cuanto a la funcionalidad principal se establecieron dos grandes desafíos:

###### 1.Validación de la tarjeta:

Para esto se realizó una función que actuará sobre los números ingresados en el input creditCardNumber, este es un input de tipo texto que se ha condicionado para permitir sólo números del 0 al 9, símbolo # y anular los backspaces.

En palabras simples, el valor se pasó a tipo string y luego se transformó en un array para poder reversar la posición de los carácteres y luego aplicar los pasos restantes para validar la tarjeta. Si el valor corresponde a una tarjeta de crédito retorna un valor boolean True y este despliega un alert indicando la validez de la tarjeta, en caso contrario retorna el valor False y despiega un alert informando la situación.


###### 2.Enmascarado de los números:


Para enmascarar números se generó una función que actúe en los valores del mismo input anterior (creditCardNumber), este se pasó a valor string para poder generar el arrray y ocultar con el símbolo # todos los números excepto los últimos 4, independiente del largo de la cadena.

Cabe destacar que el input fue previamente configurado para permitir un máximo de 18 caracteres ya que las tarjetas de crédito deben tener entre 12 y 18 números.

## 5. Plataforma.

Durante la realización del proyecto se utilizó la plataforma GitHub para almacenar los archivos e ir actualizando los cambios a través de commits.

Una vez terminada, testeada y aprobada la página se utilizó Git Pages para hacer pública la pagina y así lograr que gratuitamente los usuarios comiencen a utilizarla.





***

*A futuro se espera poder sseguir dando funcionalidad  a la página generando una actualización que agregue el inentificador de franquicia para agregar información útil al usuario.
>Derechos de autor reservados a nombre de  Ester Isabella Monsalves Muñoz.


>Contacto: ester.isabella.m@gmail.com.
