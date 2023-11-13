import { Jogos, jogosData } from "./jogos";

class Publisher {
    constructor(id, nome, descricao, jogos = []){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.jogos = jogos;
    }

    adicionarJogo(jogo) {
        this.jogos.push(jogo);
    }

    removerJogo(idJogo) {
        this.jogos = this.jogos.filter(jogo => jogo.id !== idJogo);
    }
}