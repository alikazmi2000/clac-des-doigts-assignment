const logger = require('../../config/winston.js');
const i18n = require('i18n');
const { ErrorCodes } = require('../enums');
const { validationResult } = require('express-validator');

/**
 * Removes extension from file
 * @param {string} file - filename
 */
exports.removeExtensionFromFile = file => {
  return file
    .split('.')
    .slice(0, -1)
    .join('.')
    .toString();
};


/**
 * Create Log Object For Winston Logger
 * @param {Object} req - req object
 * @param {string} msg - msg string
 * @param {Object} err - err object
 */
exports.createLogObject = (req, msg, err) => {
  return {
    time: new Date(),
    ip: typeof req.ip !== 'undefined' ? req.ip : undefined,
    method: typeof req.method !== 'undefined' ? req.method : undefined,
    originalUrl: typeof req.originalUrl !== 'undefined' ? req.originalUrl : undefined,
    request: typeof req.body !== 'undefined' ? req.body : undefined,
    message: msg,
    response: err,
    stacktrace: new Error().stack
  };
};
/**
 * Get message on the basis of locale
 * @param {string} key - message
 * @param {Object} params - parameters Object
 */
exports.localeMsg = (key, params = false) => {
  if (params) {
    return i18n.__(`${key}`, params);
  }
  return i18n.__(`${key}`);
};

exports.handleError = (req, res, err, generalMsg = false, outSideBody = false) => {
  // Prints error in console
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG === 1) {
    console.log(err);
  }

  // This is due to the locale issue in i18n package
  if (err.message) {
    err.message = err.message.replace(':', '');
  } else {
    err.message = generalMsg;
  }
  const msg = this.localeMsg(err.message);
  const log = this.createLogObject(req, err, msg);

  if (typeof err.httpStatus !== 'undefined' && err.httpStatus === 500) {
    logger.error(log);
  } else {
    logger.warn(log);
  }

  if (typeof err.httpStatus === 'undefined') {
    err = ErrorCodes.UNKNOWN_ERROR;
  }

  const response = {
    meta: {
      code: err.code,
      message: msg
    },
    message: outSideBody === true ? msg : undefined,
    data: {}
  };

  // Setting Validation Error when bad request
  if (err.errors !== undefined) {
    response.meta.errors = err.errors;
  }

  // Setting Extra Info for the internal server error
  if (err.info !== undefined && process.env.NODE_ENV !== 'production') {
    response.meta.info = err.info;
  }

  if (process.env.NODE_ENV === 'test') {
    console.log(response);
  }
  // Sends error to user
  res.status(err.httpStatus).json(response);
};

/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {String} message - message string
 * @param {Object} data - response data object or array
 * @param {String} token - encrypted jwt token
 */
exports.handleSuccess = (res, message, data, token = undefined) => {
  const response = {
    meta: {
      code: 1000,
      message: message !== undefined && message ? this.localeMsg(message) : ''
    },
    data,
    token
  };
  // Sends success to user
  res.status(200).json(response);
};



/**
 * Builds error object
 * @param {Object} errObj - { httpStatus, code, message, errors }
 */
exports.buildErrObject = errObj => {
  const { httpStatus, code, message, errors, info } = errObj;
  return {
    httpStatus,
    code,
    message,
    errors,
    info
  };
};

/**
 * To captilize a word helper function
 * @param {string} property - property
 */
const capitalize = word => {
  return word.charAt(0).toUpperCase() + word.substring(1);
};

/**
 * Make variable/property to human readable snake_case = Snake Case
 * @param {string} property - property
 */
exports.toHumanReadable = property => {
  if (property) {
    const words = property.split('_');
    property = words.map(capitalize).join(' ');
    property = property.replace('Id', '').trim(); // To removed Id due to non-technical person message
  }
  return property;
};


/**
 * Builds error for validation files
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Object} next - next object
 */
exports.validationResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    let message = '';
    if (typeof err.errors !== 'undefined' && err.errors.hasOwnProperty(0)) {
      message = this.localeMsg(err.errors[0].msg, {
        field: this.toHumanReadable(err.errors[0].param)
      });
     
    }
    const formatResult = validationResult.withDefaults({
      formatter: error => {
        return { message: this.localeMsg(error.msg, { field: this.toHumanReadable(error.param) }) };
      }
    });
    
    return this.handleError(
      req,
      res,
      this.buildErrObject({
        ...ErrorCodes.BAD_REQUEST,
        message,
        errors: formatResult(req).mapped()
      })
    );
  }
};