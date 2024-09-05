const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller{
    constructor(){
        super(pessoaServices);
    }
    //criando um metodo proprio
    async pegaMatriculas(req, res) {
        const {estudante_id} = req.params;
        try {
            const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudante_id));
            return res.status(200).json(listaMatriculas)
        } catch (error) {
            //erro
        }
    }

}

module.exports = PessoaController;