import { Jogos, jogosData } from './jogos.js';
import findGID from './jogos.js';

const container = document.getElementById("container");

function cardClick(id) {
  const jogo = findGID(id);
  if (jogo) {
    // Crie uma URL com a ID do jogo como parâmetro
    window.location.href = `jogo.html?id=${id}`;
  } else {
    console.log("Jogo não encontrado.");
  }
}
document.addEventListener('DOMContentLoaded', function() {

  function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("nr-card");    
    console.log("nr-section criada");

    const photoCard = document.createElement("div");
    photoCard.classList.add("photo-card");

    const imgElement = document.createElement("img");
    imgElement.style.height = "202px"
    imgElement.style.width = "155px"
    imgElement.src = "/src/imgs/capaGames/" + item.imagesLink + ".svg";
    imgElement.alt = `Capa do jogo ${item.title}`

    photoCard.appendChild(imgElement);

    const infoCard = document.createElement("div");
    infoCard.classList.add("info-card");

    const nameCard = document.createElement("div");
    nameCard.classList.add("name-card");

    const titleElement = document.createElement("h1");
    titleElement.textContent = item.title;
    
    if (titleElement.textContent.length > 30) { 
      titleElement.textContent = titleElement.textContent.substring(0, 30) + '...';
    }

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
      progressBar.classList.add("progress-bar-red"); // Progresso menor que 50, cor verde
    } else if (item.progress < 80) {
      progressBar.classList.add("progress-bar-yellow"); // Progresso menor que 80, cor amarela
    } else {
      progressBar.classList.add("progress-bar-green"); // Progresso igual ou maior que 80, cor vermelha
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

  jogosData.forEach( (item) => {
    const card = createCard(item);
    card.addEventListener('click', () => cardClick(item.id));
    container.appendChild(card);
  }); 
});