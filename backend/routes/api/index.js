const router = require("express").Router();
const db = require('../../db/models');
const csurf = require("csurf");
const { Product } = db;

router.get('/products/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id);
    // res.cookie("XSRF-TOKEN", req.csrfToken());
    res.json(product);
});

router.get("/products", async function (req, res) {
    const products = await Product.findAll();
    // res.cookie("XSRF-TOKEN", req.csrfToken());
    res.json(products);
});


router.post('/products/like/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id);
    product.num_likes++;
    await product.save();
    res.json(product);
});

router.delete('/products/like/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id);
    if (product.num_likes === 0) {
        return res.json(product)
    }
    product.num_likes--;
    await product.save()
    res.json(product);
})

module.exports = router;
