var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user1', function(req, res, next) {
  var user = {
    "name":"liyanhong","sex":"女","age":30
  };

  res.send(user);

});



module.exports = router;
