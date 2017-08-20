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

router.post('/', upload.array('xerox', 5),function(req, res) {
 // console.log(req.files[0].filename);
if(req.body.pick === 'UB'){
  mailer.sendUB(req.body.name,req.body.mobile,req.body.choose,req.body.print,req.body.time,req.files);
    // mail to UB
  }
 if(req.body.pick === "Estancia") {
       mailer.sendESTANCIA(req.body.name,req.body.mobile,req.body.choose,req.body.print,req.body.time,req.files);
 }
if(req.body.pick === "Abode") {
  mailer.sendABODE(req.body.name,req.body.mobile,req.body.choose,req.body.print,req.body.time,req.files);
  //mail to abode.
}

  
   res.render('thanks', { title: 'Premere' });
  
});

module.exports = router;
