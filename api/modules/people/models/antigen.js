const mongoose = require('mongoose');

const { Schema } = mongoose;

const AntigenSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },

  description: String,

  atc_group_code: String,

  atc_group_name: String,

  atc_vaccine_code: String,

  atc_vaccine_name: String,

  atc_code: String,

}, { collection: 'antigens', timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } });

const Antigen = mongoose.model('Antigen', AntigenSchema);

module.exports = { Antigen, AntigenSchema };
