//Ejercicio 1
console.log("Hola mundo");

//Ejercicio 2
alert("¡Me llamo Andrea!");

//Ejercicio 3

var name= "Andrea";
var lastName="Penso";

console.log(`${name} ${lastName}`);


//Ejercicio 4

var num1=28;
var num2=36;
console.log(`La suma entre ${num1} y ${num2} es ${num1 + num2}`);


//Ejercicio 5

var nota_examen= 7;

if(nota_examen>=5){
  alert(`Has aprobado con un ${nota_examen}. ¡Felicidades!`);
}
else{
    alert(`Has suspendido con un ${nota_examen}. ¡Vuelve a intentarlo!`);
}


//Ejercicio 6

var text1="Tinc un cotxe de color verd";
var text2=text1.replace("verd", "blau");
var text3=text2.replace(/o/g, "u");

console.log(text1);
console.log(text2);
console.log(text3);


//Ejercicio 7

var list= ["taula", "cadira", "ordinador", "llibreta"];
var i;

for (i=0; i<list.length; i++){
  console.log(`L'objecte ${list[i]} està a la posició ${i}.`);
}


//Ejercicio 8

function calculadora (operation, num1, num2){
  var i;
  switch(operation){
    case "suma":
      i=num1+num2;
      break;
    case "resta":
      i=num1-num2;
      break;
    case "multiplicacio":
      i=num1*num2;
      break;
    case "divisio":
      i=num1/num2;
      break;
    default:
  }
  
  return i;
}

var resultat=calculadora("resta", 40, 20);
console.log(`El resultat de la calculadora és ${resultat}`);
