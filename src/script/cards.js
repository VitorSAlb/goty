// const cardData = [
//     {
//       title: "Starfield",
//       releaseDate: "00/00/0000",
//       imagesLink: "starfield",
//       publisher: "Microsoft",
//       progress: 80,
//     },
//     {
//       title: "Redfall",
//       releaseDate: "00/00/0000",
//       imagesLink: "redfall",
//       publisher: "Microsoft",
//       progress: 38,
//     },
//     {
//         title: "Star Wars Jedi Survivor",
//         releaseDate: "00/00/0000",
//         imagesLink: "star-wars-jedi-survivor",
//         publisher: "Steam | Microsoft | PSN",
//         progress: 57,
//       },
//       {
//         title: "Spider Man 02",
//         releaseDate: "00/00/0000",
//         imagesLink: "spider-man-2",
//         publisher: "PSN",
//         progress: 78,
//       },
//       {
//         title: "Baldur's Gate III",
//         releaseDate: "00/00/0000",
//         imagesLink: "baldurs-gate-III",
//         publisher: "Steam | PSN",
//         progress: 38,
//       },
//       {
//         title: "Dead Space",
//         releaseDate: "00/00/0000",
//         imagesLink: "dead-space-remake",
//         publisher: "",
//         progress: 38,
//       },
//       {
//         title: "Diablo IV",
//         releaseDate: "00/00/0000",
//         imagesLink: "diablo-IV",
//         publisher: "",
//         progress: 38,
//       },
//       {
//         title: "Final Fantasy XVI",
//         releaseDate: "00/00/0000",
//         imagesLink: "final-fantasy-XVI",
//         publisher: "",
//         progress: 38,
//       },
//       {
//         title: "Fortnite",
//         releaseDate: "00/00/0000",
//         imagesLink: "fortnite",
//         publisher: "",
//         progress: 38,
//       },
//       {
//         title: "Minecraft",
//         releaseDate: "00/00/0000",
//         imagesLink: "minecraft",
//         publisher: "",
//         progress: 100,
//       },
//       {
//         title: "Resident Evil 4",
//         releaseDate: "00/00/0000",
//         imagesLink: "resident-evil-4-re",
//         publisher: "",
//         progress: 97,
//       }, 
//       {
//         title: "Street Fighter 6",
//         releaseDate: "00/00/0000",
//         imagesLink: "street-fighter-6",
//         publisher: "",
//         progress: 48,
//       },
//       {
//         title: "Super Mario 64",
//         releaseDate: "00/00/0000",
//         imagesLink: "super-mario-64",
//         publisher: "",
//         progress: 99,
//       },
//       {
//         title: "Super Mario Bros Wonder",
//         releaseDate: "00/00/0000",
//         imagesLink: "super-mario-bros-wonder",
//         publisher: "",
//         progress: 95,
//       },
//       {
//         title: "The Legend of Zelda Ocarina of Time",
//         releaseDate: "00/00/0000",
//         imagesLink: "the-legend-of-zelda-ocarina-of-time",
//         publisher: "",
//         progress: 100,
//       },
//       {
//         title: "The Legend of Zelda Tears of the Kingdom",
//         releaseDate: "00/00/0000",
//         imagesLink: "zelda-tears-of-the-kingdom",
//         publisher: "",
//         progress: 96,
//       },
    
//     // Adicione mais objetos para mais cards
//   ];

import * as all from './jogos.js';
  
const container = document.getElementById("container");

     all.cardData.forEach( item => {
        const card = document.createElement("div");
        card.classList.add("nr-card");

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
        releaseDateElement.textContent = `${item.releaseDate}`;

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
        
        
        card.appendChild(photoCard);
        card.appendChild(infoCard);
        infoCard.appendChild(nameCard);
        infoCard.appendChild(publisherCard);
        infoCard.appendChild(score);
        infoCard.appendChild(progressContainer);
        progressContainer.appendChild(progressBar);

        

        container.appendChild(card);
});  