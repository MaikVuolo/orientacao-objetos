import User from "./User.js";

export default class Admin extends User {
    constructor(nome,sobrenome, idade, email, role = "admin",  ativo = true){
        super(nome,sobrenome, idade, email, role,  ativo)
    }
    exibirInfo(){
        // this.nome aqui se refere ao metodo get
        return `admin - ${this.nome} , ${this.idade}`;
    }
    criarCurso (nomeCurso , vagas){
        return `${nomeCurso} com ${vagas} vagas`;
    }
    excluirCurso(nomeCurso){
        return `O curso ${nomeCurso} foi excluido.`;
    }
}

const newAdmin = new Admin ("Pinguinho","abacate",5,"pingo@pingo.com")

// console.log(newAdmin);

// console.log(newAdmin.criarCurso("Curso Do Pingo", 1000));

console.log(newAdmin.exibirInfo());
//alterando nome atraves do set
newAdmin.nome = "pingo abacate da silva";
console.log(newAdmin.nome);