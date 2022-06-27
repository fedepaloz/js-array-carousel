const sources ["img/1.jpg","im]


//prendere tutte le immagini dal dom
const images = document.querySelectorAll('#carousel img');


/* modo per poter poi scegliere di prendere a piacimento l immagine che io decido, creo una variabile let che sta ad indicare che quello è l'elemento con classe active */

let currentActiveIndex = 0

/* array di images con dentro la variabile let definita sopra mi permette di scegliere che all apertura della pagina l immagine che dovra comparire deve essere quella attiva. (si legge aggiungo la classe active all elemento designato dalla variabile let che ho definito sopra)  */

images[currentActiveIndex].classList.add('active')


//prendo le frecce dal dom

const leftButton = document.getElementById("left-arrow")
const rightButton = document.getElementById("right-arrow")

/* gestisco la funzione relativa al bottone, quando lo premo incremento l'indice della variabile currentActiveIndex di uno e poi gli riassegno la classe active facendo si che si applichi all' immagine dell'indice selezionata */

rightButton.addEventListener('click', function () {
    images[currentActiveIndex].classList.remove('active');
    currentActiveIndex++;
    if (currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }
    images[currentActiveIndex].classList.add('active');
})



leftButton.addEventListener('click', function () {
    images[currentActiveIndex].classList.remove('active');
    currentActiveIndex--;
    if (currentActiveIndex === 0) {
        currentActiveIndex = 3
        
    }
    images[currentActiveIndex].classList.add('active');
})