const Services = require('./Services.js');

//heranca de classe POO
class PessoaServices extends Services {
    constructor() {
        super('Pessoa')
    }

    async pegaMatriculasPorEstudante(id) {
        const estudante = await super.pegarUmPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }
}

module.exports = PessoaServices;