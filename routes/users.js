var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path'); //系统路径模块

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/user1', function (req, res, next) {
  var file = path.join(__dirname, 'config/subject.json');
  fs.readFile(file, function (err, data) {
    var re =JSON.parse(data);
    res.send(re);
  });

});

module.exports = router;
