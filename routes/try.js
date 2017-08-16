var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('try', { title: 'Premere' });
});

module.exports = router;
