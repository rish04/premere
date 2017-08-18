var express = require('express');
var router = express.Router();
var path = require('path')
var mailer = require('./../mailer');


//multer object creation
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Premere' });
});

router.post('/', upload.single('xerox'),function(req, res) {
  console.log(req.body);
if(req.body.pick === 'UB'){
  mailer.sendUB(req.body.name,req.body.mobile,req.body.time,req.file.filename);
    // mail to UB
  }
 if(req.body.pick === "Estancia") {
       mailer.ESTANCIA(req.body.name,req.body.mobile,req.body.time,req.file.filename);
 }
if(req.body.pick === "Abode") {
  mailer.sendABODE(req.body.name,req.body.mobile,req.body.time,req.file.filename);
  //mail to abode.
}

  
  res.render('thanks', { title: 'Premere' });
  
});

module.exports = router;
