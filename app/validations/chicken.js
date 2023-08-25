const {
    validationResult,
} = require('../middleware/utils');
const { check, oneOf } = require('express-validator');
exports.createValidator = [
    check('name')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('birthday')
        .optional()
        .isDate(), //iso format YYYY-MM-DD
    check('weight')
        .isNumeric()
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('steps')
        .optional()
        .isNumeric()
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('running')
        .optional()
        .isBoolean()
        .withMessage('IS_BOOLEAN')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next);
    }
];
