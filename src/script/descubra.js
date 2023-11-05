import { Jogos, jogosData } from './jogos.js';

const Descubra = document.getElementById("Descubra");

function cardClick(index) {
  // Este é o código que será executado quando um card for clicado
  console.log("O card " + index + " clicado!");

  var valorIndex = index;

  // Redirecione para uma página HTML com o valor do índice como parâmetro na URL.
  window.location.href = "jogo.html?index=" + valorIndex;

  // Use o valor do índice em seu script, por exemplo, exibindo-o no console.
  console.log("Valor do índice: " + valorIndex);
}
// FUNÇÃO PARA ALEATORIAZAR ARRAY, NÃO ESTÁ FUNCIONANDO, POIS O LINK DE REDIRECIONAMENTO ESTÁ INDO ERRADO!
// function shuffleArray(array) {
//   const shuffledArray = array.slice(); // Faça uma cópia da array para não afetar a original

//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); // Gere um índice aleatório
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Troque os elementos de posição
//   }

//   return shuffledArray;
// }


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
  // OUETRA PARTE DA ALEATORIZAÇÃO DE ARRAY
  // const jogosEmbaralhados = shuffleArray(jogosData);

  // const maxCards = 8; // Número máximo de cartões que deseja mostrar
  // const cartoesExibidos = jogosEmbaralhados.slice(0, maxCards); // Seleciona os primeiros 8 cartões embaralhados

  // Use o forEach para criar cartões para os elementos selecionados
  jogosData.forEach(function (item, index) {
      const cardP = createCard(item);
      cardP.addEventListener('click', () => cardClick(index));
      Descubra.appendChild(cardP);
  });
   
});

