
const mongoose = require('mongoose');
const url = 'mongodb://luna:luna2017@ds145916.mlab.com:45916/db-dejavu';

const connect = (async () => await mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('se ha conectado a la bd'))
    .catch((err) => {
        console.log('error al conectarse a la BD', err);
    }));


module.exports = { connect };