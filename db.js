const mongoose = require('mongoose');

function connectDB() {
  const HOST_NAME = "abdullahweb007";
  const HOST_PASSWORD = "contegris123";
  const DATABASE = "extra-vagant-foreigns";

  const uri = `mongodb+srv://${ HOST_NAME }:${ HOST_PASSWORD }@cluster0.05ce7.mongodb.net/${ DATABASE }`

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('Mongo DB Connection Successfull');
  });

  connection.on('error', () => {
    console.log('Mongo DB Connection Error');
  });
}

connectDB();

module.exports = mongoose;