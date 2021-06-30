const mongoose = require('mongoose');
const { LaboratorySchema } = require('./laboratory');
const { VaccinatorSchema } = require('./vaccinator');

const { Schema } = mongoose;

const VaccineSchema = Schema({

  _antigen: {
    type: Schema.Types.ObjectId,
    ref: 'Antigen',
    required: true,
  },

  name: {
    type: String,
  },

  laboratory: {
    type: LaboratorySchema,
    required: true,
  },

  dose: {
    type: Number,
    required: true,
  },

  application_at: {
    type: Date,
    required: true,
  },

  lote_number: {
    type: String,
    required: true,
  },

  manufacture_at: {
    type: String,
  },

  expiration_at: {
    type: String,
  },

  vaccinator: {
    type: VaccinatorSchema,
    required: true,
  },

  _person: {
    type: Schema.Types.ObjectId,
    ref: 'Person',
    required: true,
  },

}, { collection: 'vaccines', timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } });

const Vaccine = mongoose.model('Vaccine', VaccineSchema);

module.exports = { Vaccine, VaccineSchema };
