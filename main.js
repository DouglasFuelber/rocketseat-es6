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