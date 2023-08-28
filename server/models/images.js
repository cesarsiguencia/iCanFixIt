const { Schema, model } = require('mongoose')

const imageSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    device_tied:{
        type: Schema.Types.ObjectId,
        ref: 'Device',
        require: true
    },
    image_url: {
        type: String,
        require: true
    },
})

const Image = model('Image', imageSchema)

module.exports = Image;