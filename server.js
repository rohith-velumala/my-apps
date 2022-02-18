const express = require("express");

const mongoose = require("mongoose");

const Expert = require('./models/Expert');

const uri = 'mongodb://localhost:27017/miniproject';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const connectWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err) console.error(err);
      else console.log("database connection")
    })
}

connectWithDB()



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