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
    image: {
        data: Buffer,
        contentType: String
    },
})

const Image = model('Image', imageSchema)

module.exports = Image;