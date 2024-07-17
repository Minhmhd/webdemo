var express = require('express')
var router = express.Router()

router.get('/', (req,res) =>{
    res.send("<h1>hcm</h1>")
})

router.get('/quan1',(req,res) =>{
    res.send("<h1>Quan1 - hanoi</h1>")
})
//localhost:4000/hcm/quan2
router.get('/quan2',(req,res) =>{
    //view/hcm/quan2
    res.render('hcm/quan2')
})

module.exports = router