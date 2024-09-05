//Controller generico que serve para todas os outros controllers
class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            res.status(200).json(listaDeRegistros);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async pegarUmRegistroPorId(req,res){
        const { id } = req.params;
        try {
            const umRegistro = await this.entidadeService.pegarUmPorId(Number(id))
            return res.status(200).json({message: "Usuario encontrado", dados: umRegistro});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async criar(req, res) {
        const userDados = req.body;
        try {
            const userCriado = await this.entidadeService.registrar(userDados);
            return res.status(200).json({message: "usuario registrado", dados: userCriado})
        } catch (error) {
            return res.status(500).json(error.message);
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

    async deletarRegistro(req, res) {
        const { id } = req.params;
        try {
            await this.entidadeService.excluirRegistro(Number(id));
            return res.status(200).json({message: "Usuario referenciado pelo id  Deletado"})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = Controller;