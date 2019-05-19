
const mongoose = require('mongoose');
const url = 'mongodb://localhost/db-dejavu';

const connect = (async () => await mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('se ha conectado a la bd'))
    .catch((err) => {
        console.log('error al conectarse a la BD', err);
    }));


module.exports = { connect };