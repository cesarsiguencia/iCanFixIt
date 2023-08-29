const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const deviceSchema = new Schema({
    device_name: {
        type: String,
        require: true,
        minlength: 4,
        maxlength: 30
    },
    device_year: {
        type: Number,
        require: true,
        validate: {
            validator: function(year) {
               return year.toString().length === 4 && year > 1900 && year < 2100
            },
            message: year => `${year.value} has to be 4 digits`,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    device_description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    device_status: {
        type: String,
        required: true,
        enum: ['Service Requested', 'In Progress', 'Completed'],
        default: 'Service Requested'
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'Client',
        require: true
    },
    owner_review: {
        type: String,
        maxlength: 500
    },
    owner_rating: {
        type: String,
        enum: ['⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️'],
    },
    my_notes: {
        type: String,
        maxlength: 500
    },
    images:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Images'
        }
    ]
    
})

const Device = model('Device', deviceSchema)

module.exports = Device