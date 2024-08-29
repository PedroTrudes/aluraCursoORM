class PessoaController {
    static async getAll (req, res) {
        try {
            res.status(200).json('rota OK')
        } catch (erro) {
            // erro
        }
    }
}

module.exports = PessoaController;