import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.43.67:3001', // usar variável de ambiente aqui
});
