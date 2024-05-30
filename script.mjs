import{proyectos}from "./proyectos.mjs";

const PrevBtn =document.getElementById("PrevBtn")
const NextBtn =document.getElementById("NextBtn")
let indexProyecto=0;

PrevBtn.addEventListener('click',prevImage);

NextBtn.addEventListener('click',nextImage);


const carouselInner = document.querySelector('.carousel-inner');
const totalImages = 5;
let currentIndex = 0; 
let proyectoPrevio = currentIndex;

function rotateCarousel() {
    const angle = (360 / totalImages) * currentIndex; // Calculamos el ángulo de rotación para la imagen actual
    carouselInner.style.transform = `rotateY(-${angle}deg)`; // Aplicamos la rotación
}

function prevImage() {
    proyectoPrevio = currentIndex;
    indexProyecto= (indexProyecto - 1 + proyectos.length) % proyectos.length;
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Calculamos el índice de la imagen anterior
    rotateCarousel(); // Rotamos el carrusel a la imagen anterior
    setProyecto();
    imagenRelleno();
}

function nextImage() { 
    proyectoPrevio = currentIndex;
    indexProyecto = (indexProyecto + 1 ) % proyectos.length;

    currentIndex = (currentIndex + 1) % totalImages; // Calculamos el índice de la siguiente imagen
    rotateCarousel(); // Rotamos el carrusel a la siguiente imagen
    setProyecto();
    imagenRelleno();
}

function setProyecto(){
    let proyectoElement=document.getElementById(currentIndex);
    let imagenProyectoElement=proyectoElement.getElementsByTagName("img")[0];
    imagenProyectoElement.setAttribute("src",proyectos[indexProyecto].img )

    
    proyectoElement.setAttribute("href",proyectos[indexProyecto].link )

    
}
setProyecto();


function imagenRelleno(){
    let anteriorElement=document.getElementById(proyectoPrevio);
    let imagenAnterior=anteriorElement.getElementsByTagName("img")[0];
    imagenAnterior.setAttribute("src","./img/fondo.jpg" )
}