//function para tocar o som
function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

//pegando todos elemento com .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");

//usando for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    console.log(evento.code);

    if (evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

//usando o while
/*
while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };

  contador = contador + 1;

  console.log(contador);
}
*/
