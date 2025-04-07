let fotoContainer = document.getElementById("container-foto"); // Seleziona il contenitore delle foto
let overlay = document.getElementById("overlay"); // Seleziona l'overlay
let overlayButton = document.getElementById("overlay-button"); // Seleziona il pulsante di chiusura dell'overlay
let overlayFoto = document.getElementById("img-overlay");// Seleziona l'immagine nell'overlay

// Assicuriamoci che l'overlay sia inizialmente nascosto
if (overlay) {
    overlay.style.display = "none";
}
//Chiamata ajax
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => { 
    //Stampa la risposta nella console
    console.log(resp.data);
    //Crea variabile foto e cicla per stampare le foto
    const foto = resp.data;
    //Creo un ciclo per stampare le foto
    for (let i = 0; i < foto.length; i++) {
        //Creo una card per ogni foto
        let fotoCard = 
                `<div class="col-12 col-lg-4 col-md-6 col-sm-12">  
                  <div class="card mt-5"> 
                       <div class="card-body"> 
                           <img src="${foto[i].url}" alt="" class="img-fluid card-img" data-url="${foto[i].url}"> 
                           <h5 class="card-title">${foto[i].title}</h5> 
                           <p class="card-text">${foto[i].date}</p> 
                           <img src="./img/pin.svg" alt="" class="pin"> 
                        </div>
                     </div>
                  </div>`;
        fotoContainer.innerHTML += fotoCard;
    }
    // Aggiungi event listener a tutte le immagini nelle card
    const cardImages = document.querySelectorAll('.card-img');
    cardImages.forEach(img => {
        //Aggiungo un event listener al click di ogni immagine
        img.addEventListener('click', function() {
            // Imposta l'URL dell'immagine nell'overlay
            if (overlayFoto) {
                overlayFoto.src = this.getAttribute('data-url');
            }
            // Mostra l'overlay
            if (overlay) {
                overlay.style.display = "block";
            }
        });
    });
    // Aggiungi event listener al pulsante di chiusura dell'overlay
    if (overlayButton) {
        overlayButton.addEventListener('click', function() {
            overlay.style.display = "none";
        });
    }
});








