import { Jogos, jogosData } from './jogos.js';

const newRelease = document.getElementById("newRelease");

const maxCards = 8;
const startIndex = jogosData.length - maxCards;
const limiteDeJogosData = jogosData.slice(startIndex);

function cardClick(index) {
  
  console.log("O card " + index + " clicado!");

  var valorIndex = index + (jogosData.length - 8);

  // Redireciona para uma página HTML com o valor do índice como parâmetro na URL.
  window.location.href = "pages/jogo.html?index=" + valorIndex;

  console.log("Valor do índice: " + valorIndex);
}

document.addEventListener('DOMContentLoaded', function() {

  function createCard(item) {
    const card = document.createElement("div")
    card.classList.add("nr-card")    
    console.log("nr-section criada")

    const photoCard = document.createElement("div");
    photoCard.classList.add("photo-card");

    const imgElement = document.createElement("img");
    imgElement.style.height = "202px"
    imgElement.style.width = "155px"
    imgElement.src = "/src/imgs/capaGames/" + item.imagesLink + ".svg";

    photoCard.appendChild(imgElement);

    const infoCard = document.createElement("div");
    infoCard.classList.add("info-card");

    const nameCard = document.createElement("div");
    nameCard.classList.add("name-card");

    const titleElement = document.createElement("h1");
    titleElement.textContent = item.title;

    const releaseDateElement = document.createElement("p");
    releaseDateElement.textContent = `${item.releseData}`;

    nameCard.appendChild(titleElement);
    nameCard.appendChild(releaseDateElement);

    const publisherCard = document.createElement("div");
    publisherCard.classList.add("publisher-card");

    const publisherElement = document.createElement("p");
    publisherElement.textContent = `${item.publisher}`;

    publisherCard.appendChild(publisherElement);

    const score = document.createElement("div");
    score.classList.add("score");

    const h1 = document.createElement("h1");
    score.style.margin = "0 auto";
    score.textContent = item.progress

    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    if (item.progress < 50) {
      progressBar.classList.add("progress-bar-red"); 
    } else if (item.progress < 80) {
      progressBar.classList.add("progress-bar-yellow");
    } else {
      progressBar.classList.add("progress-bar-green"); 
    }

    progressBar.style.width = `${item.progress}%`;
    progressBar.id = "progress";
    
    infoCard.appendChild(nameCard);
    infoCard.appendChild(publisherCard);
    infoCard.appendChild(score);
    infoCard.appendChild(progressContainer);
    progressContainer.appendChild(progressBar);

    card.appendChild(photoCard);
    card.appendChild(infoCard);

    return card;
  }

  limiteDeJogosData.forEach( (item, index) => {
    const card = createCard(item);
    card.addEventListener('click', () => cardClick(index));
    newRelease.appendChild(card);
  });
});

