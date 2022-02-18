const express = require("express")
const { render } = require("express/lib/response")
const Expert = require('../models/Expert')

const router = express.Router()

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const { fname, lname, email, phoneNumber, aadhaarNumber, educationQualification, experience, sex, city, state, zip } = req.body
    const dateOfBirth = '55555'
    console.log({ fname, lname, email, phoneNumber, aadhaarNumber, educationQualification, experience, sex, city, state, zip })

    if(!fname || !lname || !email || !phoneNumber || !aadhaarNumber || !educationQualification || !experience || !sex || !city || !state || !zip) 
        res.render('register', { error:'Please fill the details!' })
    else {
        const expert = new Expert({
            name: {
                firstName: fname,
                lastName: lname
            },
            email, 
            dateOfBirth, 
            phoneNumber, 
            aadhaarNumber, 
            educationQualification,
            experience, 
            sex, 
            address: {
                city, 
                state, 
                zip
            }
        })
    
        expert.save()
            .then((user) => {
                res.render('success')
            })
            .catch((err) => {console.log(err)
                res.render('register')})
    }
    

})

module.exports = router