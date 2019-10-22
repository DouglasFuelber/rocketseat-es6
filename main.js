/***** Module 1: Exercise 1 *****/

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin ? true : false;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('usuario@teste.com', 'senha123');
const Adm1 = new Admin('adminl@teste.com', 'senha123');

console.log(`${User1.email} - Admin: ${User1.isAdmin()}`);
console.log(`${Adm1.email} - Admin: ${Adm1.isAdmin()}`);

/***** Module 1: Exercise 2 *****/

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

var idades = usuarios.map(function(item) {
    return item.idade;
});
console.log(idades);

var empregadosMaiores = usuarios.filter(function(item) {
    return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(empregadosMaiores);

var empregadoGoogle = usuarios.find(function(item) {
    return item.empresa === 'Google';
});
console.log(empregadoGoogle);