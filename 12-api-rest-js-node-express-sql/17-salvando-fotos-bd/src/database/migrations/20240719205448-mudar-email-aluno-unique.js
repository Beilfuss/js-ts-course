'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // essa linha e as duas acima são as edições que vão ocorrer na tabela alunos no campo email
      });
  },

  async down () {}
};
