const listaDeCursos = ["Como ser um cachorrao", "Como fritar um ovo", "Churrasqueada"];

export default class User {
    #nome
    #sobrenome
    #idade
    #email
    #role
    #ativo
    constructor(nome,sobrenome, idade, email, role,  ativo = true){
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#idade = idade
        this.#email = email
        this.#role = role || "estudante"
        this.#ativo = ativo
    }
    get nome(){
        return `${this.#nome} ${this.#sobrenome}`
    }
    get sobrenome(){
        return this.#sobrenome
    }
    get idade(){
        return this.#idade
    }
    get email(){
        return this.#email
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
       if(novoNome === ""){
        throw new Error ("Formato invalido");
       }
       let [nome, ...sobrenome] = novoNome.split(" ")
       sobrenome = sobrenome.join(" ")
       this.#nome = nome
       this.#sobrenome = sobrenome
    }
    exibirInfo(){
        // this.nome aqui se refere ao metodo get
        return `${this.nome} , ${this.idade}`;
    }

    //static permite que o metodo nao seja instanciado(usar "const e new user")
    static exibirInfo(nome,idade){
        return `${nome} , ${idade}`;
    }
    criarPerfil(){
        return `novo perfil criado com sucesso`;
    }
    apagarPerfil(){
        return `Perfil removido`;
    }
    exibirListaDeCursos(){
        return listaDeCursos;
    }
    matricularEmCurso(estudante,numeroDoCurso){
        return `${estudante} foi matriculado com sucesso em ${listaDeCursos[numeroDoCurso]}`
    }
};

const novoUser = new User("Maik",27,"maik.vuolo@hotmail.com");

// console.log(novoUser);
// console.log(novoUser.exibirInfo());



        