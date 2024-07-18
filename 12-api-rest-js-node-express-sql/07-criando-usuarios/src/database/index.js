import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";

const models = [Aluno];

const connection = new Sequelize(databaseConfig); // manda as configurações da base de dados

models.forEach(model => model.init(connection));
