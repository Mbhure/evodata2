const mongoose = require('mongoose');
require('dotenv').config();
//for setup
const connection = mongoose.connect(process.env.mongoURL);

module.exports = {
    connection
}