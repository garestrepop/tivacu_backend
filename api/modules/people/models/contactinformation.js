const mongoose = require('mongoose');
const { PlaceSchema } = require('./place');

const { Schema } = mongoose;

const ContactInformationSchema = new Schema(
  {
    place_residence: PlaceSchema,

    ressident_address: String,

    ressident_phone: String,

    personal_email: String,

    place_office: PlaceSchema,

    office_address: String,

    office_phone: String,

    office_email: String,

    movil_phone: String,

    share: {
      type: String,
      isIn: ['All', 'Just Me', 'Residential Information', 'Office Information', 'Movile phone'],
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } },
);

module.exports = ContactInformationSchema;
