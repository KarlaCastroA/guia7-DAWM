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


/* Challenge  */ 

//Reemplace todos los elementos svg por img


// Use el siguiente arreglo con las URLs a las imgagenes
let imagenes = [
  { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'}, 
  { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'}, 
  { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'},
  { url: 'https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'cartel'},
  { url: 'https://images.unsplash.com/photo-1653559260129-d4347e4c8df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'casa'},
  { url: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'comedor'},
  { url: 'https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'perro'},
  { url: 'https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'restaurant'},
  { url: 'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'coctel'} 
];

let svgArray = document.querySelectorAll('svg');


// Copiar los atributos de svg a img
for(var i = 1; i < svgArray.length ; i++) {
  let img = document.createElement('img');

  var inner = svgArray[i].innerHTML
  img.innerHTML = inner;
  img.setAttribute('src',imagenes[i-1]['url']);
  img.setAttribute('alt',imagenes[i-1]['alt']);
  svgArray[i].replaceWith(img)
}

