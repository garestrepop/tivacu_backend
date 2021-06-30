const mongoose = require('mongoose');

const { Schema } = mongoose;

const AssitanceInformationSchema = new Schema(
  {
    contact1_firstname: {
      type: String,
      required: true,
    },

    contact1_lastname: {
      type: String,
      required: true,
    },

    contact1_phone: {
      type: String,
      required: true,
    },

    contact2_firstname: String,

    contact2_lastname: String,

    contact2_phone: String,

    public_healt_insurance: {
      policyNumber: String,
      insurerName: String,
    },

    private_healt_insurance: {
      policyNumber: String,
      insurerName: String,
    },

    life_insurance: {
      policyNumber: String,
      insurerName: String,
    },

    medications_you_take: [String],

    allergic_reactions: [String],

    diseases: [String],

    share: Boolean,

  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } },
);

module.exports = AssitanceInformationSchema;
