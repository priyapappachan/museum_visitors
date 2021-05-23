const express = require('express');
const visitorController = require('../controllers/visitorController');
const router = express.Router();

router.get('/api/visitors/:date?/:ignore?', visitorController.getVisitorDetails);

module.exports = router;