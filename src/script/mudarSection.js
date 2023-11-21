document.addEventListener('DOMContentLoaded', function() {
    changeSectionGames();
});


function changeSectionGames() {
    const section = document.getElementById('trs-container');
    section.style.display = 'none';

    const section2 = document.getElementById('container');
    section2.style.display = 'grid';

    const title = document.getElementById('tnrJogos');
    title.style.fontWeight = '500';

    const title2 = document.getElementById('ttrJogos');
    title2.style.fontWeight = '300';
}

function changeSectionForTRS() {
    const section = document.getElementById('container');
    section.style.display = 'none';

    const section2 = document.getElementById('trs-container');
    section2.style.display = '';

    const title = document.getElementById('tnrJogos');
    title.style.fontWeight = '300';

    const title2 = document.getElementById('ttrJogos');
    title2.style.fontWeight = '500';
}
