import mongoose from 'mongoose';

class Database {
  constructor() {
    this.db = mongoose.connection;
    this.mongo();
  }
  mongo() {
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', () => {
      console.log('conectado ao MONGODB');
    });
    // connect mongoDB , CRUD it is the name of the Database
    mongoose.connect('mongodb://localhost/CRUD', {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
