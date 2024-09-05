const Services = require('./Services.js');

//heranca de classe POO
class CategoriaServices extends Services {
    constructor() {
        super('Categoria')
    }
}

module.exports = CategoriaServices;