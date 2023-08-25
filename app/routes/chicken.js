const chickenController = require('../controllers/chicken');
const chickenValidator = require('../validations/chicken');

const express = require('express');
const router = express.Router();
const trimRequest = require('trim-request');


router.post(
    '/',
    trimRequest.all,
    chickenValidator.createValidator,
    chickenController.createMethod
  );
  module.exports = router;