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
router.get(
    '/:id',
    trimRequest.all,
    chickenValidator.getValidator,
    chickenController.getMethod
);
router.get(
    '/',
    trimRequest.all,
    chickenController.getAllMethod
);
//For Entire Resource to be updated
router.put(
    '/',
    trimRequest.all,
    chickenValidator.updateValidator,
    chickenController.updateMethod
);

//Part Resource update api
router.patch(
    '/',
    trimRequest.all,
    chickenValidator.patchValidator,
    chickenController.updateMethod
);
router.delete(
    '/:id',
    trimRequest.all,
    chickenValidator.deleteValidator,
    chickenController.deleteMethod
);

router.get(
    '/run/:id',
    trimRequest.all,
    chickenValidator.runValidator,
    chickenController.runMethod
);


module.exports = router;