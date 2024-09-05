const Services = require('./Services.js');

//heranca de classe POO
class CursoServices extends Services {
    constructor() {
        super('Curso')
    }
}

module.exports = CursoServices;