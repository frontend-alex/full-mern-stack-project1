const User = require('../Schemas/User');
const AppError = require('../utils/AppError');
const jwt = require('../utils/jsonwebtoken');

exports.getUser = (email) => User.findOne({ email });

exports.getUsername = (username) => User.findOne({ username });

exports.register = (username, email, password, userPfp, bio) => User.create({ username, email, password, userPfp, bio });

exports.login = async (email, password) => {
    
    const existingUser = await this.getUser(email);
    const correctPassword = await existingUser.comparePasswords(password)

    if(!existingUser){
        throw new AppError('Wrong email', { existingUser })
    }

    if(!correctPassword){
        throw new AppError('Invalid credentials!', { existingUser })
    }

    const secret = '0823r5bsdfdgkljb89y234biojadnfg';
    const payload = {
        _id       : existingUser._id,
        username  : existingUser.username,
        email     : existingUser.email,
        userPfp   : existingUser.userPfp,
        bio       : existingUser.bio
    }

    const token = await jwt.sign(payload, secret);

    return token;
}
