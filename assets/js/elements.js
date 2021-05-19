const cardsContainer = document.getElementById("cards-container");

let random = (min,max) => {
    return parseInt(Math.random() * ((max+1) - min) + min)
}

let card = () => {
    cardsContainer.innerHTML += (
        `
        <div>
        <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="./assets/img/basura${random(1,6)}.bmp" alt="imagen de basura" style="width:100%">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Loremp</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, non magni blanditiis animi repellat fugiat. Corrupti asperiores nobis nisi eveniet veritatis expedita, ipsam modi autem alias cumque commodi ea a.</p>
                  <p class="card-text"><small class="text-muted">Duvan Villadiego / Fecha de publicacion ${random(1,28)}/${random(1,12)}/2021</small></p>
                </div>
              </div>
            </div>
          </div>
    </div>
        `
    )
}

for (x=0;x<10;x++) {
    card()
}
