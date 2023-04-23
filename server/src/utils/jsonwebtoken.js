const utils = require('util');
const jwtCallback = require('jsonwebtoken');

const jwt = {
    sign   : utils.promisify(jwtCallback.sign),
    verify : utils.promisify(jwtCallback.verify)
}

module.exports = jwt