'use strict'

// prueba let y var

// prueba con var
var numero = 40;
document.write(numero+"</br>")
if(true){
  var numero = 60
  document.write(numero+"</br>")
}
document.write(numero+"</br>")

// prueba con let

var texto = "Atrid afuera";
console.log(texto)

if(true){
  var texto = "Nicolas"
  console.log(texto)
}
console.log(texto)