export class Jogos {
    constructor(id, title, releseData, imagesLink, publisher, genero, description, progress) {
        this.id = id;
        this.title = title;
        this.releseData = releseData;
        this.imagesLink = imagesLink;
        this.publisher = publisher;
        this.genero = genero;
        this.description = description;
        this.progress = progress;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getReleseData() {
        return this.releseData;
    }

    getPublisher() {
        return this.publisher;
    }

    getGenero() {
        return this.genero;
    }

    getProgress() {
        return this.progress;
    }
}

export const jogosData = [
    new Jogos(
        1,
        "Starfield",
        "06/09/2023",
        "starfield",
        "Microsoft",
        "RPG | Aventura",
        "Jogo com mais de mil planetas exploraveis",
        70,
    ),
    new Jogos(
        2,
        "Redfall",
        "02/05/2023",
        "redfall",
        "Microsoft",
        "",
        "",
        35,
    ),
    new Jogos(
        3,
        "Star Wars Jedi Survivor",
        "28/04/2023",
        "star-wars-jedi-survivor",
        "Steam | Microsoft | PSN",
        "Aventura | Ação",
        "Joguinho de star wars bugado",
        64,
    ),
    new Jogos(
        4,
        "Spider Man 02",
        "20/10/2023",
        "spider-man-2",
        "PSN",
        "Ação",
        "",
        91,
    ),
    new Jogos(
        5,
        "Baldur's Gate III",
        "03/08/2023",
        "baldurs-gate-III",
        "Steam | PSN",
        "",
        "",
        89,
    ),
    new Jogos(
        6,
        "Dead Space",
        "27/01/2023",
        "dead-space-remake",
        "",
        "",
        "",
        88,
    ),
    new Jogos(
        7,
        "Diablo IV",
        "06/06/2023",
        "diablo-IV",
        "Microsoft | Steam",
        "",
        "",
        22,
    ),
    new Jogos(
        8,
        "Final Fantasy XVI",
        "22/06/2023",
        "final-fantasy-XVI",
        "",
        "",
        "",
        81,
    ),
    new Jogos(
        9,
        "Fortnite",
        "21/07/2017",
        "fortnite",
        "",
        "",
        "",
        42,
    ),
    new Jogos(
        10,
        "Minecraft",
        "09/05/2012",
        "minecraft",
        "",
        "",
        "",
        100,
    ),
    new Jogos(
        11,
        "Resident Evil 4",
        "24/03/2023",
        "resident-evil-4-re",
        "",
        "",
        "",
        97,
    ),
    new Jogos(
        12,
        "Street Fighter 6",
        "02/06/2023",
        "street-fighter-6",
        "",
        "",
        "",
        70,
    ),
    new Jogos(
        13,
        "Super Mario 64",
        "20/11/2004",
        "super-mario-64",
        "",
        "",
        "",
        99,
    ),
    new Jogos(
        14,
        "Super Mario Bros Wonder",
        "20/10/2023",
        "super-mario-bros-wonder",
        "",
        "",
        "",
        92,
    ),
    new Jogos(
        15,
        "The Legend of Zelda Ocarina of Time",
        "23/11/1998",
        "the-legend-of-zelda-ocarina-of-time",
        "",
        "",
        "",
        100,
    ),
    new Jogos(
        16,
        "The Legend of Zelda Tears of the Kingdom",
        "12/05/2023",
        "zelda-tears-of-the-kingdom",
        "Nintendo",
        "Aventura",
        "Ùm dos melhores jogos de todos os tempos",
        96,
    ),
    new Jogos(
        17,
        "Super Auto Pets",
        "21/02/2022",
        "super-auto-pets",
        "",
        "",
        "",
        98,
    ),
    new Jogos(
        18,
        "God of War",
        "20/04/2018",
        "god-of-war-2018",
        "PSN",
        "Aventura",
        "",
        91,
    ),
    new Jogos(
        19,
        "The Last Of Us",
        "14/06/2013",
        "the-last-of-us",
        "PSN",
        "",
        "",
        92,
    ),
    new Jogos(
        20,
        "Pokemon: Fire Red",
        "07/09/2004",
        "pokemon-fire-red",
        "Nintendo",
        "",
        "",
        100,
    ),
];


function findGID(id) {
    return jogosData.find(Jogos => Jogos.getId() === id);
}

//
//
// document.getElementById('addButton').addEventListener('click', function() {
//     const title = document.getElementById('title').value;
//     const genero = document.getElementById('genero').value;
//     const publisher = document.getElementById('publisher').value;
//     const releseData = document.getElementById('releseData').value;
//     const description = document.getElementById('description').value;
//     const imagesLink = document.getElementById('imagesLink').files[0];

//     // Aqui você pode criar uma nova instância da classe Jogo e fazer o que precisar com os dados
//     jogosData = new Jogo(id, title, publisher, genero, releseData, description, imagesLink, progress = 0)
//     const games = JSON.parse(localStorage.getItem('games')) || [];
//     games.push(novoJogo);
//     localStorage.setItem('games', JSON.stringify(games));

//     window.location.href = 'listaJogos.html';
// });

export default findGID;