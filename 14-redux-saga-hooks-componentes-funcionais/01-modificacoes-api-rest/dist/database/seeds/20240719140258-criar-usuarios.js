"use strict";const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
     await queryInterface.bulkInsert(
      'users', // nome da tabela onde os dados serão inseridos
      [
        {
          nome: 'Noel',
          email: 'noel1@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Liam',
          email: 'liam1@gmail.com',
          password_hash: await bcrypt.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          nome: 'Kurt',
          email: 'kurt@gmail.com',
          password_hash: await bcrypt.hash('789012', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
     {}
    );
  },

  async down () {}
};
