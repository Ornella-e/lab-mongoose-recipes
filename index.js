const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  //const createdModel=  Recipe.create (Recipe);
   // console.log({title: String})

 // Recipe.insertMany(data, function(error, docs){});
  //console.log (data);


  const query = [{duration: 220}];
  Recipe.findOneAndUpdate (query, {duration: 100});
  Recipe.findOneAndUpdate (query, {$set: {duration: 100}})
  console.log (data);
 const deleted = Recipe.deleteOne( {
  title: 'Carrot Cake'
  });
  console.log (deleted);
  mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
  