var mongoose =  require ('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({

      first_name: { type: String },
      last_name: { type: String },
      Age:{type: String}

    });

module.exports = userSchema
