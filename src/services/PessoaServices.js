const Services = require('./Services.js');

//heranca de classe POO
class PessoaServices extends Services {
    constructor() {
        super('Pessoa')
    }
}

module.exports = PessoaServices;