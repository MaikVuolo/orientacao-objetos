function User(nome,email){
    this.nome = nome;
    this.email = email;
    this.exibirInfo = function (){
        return `o nome é ${this.nome}, e o email é ${this.email}`;
    }
}

const newUser = new User("Maik","maik.vuolo@hotmail.com")

console.log(newUser);

