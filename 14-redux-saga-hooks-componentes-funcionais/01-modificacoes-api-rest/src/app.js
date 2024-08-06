import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database'; // importa o arquivo de conexão com o banco de dados

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) { // se o origin não estiver na whitelist ou se não existir origin, permite o acesso
      callback(null, true); // permite o acesso
    } else {
      callback(new Error('Not allowed by CORS')); // bloqueia o acesso
    }
  }
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images', express.static(resolve(__dirname, '..', 'uploads', 'images'))); // define o diretório de arquivos estáticos
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app; // exporta o express já instanciado
