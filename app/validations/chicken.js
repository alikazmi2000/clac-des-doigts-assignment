const {
    validationResult,
} = require('../middleware/utils');
const { check, param } = require('express-validator');

const commonValidator = [
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
        .withMessage('IS_EMPTY')
];
exports.createValidator = [
    ...commonValidator,
    (req, res, next) => {
        validationResult(req, res, next);
    }
];

exports.updateValidator = [
    ...commonValidator,
    check('_id')
        .isMongoId()
        .withMessage('INVALID_ID')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next);
    }
];

exports.getValidator = [
    param('id')
        .isMongoId()
        .withMessage('INVALID_ID'),
    (req, res, next) => {
        validationResult(req, res, next);
    }
]

exports.deleteValidator = [
    param('id')
        .isMongoId()
        .withMessage('INVALID_ID'),
    (req, res, next) => {
        validationResult(req, res, next);
    }
]