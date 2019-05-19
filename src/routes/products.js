const { Router } = require('express');
const router = Router();

//models
const Product = require('../models/Product')

//development data fakes
const faker = require('faker');

router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json({ products })
});

router.get('/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product || { message: "no hay detalle de  este producto" })
});

router.post('/products/create', async (req, res) => {

    await Product.create(req.body);
    res.json({ message: 'producto creado!' });
});

router.delete('/products/delete/:id', async (req, res) => {
    const eliminado = await Product.findByIdAndRemove(req.params.id);
    res.json({ message: eliminado ? "producto ha sido eliminado!" : "no se encontro el producto para eliminarlo" });
});


router.get('/products/update/:id', async (req, res) => {

    await Product.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({ message: "producto ha sido modificado!" });
        }).catch((err) => {
            res.json({ message: "error,no se pudo modificar" });
            console.log('error al modificar:', err);

        });

});



module.exports = router;