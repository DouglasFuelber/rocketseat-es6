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

// 2.1
var idades = usuarios.map(function (item) {
    return item.idade;
});
console.log(idades);
// 2.2
var empregadosMaiores = usuarios.filter(function (item) {
    return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(empregadosMaiores);
// 2.3
var empregadoGoogle = usuarios.find(function (item) {
    return item.empresa === 'Google';
});
console.log(empregadoGoogle);
// 2.4
var novasIdades = usuarios.map(function (item) {
    item.idade *= 2;
    return item;
});
var usuariosMenos50 = novasIdades.filter(function (item) {
    return item.idade <= 50;
});
console.log(usuariosMenos50);

/***** Module 1: Exercise 3 *****/
// 3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve())

/***** Module 1: Exercise 4 *****/
// 4.1
const empresa = {
    nome_empresa: 'Rocketseat',
    endereco_empresa: {
        cidade_empresa: 'Rio do Sul',
        estado_empresa: 'SC',
    }
};
const { nome_empresa, endereco_empresa: { cidade_empresa, estado_empresa } } = empresa;
console.log(nome_empresa);
console.log(cidade_empresa);
console.log(estado_empresa);

// 4.2
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
const user = { nome: 'Diego', idade: 23 }
console.log(mostraInfo(user));

/***** Module 1: Exercise 5 *****/
// 5.1
const array = [1, 2, 3, 4, 5, 6];
var [x, ...y] = array;
console.log(x);
console.log(y);

// 5.2
const usuario5 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario5_2 = { ...usuario5, nome: 'Gabriel' };
const usuario5_3 = { ...usuario5, nome: 'Lontras' };
console.log(usuario5_2);
console.log(usuario5_3);

/***** Module 1: Exercise 6 *****/
const usuario6 = 'Diego';
const idade6 = 23;
console.log(`O usuário ${usuario6} possui ${idade6} anos`);