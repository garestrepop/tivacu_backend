const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      maxLength: 150,
      required: true,
    },

    status: {
      type: String,
      isIn: ['PENDING', 'ACTIVE', 'INACTIVE', 'DELETED'],
      required: true,
    },

  },
  { collection: 'users', timestamps: { createdAt: 'created_at', updatedAt: 'update_at' } },
);

const User = mongoose.model('User', UserSchema);

module.exports = { User, UserSchema };
