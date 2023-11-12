const cabecinha = document.getElementById("cabecinha");

document.addEventListener('DOMContentLoaded', function() {
    
    function createHeader() {
        const nav = document.createElement("nav");

        // Logo
        const aLogo = document.createElement("a");
        aLogo.href = "/src/index.html";

        const imgLogo = document.createElement("img");
        imgLogo.src = "/src/imgs/GOTY-logo.svg";
        imgLogo.alt = "Logo do site Game Of The Year";

        aLogo.appendChild(imgLogo);

        // Lista de navegação
        const listaNav = document.createElement("ul");
        listaNav.classList.add("menu-nav");

        const liHome = createMenuItem("Home", "/src/index.html");
        const liJogos = createMenuItem("Jogos", "/src/pages/jogos.html");
        const liPesquisar = createMenuItem("Pesquisar", "/src/pages/pesquisa.html");
        const liCrud = createMenuItem("CRUD", "#");

        listaNav.appendChild(liHome);
        listaNav.appendChild(liJogos);
        listaNav.appendChild(liPesquisar);
        listaNav.appendChild(liCrud);

        // Lista de usuário
        const listaUser = document.createElement("ul");
        listaUser.classList.add("user-log");

        const liRegistro = createMenuItem("Registre-se", "#");
        const liBarra = document.createElement("li");
        liBarra.classList.add("barra-ul");
        liBarra.textContent = "|";
        const liLogin = createMenuItem("Login", "#");

        listaUser.appendChild(liRegistro);
        listaUser.appendChild(liBarra);
        listaUser.appendChild(liLogin);

        // Adiciona elementos à nav
        nav.appendChild(aLogo);
        nav.appendChild(listaNav);
        nav.appendChild(listaUser);

        return nav;
    }

    function createMenuItem(text, href) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = href;
        a.textContent = text;
        li.appendChild(a);
        return li;
    }

    const navegador = createHeader();
    cabecinha.appendChild(navegador);
});
