import { Jogos, jogosData } from './jogos.js';
import findGID from './jogos.js';

const cardaosection = document.getElementById("cardao");

const indiceAleatorio = Math.floor(Math.random() * jogosData.length);

// Escolher jogo do cardão
const gameID = jogosData[indiceAleatorio].id;

const limiteDeJogosData = jogosData.filter((item) => item.id === gameID);

function cardClick(id) {
  const idjogo = findGID(id);
  if (idjogo) {
    // Crie uma URL com a ID do jogo como parâmetro
    window.location.href = `pages/jogo.html?id=${id}`;
  } else {
    console.log("Jogo não encontrado.");
  }
}

document.addEventListener('DOMContentLoaded', function() {

  function createCard(item) {
    const cardao = document.createElement("div")
    cardao.classList.add("cardao")    
    console.log("cardao criada")

    const photoCard = document.createElement("div");
    photoCard.classList.add("photo-cardao");

    const imgElement = document.createElement("img");
    imgElement.style.height = "404px"
    imgElement.style.width = "310px"
    imgElement.src = "/src/imgs/capaGames/" + item.imagesLink + ".svg";

    photoCard.appendChild(imgElement);

    const infoCard = document.createElement("div");
    infoCard.classList.add("info-cardao");

    const nameCard = document.createElement("div");
    nameCard.classList.add("name-cardao");

    const titleElement = document.createElement("h1");
    titleElement.textContent = item.title;
    titleElement.style.fontSize = "2rem";

    const releaseDateElement = document.createElement("p");
    releaseDateElement.textContent = `${item.releseData}`;

    nameCard.appendChild(titleElement);
    nameCard.appendChild(releaseDateElement);

    const publisherCard = document.createElement("div");
    publisherCard.classList.add("publisher-cardao");

    const publisherElement = document.createElement("p");
    publisherElement.textContent = `${item.publisher}`;

    publisherCard.appendChild(publisherElement);

    const score = document.createElement("div");
    score.classList.add("score");

    const h1 = document.createElement("h1");
    score.style.margin = "0 auto";
    score.textContent = item.progress
    score.style.fontSize = "2rem";


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

    cardao.appendChild(photoCard);
    cardao.appendChild(infoCard);

    return cardao;
  }

    limiteDeJogosData.forEach( (item) => {
    const cardao = createCard(item);
    cardao.addEventListener('click', () => cardClick(item.id));
    cardaosection.appendChild(cardao);
  });
});