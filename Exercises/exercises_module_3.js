import axios from 'axios';

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
        await delay();
        console.log('1s');
        await delay();
        console.log('2s');
        await delay();
        console.log('3s');
}
umPorSegundo();

///////////////////////////////////////////////////////////////

async function getUserFromGithub(user) {
    try {
        console.log((await axios.get(`https://api.github.com/users/${user}`)).data);
    } catch {
        console.error('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

///////////////////////////////////////////////////////////////

class Github {
    static async getRepositories(repo) {
        try {
            console.log((await axios.get(`https://api.github.com/repos/${repo}`)).data);
        } catch {
            console.error('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

///////////////////////////////////////////////////////////////

const buscaUsuario = async user => {
    try {
        console.log((await axios.get(`https://api.github.com/users/${user}`)).data);
    } catch {
        console.error('Usuário não existe');
    }
}
buscaUsuario('diego3g');