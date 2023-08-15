const express = require('express')

const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 4101;

// const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static('public'))
app.use(require('./routes'))

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/i-can-fix-it', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

mongoose.set('debug', true)

app.listen(PORT, ()=> console.log(`iCanFixIt listening on ${PORT}`))