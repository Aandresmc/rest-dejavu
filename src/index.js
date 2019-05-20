const express = require('express');
const app = express();
const { connect } = require('./database/connection')
const cors = require('cors');
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//routes
app.use('/api-dejavu', require('./routes/products'));

//starting the server
const main = (async () => {
    //database connect
    await connect();
    // listen server express
    await app.listen(app.get('port'), () => console.log(`SERVIDOR EN PUERTO ${app.get('port')}`));
});


main();
