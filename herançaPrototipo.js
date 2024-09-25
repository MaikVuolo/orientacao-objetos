const user = {
    nome: "Maik",
    email: "maik.vuolo@hotmail.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
      console.log(this.nome, this.email);
    },
  };

  const admin = {
    nome: "Maik",
    email: "maik.vuolo@hotmail.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,
    criarCurso: function(){
        console.log("Curso criado.");
        
    }
};

Object.setPrototypeOf(admin, user);

admin.exibirInfos()
admin.criarCurso()