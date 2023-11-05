import { Jogos, jogosData } from "./jogos";

const tgyScript = document.getElementById("tgyScript");

document.addEventListener('DOMContentLoaded', function() {

  function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("tgy-card");

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
    releaseDateElement.textContent = item.releaseDate;

    nameCard.appendChild(titleElement);
    nameCard.appendChild(releaseDateElement);

    const publisherCard = document.createElement("div");
    publisherCard.classList.add("publisher-card");

    const publisherElement = document.createElement("p");
    publisherElement.textContent = item.publisher;

    publisherCard.appendChild(publisherElement);

    const score = document.createElement("div");
    score.classList.add("score");

    const h1 = document.createElement("h1");
    h1.textContent = item.progress;

    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
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

  jogosData.forEach(item => {
    const card = createCard(item);
    tgyScript.appendChild(card);
  });
});