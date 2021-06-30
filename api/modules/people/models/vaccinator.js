const mongoose = require('mongoose');

const { Schema } = mongoose;

const VaccinatorSchema = new Schema({

  code: String,

  name: {
    type: String,
    required: true,
  },

}, { collection: 'vaccinators', timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } });

const Vaccinator = mongoose.model('Vaccinator', VaccinatorSchema);

module.exports = { Vaccinator, VaccinatorSchema };
