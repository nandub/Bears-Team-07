const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: false,
  },
  role: String,
  /*
    example how to store an image
    https://gist.github.com/aheckmann/2408370
  */
  image: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  puffs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Puff',
  }],
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  minimize: false,
  toObject: {
    retainKeyOrder: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
