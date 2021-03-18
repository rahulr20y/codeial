const express = require('express');//fetch the existing express

const router = express.Router();
const usersApi = require('../../../controllers/api/v1/users_api');

router.post('/create-session',usersApi.createSession);

module.exports = router;