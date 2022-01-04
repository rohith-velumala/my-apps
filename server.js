const express = require("express");

const mongoose = require("mongoose");

const Expert = require('./models/Expert');

// mongoose.connect("mongodb://localhost:27017/mini")
// .then(() => console.log("db connected successfully"))
// .catch((err) => console.log(err));



 

const app = express()


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => {
    res.render('welcome', { name:'home', ok:true })
})
app.get('/about', (req, res) => {
    res.render('about')
})


// Routes
app.use('/expert', require('./routes/expert'))
app.use('/admin', require('./routes/admin'))

app.listen(3000, () => console.log('Server Started!'))