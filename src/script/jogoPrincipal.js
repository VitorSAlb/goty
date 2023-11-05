import { Jogos, jogosData } from './jogos.js'

const jogoPrincipal = document.getElementById("jogoPrincipal");
// const cardClicado = cardClick();
//ideia, os dois numeros do slice eu consigo selecionar o jogo, caso eu identifique jogo por jogo e consiguirei caminhar entre ele
var urlParams = new URLSearchParams(window.location.search);
var valorIndex = urlParams.get("index");

var itemDesejado = jogosData[valorIndex];

document.addEventListener('DOMContentLoaded', function () {

    function createGamePG(item) {
        const cardP = document.createElement("div");
        cardP.classList.add("main-jogo");

        // Criação da parte da capa
        const capagJogo = document.createElement("div");
        capagJogo.classList.add("capag-jogo");

        const imgElement = document.createElement("img");
        imgElement.style.height = "606px"
        imgElement.style.width = "465px"
        imgElement.src = "/src/imgs/capaGames/" + item.imagesLink + ".svg";
        imgElement.alt = `Capa do jogo ${item.title}`;

        capagJogo.appendChild(imgElement);

        const infoJogo = document.createElement("div");
        infoJogo.classList.add("info-jogo");

        const namegJogo = document.createElement("div");
        namegJogo.classList.add("nameg-jogo");

        const titleElement = document.createElement("h1");
        titleElement.textContent = item.title;

        const releaseDateElement = document.createElement("h3");
        releaseDateElement.textContent = `${item.releseData}`

        namegJogo.appendChild(titleElement);
        namegJogo.appendChild(releaseDateElement);

        const publishergJogo = document.createElement("div");
        publishergJogo.classList.add("publisherg-jogo");

        const publisherElement = document.createElement("h2");
        publisherElement.textContent = `${item.publisher}`;

        publishergJogo.appendChild(publisherElement);

        const generogJogo = document.createElement("div");
        generogJogo.classList.add("generog-jogo");

        const generoElement = document.createElement("h2");
        generoElement.textContent = `${item.genero}`;

        generogJogo.appendChild(generoElement);

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

        const usergLocal = document.createElement("div");
        usergLocal.classList.add("userg-local");

        const nomeUsuario = document.createElement("p");
        nomeUsuario.textContent = `Nome do usuario:`

        usergLocal.appendChild(nomeUsuario);


        const blocksNote = document.createElement("div");
        blocksNote.classList.add("blocks-note");

        usergLocal.appendChild(blocksNote);

        const statusDiv = document.createElement("div");
        statusDiv.classList.add("status-div");

        const statusA = document.createElement("a");
        statusA.classList.add("statusA");
        const statusP = document.createElement("p");
        statusP.classList.add("statusP");
        statusP.textContent = `Status v`

        blocksNote.appendChild(statusDiv);
        statusDiv.appendChild(statusA);
        statusDiv.appendChild(statusP);

        const rateNumberDiv = document.createElement("div");
        rateNumberDiv.classList.add("rateNumber-div");

        const rateNumberA = document.createElement("a");
        const rateNumberP = document.createElement("p");
        rateNumberP.textContent = `0 - 100`

        blocksNote.appendChild(rateNumberDiv);
        rateNumberDiv.appendChild(rateNumberA);
        rateNumberDiv.appendChild(rateNumberP);

        const rateDiv = document.createElement("div");
        rateDiv.classList.add("rate-div");

        const rateA = document.createElement("a");
        const rateP = document.createElement("p");
        rateP.textContent = `rate`

        blocksNote.appendChild(rateDiv);
        rateDiv.appendChild(rateA);
        rateDiv.appendChild(rateP);

        const descriptDiv = document.createElement("div");
        descriptDiv.classList.add("descript-div");

        const sobreJogo = document.createElement("h2");
        sobreJogo.textContent = `Sobre o jogo:`

        const descriptionText = document.createElement("p");
        descriptionText.textContent = `${item.description}`

        usergLocal.appendChild(descriptDiv);

        descriptDiv.appendChild(sobreJogo);
        descriptDiv.appendChild(descriptionText);


        infoJogo.appendChild(namegJogo);
        infoJogo.appendChild(publishergJogo);
        infoJogo.appendChild(generogJogo);
        infoJogo.appendChild(chaoContainer);
        infoJogo.appendChild(usergLocal);



        cardP.appendChild(capagJogo);
        cardP.appendChild(infoJogo);

        return cardP;
    }

    if (itemDesejado) {
        const cardP = createGamePG(itemDesejado);
        jogoPrincipal.appendChild(cardP);
    } else {
        console.error("O índice fornecido não é válido.");
    }

})