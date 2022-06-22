ejecutarCodigo = () => {
  //alert('Hola, mundo!')
}

ejecutarCodigo();


/* Seleccione el elemento con el identificador titulo1 */
let elementT = document.getElementById('titulo1');
elementT.textContent= "Album de Fotos";
//console.log(elementosT);



/* Seleccione los elementos con la clase text-muted */
let elementTM = document.getElementsByClassName('text-muted');

let description =`
  <span> En este sitio encontrarás un album de fotos inspirado en el snippet de 
    <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">
      Codepen - Taj Uddin
    </a>.
  </span>`

elementTM[1].outerHTML = description;

/* Seleccione los elementos con la etiqueta p. */

let elementP = document.getElementsByTagName('p');
elementP[1].setAttribute('class','d-none');
