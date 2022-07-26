//Ejercicio de Preguntas javascript
const Inicio = document.querySelector(".start_btn button");
const Reglas = document.querySelector(".info_box");
const Siguiente = Reglas.querySelector(".buttons .restart");
const Salir = Reglas.querySelector(".buttons .quit");
const PreguntaR = document.querySelector(".quiz_box");
const contadorTiempo = PreguntaR.querySelector(".timer .timer_sec");
const opcioneslist = document.querySelector(".option_list");
const siguiente_btn = document.querySelector("footer .next_btn");
const Resultados = document.querySelector(".result_box");
const SalirR =Resultados.querySelector(".buttons .quit");
const Reiniciar=Resultados.querySelector(".buttons .restart");
let Pcorrectas = 0;
let cantipre = 1;
let counter;
let tiempovalor = 15;
Inicio.onclick = () => {
  Reglas.classList.add("activeInfo");
};
SalirR.onclick=()=>{
  window.location.reload();
}
Reiniciar.onclick=()=>{
Resultados.classList.remove("activeResult");
 contador=0;
 cantipre=1;
 counter;
let Pcorrectas=0;
 tiempovalor=15;
Mostrarpreguntas(contador);
contadorpreguntas(cantipre);
clearInterval(counter);
Iniciotiempo(tiempovalor);
}
Salir.onclick = () => {
  Reglas.classList.remove("activeInfo");
};

Siguiente.onclick = () => {
  Reglas.classList.remove("activeInfo");
  PreguntaR.classList.add("activeQuiz");
  Mostrarpreguntas(0);
  contadorpreguntas(1);
  clearInterval(counter);
  Iniciotiempo(tiempovalor);
  siguiente_btn.classList.add("show");
};

siguiente_btn.onclick = () => {
  if (contador < Preguntas.length - 1) {
    contador++;
    cantipre++;
    Mostrarpreguntas(contador);
    contadorpreguntas(cantipre);
    clearInterval(counter);
    Iniciotiempo(tiempovalor);
  } else {
    MostrarResultados();
    console.log("se termino");
  }
};

let contador = 0;
function Mostrarpreguntas(index) {
  const InsertatPre = document.querySelector(".que_text");
  const OpcionesP = document.querySelector(".option_list");
  let Pregunta =
    "<span>" +
    Preguntas[index].numb +
    "." +
    Preguntas[index].question +
    "</span>";

  let Opciones =
    '<div class="option">' +
    Preguntas[index].options[0] +
    "<span></span></div>" +
    '<div class="option">' +
    Preguntas[index].options[1] +
    "<span></span></div>" +
    '<div class="option">' +
    Preguntas[index].options[2] +
    "<span></span></div>" +
    '<div class="option">' +
    Preguntas[index].options[3] +
    "<span></span></div>";
  InsertatPre.innerHTML = Pregunta;
  OpcionesP.innerHTML = Opciones;
  const opciones = document.querySelectorAll(".option");
  //  console.log(opcion);
  for (let i = 0; i < opciones.length; i++) {
    opciones[i].setAttribute("onclick", "Seleccionaropcion(this)");
  }
}

let tickIconos = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconos = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function Seleccionaropcion(texto) {
  let Resp = texto.textContent;
  let Respco = Preguntas[contador].answer;
  //Padrey hijos forman ARRAY
  let todaslasopciones = opcioneslist.children.length;

  if (Resp === Respco) {
    Pcorrectas++;
    texto.classList.add("correct");
    texto.insertAdjacentHTML("beforeend", tickIconos);
  } else {
    texto.classList.add("incorrect");
    texto.insertAdjacentHTML("beforeend", crossIconos);
    for (let index = 0; index < todaslasopciones; index++) {
      //.section.optionlista==Padre agregamos (.option.correct)
      if (opcioneslist.children[index].textContent === Respco) {
        //despues del span se agregara el item
        //opcionlist con  selecionas el hijo y insertamos
        opcioneslist.children[index].setAttribute("class", "option correct");
        opcioneslist.children[index].insertAdjacentHTML(
          "beforeend",
          tickIconos
        );
      }
    }
  }
  for (let index = 0; index < todaslasopciones; index++) {
    opcioneslist.children[index].classList.add("disabled");
  }
}
function contadorpreguntas(index) {
  const Totalpreg = PreguntaR.querySelector(".total_que");
  let totalpreguntas =
    "<span><p>" +
    index +
    "</p>of<p>" +
    Preguntas.length +
    "</p>Preguntas</span>";
  Totalpreg.innerHTML = totalpreguntas;
}

function Iniciotiempo(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    contadorTiempo.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      contadorTiempo.textContent = "00";
    }
  }
}
function MostrarResultados() {
  PreguntaR.classList.remove("activeQuiz");
  Resultados.classList.add("activeResult");
  const Mresultados = Resultados.querySelector(".score_text");
  //console.log("abierto");
  if (Pcorrectas >= 3) {
    let score =
      `<span>felicitaciones <p>` +
      Pcorrectas +
      `</p> de <p> ` +
      Preguntas.length +
      `</p></span>`;
    Mresultados.innerHTML = score;
  } else {
    let score =
      `<span>Lo Sentimos solo Tienes <p>` +
      Pcorrectas +
      `</p> de <p> ` +
      Preguntas.length +
      `</p></span>`;
      Mresultados.innerHTML=score;
  }
}
