const animal = {
    nome:"bibi",
    numeroBrinco:"8895047",
    sexo:"fêmea",
    litosPorDia:17,
    racaoPorDia: function(){
        let qtRacao = (this.litosPorDia / 3).toFixed(2);
        return console.log(qtRacao);
    },
    mineralPorDia: function(){
       let quantidade = this.litosPorDia * 10;
       return console.log(`A quantidade de mineral por dia é de ${quantidade} gramas`);
    }
}
        
const objeto2 = {
    nome:"Maik's Burguer",
    local:"Santa Rosa do Sul",
    servico:"Restaurante",
    aprovadoVigilanciaSanitaria:true,
    responsavel:"Maik Vuolo",
    cliente:"Pingo",
    cardapio:function() {},
    devolucao:function () {},
}



const exibirRacao = function racao() {
    let qtRacao = (this.litosPorDia / 3).toFixed(2);
        return console.log(qtRacao);
}
const racao = exibirRacao.bind(animal);

racao();

exibirRacao.call(animal);



