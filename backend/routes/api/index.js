const router = require("express").Router();
const db = require('../../db/models');
const { Product } = db;

router.get("/products", async function (req, res) {
    const products = await Product.findAll();
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.send(products);
});

router.get('/products/:id', async function (req, res) {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id);
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.send(product);
});

module.exports = router;
