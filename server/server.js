const express = require('express')
// const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 4101;

// const routes = require('./routes')

// app.use(cors())
app.get('/', (req, res) => {
    res.send({message: 'Working server'})
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static('public'))
app.use(require('./routes'))

// //This middleware will tell the application to use the built react-app
// app.use(express.static(path.join(__dirname, "public")));

// //Put this after all middleware. Otherwise, Heroku will give you 304 page
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });


mongoose.connect(process.env.MONGO_URI || process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

mongoose.set('debug', true)

app.listen(PORT, ()=> console.log(`iCanFixIt listening on ${PORT}`))