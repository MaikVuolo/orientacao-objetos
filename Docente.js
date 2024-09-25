import User from "./User.js";

export default class Docente extends User {
    constructor(nome,sobrenome, idade, email, role = "docente",  ativo = true){
        super(nome,sobrenome, idade, email, role,  ativo)
    }
    aprovarEstudante (nomeEstudante , curso){
        return `estudante ${nomeEstudante} passou no curso de ${curso}, responsável ${this.nome}`;
    }
}

const newDocente = new Docente("Dog",3,"dog@god.com");

// console.log(newDocente.aprovarEstudante("zezé","Ser um cachorrao"));

// console.log(newDocente.matricularEmCurso("Maik",1));

