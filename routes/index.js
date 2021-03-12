const express = require('express');//fetch the existing express

const router = express.Router();
const homeController =require('../controllers/home_controller');

console.log('router loaded');


router.get('/',homeController.home);

router.use('/users',require('./users'));
router.use('/posts',require('./posts'));

//for any further routes, access from here 
//rourter.use('/routerName',require('./routerfile'));


module.exports = router; //making it module so that outer index.js can access it