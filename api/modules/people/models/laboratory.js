const mongoose = require('mongoose');

const { Schema } = mongoose;

const LaboratorySchema = new Schema({

  code: String,

  name: {
    type: String,
    required: true,
  },

}, { collection: 'laboratory', timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } });

const Laboratory = mongoose.model('Laboratory', LaboratorySchema);

module.exports = { Laboratory, LaboratorySchema };
