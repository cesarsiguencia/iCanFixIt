const { Schema, model } = require('mongoose')

const clientSchema = new Schema({
    first_name: {
        type: String,
        require: true,
        trim: true
    },
    last_name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    address_street: {
        type: String,
        required: true
    },
    address_state: {
        type: String,
        required: true
    },
    address_zipcode: {
        type: Number,
        required: true
    },
    devices: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Device'
        }
      ],
})

const Client = model('Client', clientSchema)

module.exports = Client;