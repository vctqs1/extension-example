const express = require('express')

const CategoriesRoute = require('./categories');
const VideosRoute = require('./videos')
const router = express.Router()


router.all('*',function(req, res, next) {
    next();
})

router.use('/video', function(req, res, next) {
    VideosRoute(req, res, next);
});
router.use('/category', function(req, res, next) {
    CategoriesRoute(req, res, next);
});
module.exports = router;
