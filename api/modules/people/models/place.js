const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlaceSchema = new Schema({

  continent_code: String,

  continent_name: String,

  country_code: String,

  country_name: String,

  demonym: String,

  subdivision_code: String,

  subdivision_name: String,

  city_code: String,

  city_name: String,

}, { collection: 'place', timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } });

const Place = mongoose.model('Place', PlaceSchema);

module.exports = { Place, PlaceSchema };
