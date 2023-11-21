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
        const liCrud = createMenuItem("CRUD", "/src/pages/listadosJogos.html");

        listaNav.appendChild(liHome);
        listaNav.appendChild(liJogos);
        listaNav.appendChild(liPesquisar);
        listaNav.appendChild(liCrud);

        //Menu
        const divMenu = document.createElement("div");
        divMenu.classList.add("menu-icon");
        divMenu.id = "menuNav";
        divMenu.onclick = ("toggleMenu()");
        divMenu.textContent = "☰";

        divMenu.addEventListener('click', function() {
            toggleMenu(); 
        });

        // Lista de usuário
        const listaUser = document.createElement("ul");
        listaUser.classList.add("user-log");


        const liRegistro = createMenuItem("Registre-se", "/src/pages/registro.html");
        const liBarra = document.createElement("li");
        liBarra.classList.add("barra-ul");
        liBarra.textContent = "|";
        const liLogin = createMenuItem("Login", "/src/pages/login.html");

        listaUser.appendChild(liRegistro);
        listaUser.appendChild(liBarra);
        listaUser.appendChild(liLogin);

        // Adiciona elementos à nav
        nav.appendChild(aLogo);
        nav.appendChild(divMenu);
        nav.appendChild(listaNav);
        nav.appendChild(listaUser);

        divMenu.addEventListener('click', function () {
            toggleMenu(); // Função para mostrar/ocultar o menu
        });

        // Adiciona evento de redimensionamento da janela
        window.addEventListener('resize', function () {
            updateMenuVisibility(); // Atualiza a visibilidade do menu ao redimensionar
        });

        return nav;
    }

    function toggleMenu() {
        const listaNav = document.querySelector(".menu-nav");
        const listaUser = document.querySelector(".user-log");
        const liBarra = document.querySelector(".barra-ul")
    
        // Troca a visibilidade do menu
        if (listaNav.style.display === "flex" || listaUser.style.display === "flex") {
            listaNav.style.display = "none";
            listaUser.style.display = "none";
        } else {
            listaNav.style.display = "grid";
            listaNav.style.zIndex = "1";
            listaNav.style.marginTop = "2rem";
            listaUser.style.display = "grid";
            listaUser.style.zIndex = "1";
            listaUser.style.marginTop = "9.5rem";
            listaUser.style.paddingTop = "1rem";
            liBarra.style.display = "none"
            
        }
    }
    

    function updateMenuVisibility() {
        const listaNav = document.querySelector(".menu-nav");
        const listaUser = document.querySelector(".user-log");

        // Verifica o tamanho da tela e atualiza a visibilidade do menu
        if (window.innerWidth <= 1200) {
            listaNav.style.display = "none";
            listaNav.style.zIndex = "1";
            listaNav.style.marginTop = "0";
            listaUser.style.display = "none";
            listaUser.style.marginTop = "0";
            listaUser.style.paddingTop = "0";

            
        } else {
            listaNav.style.display = "flex";
            listaUser.style.display = "flex";
        }

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
