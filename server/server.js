const express = require('express')

const mongoose = require('mongoose')

const app = express.app

const PORT = process.env.PORT || 4100;

// const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(routes)

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/i-can-fix-it', {
    userNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true)

app.listen(PORT, ()=> console.log(`iCanFixIt listening on ${PORT}`))