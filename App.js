import express from 'express';
import router from './routes';
import './src/database/mongoDatabase';

class App {
  constructor() {
    this.server = express();
    this.server.use(express.json()); //Use json as input
    this.server.use(router);
  }
}

export default new App().server;
