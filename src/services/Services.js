//criado para criar as regras de negocio
const dataSource = require('../models/index.js');
//criando uma classe generica que se conecta a qualquer modelo
class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizado = dataSource[this.model].update(dadosAtualizados, {
            where: {
                id: id
            }
        });
        if(listaDeRegistrosAtualizado[0] === 0) {
            return false;
        }
        return true;
    }
}

module.exports = Services;