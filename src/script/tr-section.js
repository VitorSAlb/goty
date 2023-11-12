import { Jogos, jogosData } from './jogos.js';
import findGID from './jogos.js';

const trContainer = document.getElementById("trs-container");

function compareItems(a, b) {
// Primeiro, compare o progresso (progress) de forma decrescente
    if (a.progress > b.progress) {
        return -1;
    } else if (a.progress < b.progress) {
        return 1;
    } else {
        // Se o progresso for igual, compare as datas de lançamento (releaseDate) de forma decrescente
        if (a.releaseDate > b.releaseDate) {
        return -1;
        } else if (a.releaseDate < b.releaseDate) {
        return 1;
        }
        return 0;
    }
}

jogosData.sort(compareItems);

const top10Games = jogosData.slice(0, 10);

function cardClick(id) {
    const jogo = findGID(id);
    if(jogo) {
        window.location.href = `jogo.html?id=${id}`;
    } else {
        console.log("Jogo não encontrado");
    }
}

document.addEventListener('DOMContentLoaded', function() {

    function createCard(item, index) {
        const card = document.createElement("div");
        card.classList.add("tr-section");
        console.log("trs-section criado");

        const rankNumber = document.createElement("div");
        rankNumber.classList.add("rankNumber");

        const number = document.createElement("h3");
        number.textContent = `${index + 1}.`;

        rankNumber.appendChild(number);

        const trCard = document.createElement("div");
        trCard.classList.add("tr-card");

        const photoCard = document.createElement("div");
        photoCard.classList.add("tr-photo-card");

        const imgElement = document.createElement("img");
        imgElement.src = "/src/imgs/capaGames/" + item.imagesLink + ".svg";
        imgElement.alt = `Capa do jogo ${item.title}`

        photoCard.appendChild(imgElement);

        const infoCard = document.createElement("div");
        infoCard.classList.add("tr-info-card");

        const nameCard = document.createElement("div");
        nameCard.classList.add("tr-name-card");

        const titleElement = document.createElement("h1");
        titleElement.textContent = item.title;

        if (titleElement.textContent.length > 30) { 
            titleElement.style.fontSize = "2rem"
          }

        const releaseDateElement = document.createElement("h3");
        releaseDateElement.textContent = `${item.releseData}`;

        nameCard.appendChild(titleElement);
        nameCard.appendChild(releaseDateElement);

        const publisherCard = document.createElement("div");
        publisherCard.classList.add("tr-publisher-card");

        const publisherElement = document.createElement("h3");
        publisherElement.innerHTML = `<strong style="font-weight:500">Plataforma:</strong> ${item.publisher}`;


        const generoCard = document.createElement("div");
        generoCard.classList.add("tr-genero-card");

        publisherCard.appendChild(publisherElement);

        const generoElement = document.createElement("h3");
        generoElement.innerHTML = `<strong style="font-weight:500">Gênero:</strong> ${item.genero}`;

        generoCard.appendChild(generoElement);

        const chao = document.createElement("div");
        chao.classList.add("chao");

        const score = document.createElement("div");
        score.classList.add("score-tr");

        const scoreNumber = document.createElement("h3");
        score.textContent = `${item.progress}`

        const scoreUser = document.createElement("h4");
        scoreUser.textContent = "User Score"

        score.appendChild(scoreNumber);
        score.appendChild(scoreUser);

        const progressContainer = document.createElement("div");
        progressContainer.classList.add("progress-container-tr");

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");

        if (item.progress < 50) {
        progressBar.classList.add("progress-bar-red");
        } else if (item.progress < 80) {
        progressBar.classList.add("progress-bar-yellow"); // Progresso menor que 80, cor amarela
        } else {
        progressBar.classList.add("progress-bar-green"); // Progresso igual ou maior que 80, cor vermelha
        }

        progressBar.style.width = `${item.progress}%`;
        progressBar.id = "progress";

        chao.appendChild(score);
        chao.appendChild(progressContainer);
        progressContainer.appendChild(progressBar);


        infoCard.appendChild(nameCard);
        infoCard.appendChild(publisherCard);
        infoCard.appendChild(generoCard);
        infoCard.appendChild(chao);

        trCard.appendChild(photoCard);
        trCard.appendChild(infoCard);

        card.appendChild(rankNumber);
        card.appendChild(trCard);

        return card
    }

    top10Games.forEach( (item, index) => {
        const card = createCard(item, index);
        card.addEventListener('click', () => cardClick(item.id));
        trContainer.appendChild(card);
      }); 
});