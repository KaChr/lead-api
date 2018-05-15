var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Hello fine user' });
});

module.exports = router;

/*module.exports = {
    sayHello: function() {
        return 'hello';
    },
    addNumbers: function(value1, value2) {
        return value1 + value2;
    }
}*/