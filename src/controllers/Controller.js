class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            res.status(200).json(listaDeRegistros);
        } catch (error) {
            //erro
        }
    }

    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            //isUpdated
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id)); 
            if(!foiAtualizado){
                return res.status(400).json({message: 'Registro não foi atualizado'});
            }
            return res.status(200).json({message: 'Atualizado com sucesso'});
        } catch (error) {
            return res.status(500).json({message: 'Dados preenchidos de maneira errada'});
        }
    }
}

module.exports = Controller;