var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,next) {
  res.render('index');
});

router.post('/',function(req,res){
  var q = req.q;
  var name =['a','b','c','d','e','f','g'];
  for(var i=0;i<name.length;i++){
    if(parseInt(q) === parseInt(name[i])){
      res.render('index',{data:q})
    }
  }
});

module.exports = router;
