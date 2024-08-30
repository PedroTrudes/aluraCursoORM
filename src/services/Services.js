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

    async pegarUmPorId(id) {
        return dataSource[this.model].findByPk(id);
    }

    async registrarUser(dadosDoRegistro) {
        return dataSource[this.model].create(dadosDoRegistro);
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizado = dataSource[this.model].update(dadosAtualizados, {
            where: {id: id}
        });
        if(listaDeRegistrosAtualizado[0] === 0) {
            return false;
        }else{
            return true;
        }
    }

    async excluirRegistro(id){
        return dataSource[this.model].destroy({where : {id : id}});
    }
}

module.exports = Services;