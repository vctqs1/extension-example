const express = require('express');
const router = express.Router();
router.all('*',function(req, res, next) {
    next();
})
module.exports = router;
