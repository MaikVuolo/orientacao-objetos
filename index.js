import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const newUser = new User("Maik",27,"maik@maik.com");

console.log(newUser.exibirInfo());


const teste = User.exibirInfo("Debi", 3);
console.log(teste);
