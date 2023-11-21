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
        "Aventura",
        "A cidade-ilha de Redfall, Massachusetts, foi cercada por uma legião de vampiros, que bloquearam o sol e isolaram os habitantes do mundo exterior",
        35,
    ),
    new Jogos(
        3,
        "Star Wars Jedi Survivor",
        "28/04/2023",
        "star-wars-jedi-survivor",
        "Steam | Microsoft | PSN",
        "Aventura | Ação",
        "A história de Cal Kestis continua em STAR WARS Jedi: Survivor™, uma aventura em terceira pessoa na galáxia.",
        64,
    ),
    new Jogos(
        4,
        "Spider Man 02",
        "20/10/2023",
        "spider-man-2",
        "PSN",
        "Aventura | Ação",
        "Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel's Spider-Man para PS5.",
        91,
    ),
    new Jogos(
        5,
        "Baldur's Gate III",
        "03/08/2023",
        "baldurs-gate-III",
        "Steam | PSN",
        "RPG | Aventura",
        "Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de companheirismo e traição, sacrifício e sobrevivência, e a atração do poder absoluto.",
        89,
    ),
    new Jogos(
        6,
        "Dead Space",
        "27/01/2023",
        "dead-space-remake",
        "PSN | Steam | Microsoft",
        "Terror | Ação",
        "O clássico de terror de sobrevivência e ficção científica está de volta, totalmente reformulado para oferecer uma experiência ainda mais imersiva,",
        88,
    ),
    new Jogos(
        7,
        "Diablo IV",
        "06/06/2023",
        "diablo-IV",
        "Microsoft | Steam",
        "RPG | Aventura",
        "Junte-se à luta por Santuário no Diablo IV, a aventura suprema de RPG de ação. Vivencie a campanha aclamada pela crítica e os novos conteúdos de temporada",
        22,
    ),
    new Jogos(
        8,
        "Final Fantasy XVI",
        "22/06/2023",
        "final-fantasy-XVI",
        "PSN | Microsoft",
        "RPG | Ação",
        "Um épico mundo de fantasia sombria onde o destino da terra é decidido pelos poderosos Eikons e os Dominantes que os controlam.",
        81,
    ),
    new Jogos(
        9,
        "Fortnite",
        "21/07/2017",
        "fortnite",
        "Epic Games | PSN | Microsoft | Nintendo",
        "Battle Royale | Ação",
        "Seja o último jogador de pé no Battle Royale e Construção Zero, curta um show ou evento ao vivo e descubra mais de um milhão de jogos feitos por criadores, incluindo corrida, parkour, sobrevivência a zumbis e muito mais.",
        42,
    ),
    new Jogos(
        10,
        "Minecraft",
        "09/05/2012",
        "minecraft",
        "PSN | Microsoft | Nintendo",
        "Sandbox | Aventura",
        "Minecraft é um jogo feito de blocos que você pode transformar em tudo que puder imaginar",
        100,
    ),
    new Jogos(
        11,
        "Resident Evil 4",
        "24/03/2023",
        "resident-evil-4-re",
        "PSN | Steam | Microsoft",
        "Survival Horror",
        "Resident Evil 4 preserva a essência do jogo original enquanto apresenta jogabilidade modernizada, enredo reimaginado e gráficos vívidamente detalhados para fazer deste o mais recente jogo de horror de sobrevivência, onde a vida e a morte, o terror e a catarse se cruzam.",
        97,
    ),
    new Jogos(
        12,
        "Street Fighter 6",
        "02/06/2023",
        "street-fighter-6",
        "PSN | Steam | Microsoft",
        "Luta",
        "Street Fighter 6 engloba três modos de jogo distintos, incluindo World Tour, Fighting Ground e Battle Hub.",
        70,
    ),
    new Jogos(
        13,
        "Super Mario 64",
        "20/11/2004",
        "super-mario-64",
        "Nintendo",
        "Plataforma",
        " Com controles intuitivos, a mecânica de saltos acrobáticos de Mario foi aprimorada para se adaptar ao ambiente 3D. Os diferentes cursos oferecem uma variedade de objetivos e quebra-cabeças, incentivando a exploração.",
        99,
    ),
    new Jogos(
        14,
        "Super Mario Bros Wonder",
        "20/10/2023",
        "super-mario-bros-wonder",
        "Nintendo",
        "Plataforma",
        "A jogabilidade clássica dos jogos do Mario virou de ponta-cabeça com as flores fenomenais! Estes itens revolucionários permitem que coisas fenomenalmente mirabolantes aconteçam!",
        92,
    ),
    new Jogos(
        15,
        "The Legend of Zelda Ocarina of Time",
        "23/11/1998",
        "the-legend-of-zelda-ocarina-of-time",
        "Nintendo",
        "Aventura",
        "Dirigido por Shigeru Miyamoto, o jogo segue Link em sua jornada para impedir Ganondorf de conquistar o reino de Hyrule",
        100,
    ),
    new Jogos(
        16,
        "The Legend of Zelda Tears of the Kingdom",
        "12/05/2023",
        "zelda-tears-of-the-kingdom",
        "Nintendo",
        "Aventura",
        "Nesta continuação de The Legend of Zelda: Breath of the Wild, você decidirá seu próprio caminho pelas extensas paisagens de Hyrule e pelas misteriosas ilhas flutuantes nos vastos céus.",
        96,
    ),
    new Jogos(
        17,
        "Super Auto Pets",
        "21/02/2022",
        "super-auto-pets",
        "Steam",
        "Estategia",
        "Reúna uma equipe de bichinhos fofinhos com habilidades especiais. Enfrente outros jogadores. Avance no seu ritmo nas batalhas automáticas gratuitas.",
        98,
    ),
    new Jogos(
        18,
        "God of War",
        "20/04/2018",
        "god-of-war-2018",
        "PSN",
        "Aventura",
        "Esta impressionante repaginação de God of War reúne todas as características marcantes dessa famosa franquia — combate brutal, lutas épicas contra chefes e uma grandiosidade de tirar o fôlego — e as mescla a uma narrativa poderosa e emocionante que reestabelece o mundo de Kratos.",
        91,
    ),
    new Jogos(
        19,
        "The Last Of Us",
        "14/06/2013",
        "the-last-of-us",
        "PSN",
        "Survival Horror | Ação",
        "Joel, um sobrevivente duro e cínico, e a jovem e impetuosa Ellie se conectam pela dificuldade do mundo em que vivem. Juntos, eles enfrentam circunstâncias brutais e monstros impiedosos durante uma difícil jornada pelos EUA após um surto apocalíptico.",
        92,
    ),
    new Jogos(
        20,
        "Pokemon: Fire Red",
        "07/09/2004",
        "pokemon-fire-red",
        "Nintendo",
        "Aventura | RPG",
        "Uma recriação do clássico Pokemon Red, apresenta gráficos aprimorados, novos recursos e a região de Kanto para explorar. Os jogadores embarcam em uma jornada para se tornarem mestres Pokémon, capturando e treinando criaturas, derrotando líderes de ginásio e enfrentando a Equipe Rocket.",
        100,
    ),
];


function findGID(id) {
    return jogosData.find(Jogos => Jogos.getId() === id);
}

export default findGID;