const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongoose connected!')
});

const testSchema = mongoose.Schema({
  // Schema goes here
});

const Test = mongoose.model('Test', testSchema);

const testMethod = (/* TODO */) => {
  // Db method goes here
}

module.exports.testMethod = testMethod;