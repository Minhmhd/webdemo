var express = require('express')
var router = express.Router()

router.get('/', (req,res) =>{
    //res.send("<h1>hanoi</h1>")
    res.render('hanoi/hanoi')
})

router.get('/caugiay',(req,res) =>{
    //res.send("<h1>Cau Giay - hanoi</h1>")
    res.render('hanoi/caugiay')
})


//localhost:4000/hanoi/badinh
router.get('/badinh',(req,res) =>{
    //view/hanoi/badinh.hbs
    res.render('hanoi/badinh')
})

module.exports = router