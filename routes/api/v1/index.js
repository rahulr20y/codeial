const express = require('express');//fetch the existing express

const router = express.Router();

router.use('/posts',require('./posts'));
router.use('/users',require('./users'));

module.exports = router;