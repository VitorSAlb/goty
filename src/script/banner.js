import { Jogos, jogosData } from './jogos.js'

const bannerP = document.getElementById("bannerP");

const jogoEscolhido = 15

function cardClick(jogoEscolhido) {

    // Redirecione para uma página HTML com o valor do índice como parâmetro na URL.
    window.location.href = "pages/jogo.html?index=" + jogoEscolhido;

    // Use o valor do índice em seu script, por exemplo, exibindo-o no console.
    console.log("Valor do índice: " + jogoEscolhido);
}

var itemDesejado = jogosData[jogoEscolhido];

document.addEventListener('DOMContentLoaded', function () {

    function createBanner(item) {
        const banner = document.createElement("div");
        banner.classList.add("main-banner");
        
        const capagBanner = document.createElement("div");
        capagBanner.classList.add("capag-banner");
        
        
        const imgElement = document.createElement("img");
        
        imgElement.src = "/src/imgs/capaGames/" + item.imagesLink + ".svg";
        imgElement.alt = `Capa do jogo ${item.title}`;

        capagBanner.appendChild(imgElement);

        const infoBanner = document.createElement("div");
        infoBanner.classList.add("info-banners");

        const namegBanner = document.createElement("div");
        namegBanner.classList.add("nameg-banner");

        const titleElement = document.createElement("h1");
        titleElement.textContent = item.title;

        const releaseDateElement = document.createElement("h3");
        releaseDateElement.textContent = `${item.releseData}`

        namegBanner.appendChild(titleElement);
        namegBanner.appendChild(releaseDateElement);
        
        // 

        const publishergBanner = document.createElement("div");
        publishergBanner.classList.add("publisherg-banner");

        const publisherElement = document.createElement("h2");
        publisherElement.textContent = `${item.publisher}`;

        publishergBanner.appendChild(publisherElement);

        //

        const chaoContainer = document.createElement("div");
        chaoContainer.classList.add("chao");

        const score = document.createElement("div");
        score.classList.add("scoreg-jogo");

        const nota = document.createElement("h1");
        nota.textContent = item.progress

        const userScoreDesc = document.createElement("h3");
        userScoreDesc.textContent = "user score"

        chaoContainer.appendChild(score);
        score.appendChild(nota);
        score.appendChild(userScoreDesc);

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

        chaoContainer.appendChild(progressContainer);
        progressContainer.appendChild(progressBar);

        infoBanner.appendChild(namegBanner);
        infoBanner.appendChild(publishergBanner);
        infoBanner.appendChild(chaoContainer);

        banner.appendChild(capagBanner);
        banner.appendChild(infoBanner);

        return banner

    }

    if (itemDesejado) {
        const capagBanner = createBanner(itemDesejado);
        bannerP.addEventListener('click', () => cardClick(jogoEscolhido));
        bannerP.appendChild(capagBanner);
    } else {
        console.error("O índice fornecido não é válido.");
    }

});