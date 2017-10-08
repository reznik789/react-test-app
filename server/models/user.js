const mongoos = require('mongoose');
const Schema = mongoos.Schema;

//Define our module
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

//Create the model class
const ModelClass = mongoos.model('user', userSchema);

//Export the model
module.exports = ModelClass;