const createError = require('http-errors');

module.exports = function errorFlow(error, next) {
    console.log('Is errorFlow');
    if (error.response) {
        next(createError(error.response.status, error.response.data.message));
    } else {
        console.log('Error!');
        next(createError(500, 'Internal server error'));
    }
}
