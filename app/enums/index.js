const ErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: { httpStatus: 500, code: 0, message: 'ERROR.INTERNAL_SERVER_ERROR' },
    NOT_FOUND: { httpStatus: 404, code: 1, message: 'ERROR.NOT_FOUND' },
    BAD_REQUEST: { httpStatus: 400, code: 2, message: 'ERROR.BAD_REQUEST' },
    UNAUTHORIZED: { httpStatus: 401, code: 3, message: 'ERROR.UNAUTHORIZED' },
    INVALID_REQUEST: { httpStatus: 400, code: 4, message: 'ERROR.INVALID_REQUEST' },
    ENDPOINT_NOT_FOUND: { httpStatus: 404, code: 5, message: 'ERROR.ENDPOINT_NOT_FOUND' },
    METHOD_NOT_ALLOWED: { httpStatus: 405, code: 6, message: 'ERROR.METHOD_NOT_ALLOWED' },
    FORBIDDEN: { httpStatus: 403, code: 10, message: 'ERROR.FORBIDDEN' },
    FAILED_TO_CONNECT_TO_THE_DATABASE: {
      httpStatus: 500,
      code: 11,
      message: 'ERROR.FAILED_TO_CONNECT_TO_THE_DATABASE'
    },
    UNPROCESSABLE_ENTITY: { httpStatus: 422, code: 12, message: 'ERROR.UNPROCESSABLE_ENTITY' },
    INVALID_OR_EMPTY_PAYLOAD: {
      httpStatus: 400,
      code: 13,
      message: 'ERROR.INVALID_OR_EMPTY_PAYLOAD'
    },
    INVALID_CREDENTIALS: { httpStatus: 404, code: 100, message: 'ERROR.INVALID_CREDENTIALS' },
    INVALID_TOKEN: { httpStatus: 401, code: 101, message: 'ERROR.INVALID_TOKEN' },
    EXPIRED_TOKEN: { httpStatus: 401, code: 102, message: 'ERROR.EXPIRED_TOKEN' },
    INACTIVE_USER: { httpStatus: 401, code: 103, message: 'ERROR.INACTIVE_USER' },
    USER_NOT_FOUND: { httpStatus: 404, code: 106, message: 'ERROR.USER_NOT_FOUND' },
    ITEM_NOT_FOUND: { httpStatus: 404, code: 203, message: 'ERROR.ITEM_NOT_FOUND' },
    ITEM_ALREADY_EXISTS: { httpStatus: 409, code: 204, message: 'ERROR.ITEM_ALREADY_EXISTS' },
    FIELD_INVALID: { httpStatus: 400, code: 205, message: 'ERROR.FIELD_INVALID' },
    UNKNOWN_ERROR: { httpStatus: 500, code: 400, message: 'ERROR.UNKNOWN_ERROR' },
  });

  module.exports = {
    ErrorCodes
  }