const mongoose = require('mongoose');
const { PlaceSchema } = require('./place');
const ContactInformationSchema = require('./contactinformation');
const AssitanceInformationSchema = require('./assistanceinformation');

const { Schema } = mongoose;

const PersonSchema = new Schema(
  {
    type_document: {
      type: String,
      isIn: ['RC', 'TI', 'CC', 'CE', 'PA'],
      required: true,
    },

    id_document_number: {
      type: String,
      required: true,
    },

    date_of_issue: String,

    place_of_issue: PlaceSchema,

    nationality: String,

    firstname: {
      type: String,
      maxLength: 100,
      required: true,
    },

    lastname: {
      type: String,
      maxLength: 150,
      required: true,
    },

    date_of_birth: {
      type: String,
      required: true,
    },

    place_of_birth: PlaceSchema,

    sex: {
      type: String,
      isIn: ['F', 'M'],
      required: true,
    },

    rh: {
      type: String,
      isIn: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true,
    },

    marital_status: {
      type: String,
      isIn: ['MARRIED', 'SINGLE', 'OTHER', 'NOT DEFINED'],
    },

    photo: {
      type: String,
    },

    _contact_information: ContactInformationSchema,

    _assitance_information: AssitanceInformationSchema,

    _vaccines: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Vaccine',
      },
    ],

    share: {
      type: String,
      isIn: ['All', 'Just Me', 'identification information'],
    },

  },
  { collection: 'persons', timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } },
);
PersonSchema.index({ type_document: 1, id_document_number: 1 }, { unique: true });

PersonSchema.plugin(require('mongoose-autopopulate'));

const Person = mongoose.model('Person', PersonSchema);

module.exports = { Person, PersonSchema };
