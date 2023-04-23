const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/MERN-TEST-1';

async function db() {
    mongoose.connect(uri)
    console.log('db connected')
}

module.exports = db;