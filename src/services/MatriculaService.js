const Services = require('./Services.js');

//heranca de classe POO
class MatriculaServices extends Services {
    constructor() {
        super('Matricula')
    }
}

module.exports = MatriculaServices;