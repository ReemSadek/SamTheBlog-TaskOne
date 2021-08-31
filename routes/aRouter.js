const express = require('express');
const aRouter = express.Router();
const aController = require('../controllers/aController')

aRouter.get('/',aController.axios_index);




module.exports=(aRouter);


