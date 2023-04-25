const User = require('../Schemas/User');

exports.getUser = (userId) => User.findOne({ userId });
exports.getUserId = (userId) => User.findById(userId);

exports.updateProfile = (userId, data) => User.findByIdAndUpdate(userId, data)