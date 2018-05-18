// Mandamos a llamar a los elmentos del HTML que se van a manipular
var saludarUsario = document.getElementById('bienvenida'); 
var Mensaje = document.getElementById('finG');
var answ1 = document.getElementsByName("ans1")[0].value;
var answ2 = document.getElementsByName("ans2")[0].value;
var mostrarResultados = document.getElementById('contenedorPrincipal');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');

function ingresarG(){
  var nombreUsuario = document.getElementsByName("usuario")[0].value;
  saludarUsario.innerHTML = "😊 Bienvenid@ " + nombreUsuario + " 😊" ;
  document.getElementById("cabezera").style.display="none";
  document.getElementById("startG").style.display="block";

}

function EmpezarJ(){
  if(document.getElementById("startJ").onclick){
    document.getElementById("startG").style.display="none";
    document.getElementById("preguntas").style.display="block";
  }
}

function CancelJ(){
  if(document.getElementById("cancelJ").onclick){
    document.getElementById("finG").style.display="block";
    Mensaje.innerHTML =  "<h1>Gracias por visitarnos, nos vemos la próxima  </h1>";
    document.getElementById("startG").style.display="none";
  }
}



// Evaluamos las respuestas del usuario (para iniciar el juego)
function Jugar(){
    /* PRIMERA PREGUNTA */
    if (answ1 == 2) { //Ejemplo de opción con NÚMERO
      respuestasCorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>Respuesta correcta:</strong> 🍺 La cerveza 🍺";
    } else {
      respuestasIncorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>La respuesta correcta era:</strong> 🍺 La cerveza 🍺";
    }
    //SEGUNDA PREGUNTA
    if (answ2 == "A") { //Ejemplo de opción con LETRA
      //respuestasCorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
      respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    } else {
      respuestasIncorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    }
    document.getElementById("preguntas").style.display="none";
    document.getElementById("respuestas").style.display="block";
}
