'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      //precisa sempre ser feito nas duas estancias Migration e Models
      Pessoa.hasMany(models.Curso, {//pegando onde esta a model que tem conexao com Pessoas
        foreignKey: 'docente_id'
      });
      Pessoa.hasMany(models.Matricula, {//pegando onde esta a model que tem conexao com Pessoas
        foreignKey: 'estudante_id',//passando a chave estrangeiras 
        //scope: {status: 'matriculado'}, scope funciona como um WHERE no banco de dados
        as: 'aulasMatriculadas'
      });
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
  });
  return Pessoa;
};