const mongoose = require('mongoose');

const nConf = require('../config/n-conf_init.js');

let connectionString = nConf.get('database_url');
connectionString = connectionString.replace('<dbuser>', nConf.get('database_user')).replace('<dbpassword>', nConf.get('database_password'));

exports.connectDB = () => mongoose.connect(connectionString, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
});
