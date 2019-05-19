const { Schema, model } = require('mongoose');
const moment = require('moment');


const productSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    description: { type: String, max: 500 },
    stock: { type: Number, default: 1 },
    img: { type: String, default: 'no image' },
    brand: { type: String, default: 'marca no registrada' },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    discount_rate: { type: Number, default: 0 },
    created_at: { type: Date, default: moment().toDate()}
});

module.exports = model('Product', productSchema)