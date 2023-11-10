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
        "00/00/2023",
        "starfield",
        "Microsoft",
        "RPG | Aventura",
        "Jogo com mais de mil planetas exploraveis",
        100,
    ),
    new Jogos(
        2,
        "Redfall",
        "00/00/0000",
        "redfall",
        "Microsoft",
        "",
        "",
        38,
    ),
    new Jogos(
        3,
        "Star Wars Jedi Survivor",
        "00/00/0000",
        "star-wars-jedi-survivor",
        "Steam | Microsoft | PSN",
        "Aventura | Ação",
        "Joguinho de star wars bugado",
        57,
    ),
    new Jogos(
        4,
        "Spider Man 02",
        "00/00/0000",
        "spider-man-2",
        "PSN",
        "",
        "",
        78,
    ),
    new Jogos(
        5,
        "Baldur's Gate III",
        "00/00/0000",
        "baldurs-gate-III",
        "Steam | PSN",
        "",
        "",
        38,
    ),
    new Jogos(
        6,
        "Dead Space",
        "00/00/2022",
        "dead-space-remake",
        "",
        "",
        "",
        97,
    ),
    new Jogos(
        7,
        "Diablo IV",
        "00/00/0000",
        "diablo-IV",
        "",
        "",
        "",
        38,
    ),
    new Jogos(
        8,
        "Final Fantasy XVI",
        "00/00/0000",
        "final-fantasy-XVI",
        "",
        "",
        "",
        38,
    ),
    new Jogos(
        9,
        "Fortnite",
        "00/00/0000",
        "fortnite",
        "",
        "",
        "",
        38,
    ),
    new Jogos(
        10,
        "Minecraft",
        "00/00/0000",
        "minecraft",
        "",
        "",
        "",
        100,
    ),
    new Jogos(
        11,
        "Resident Evil 4",
        "10/00/2023",
        "resident-evil-4-re",
        "",
        "",
        "",
        97,
    ),
    new Jogos(
        12,
        "Street Fighter 6",
        "00/00/0000",
        "street-fighter-6",
        "",
        "",
        "",
        48,
    ),
    new Jogos(
        13,
        "Super Mario 64",
        "00/00/0000",
        "super-mario-64",
        "",
        "",
        "",
        99,
    ),
    new Jogos(
        14,
        "Super Mario Bros Wonder",
        "00/00/0000",
        "super-mario-bros-wonder",
        "",
        "",
        "",
        95,
    ),
    new Jogos(
        15,
        "The Legend of Zelda Ocarina of Time",
        "00/00/0000",
        "the-legend-of-zelda-ocarina-of-time",
        "",
        "",
        "",
        100,
    ),
    new Jogos(
        16,
        "The Legend of Zelda Tears of the Kingdom",
        "00/00/0000",
        "zelda-tears-of-the-kingdom",
        "Nintendo",
        "Aventura",
        "Ùm dos melhores jogos de todos os tempos",
        96,
    ),
    new Jogos(
        17,
        "Super Auto Pets",
        "00/00/0000",
        "super-auto-pets",
        "",
        "",
        "",
        98,
    ),
    new Jogos(
        18,
        "God of War",
        "00/00/0000",
        "god-of-war-2018",
        "Sony",
        "Aventura",
        "",
        97,
    ),
    new Jogos(
        19,
        "The Last Of Us",
        "00/00/0000",
        "the-last-of-us",
        "Sony",
        "",
        "",
        96,
    ),
    new Jogos(
        20,
        "Pokemon: Fire Red",
        "00/00/0000",
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

export default findGID;