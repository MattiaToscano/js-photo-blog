let fotoContainer = document.getElementById("container-foto");
let overlay = document.getElementById("overlay");
let overlayButton = document.getElementById("overlay-button");
let overlayFoto = document.getElementById("img-overlay");

// Assicuriamoci che l'overlay sia inizialmente nascosto
if (overlay) {
    overlay.style.display = "none";
}
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    console.log(resp.data);
    const foto = resp.data;
    for (let i = 0; i < foto.length; i++) {
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








