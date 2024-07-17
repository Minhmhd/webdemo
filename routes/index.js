var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 // URL: Localhost:4000/dem
router.get('/demo',(req,res) =>{
  // duong dan cua duong link tren
  res.render('demo')
})


router.get('/sport',(req,res) =>{
  let football = "football"
  let swimming = "swimming"
  res.render('sport',{football,swimming, tennis:"Tennis"})
})

router.get('/test',(req,res) =>{
  let year = 2002
  let phones = [ 'iphone','samsung','oppo','nokia','sony','xiaomi']
  res.render('test',{year, city:"hanoi" , mobile : phones})
})

router.get('/Greenwich',(req,res) =>{
  let Greenwich = [ 'hanoi','Danang','CanTho','Ho Chi Minh']
  res.render('Greenwich',{Greenwich})
})

module.exports = router;
