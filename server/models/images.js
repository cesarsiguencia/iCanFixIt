const { Schema, model } = require('mongoose')

const imageSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    deviceById:{
        type: Schema.Types.ObjectId,
        ref: 'Device',
        require: true
    },
    image_url: {
        type: String,
        require: true
    },
})

const Image = model('Images', imageSchema)

module.exports = Image;