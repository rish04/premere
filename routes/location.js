var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('location', { title: 'Premere' });
});

module.exports = router;
