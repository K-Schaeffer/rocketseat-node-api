const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) { //Get All
        const { page = 1 } = req.query; // Using the page feature, which will respond to the "?page=number" in the URL
        const products = await Product.paginate({/* a filter would be here*/ }, { page, limit: 10 }); // UUsing the same page / Limitating to 10

        return res.json(products);
    },

    async show(req, res) { // Get One
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) { // Create
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) { // Update
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); // The new is important to return with the new data

        return res.json(product);
    },

    async destroy(req, res) { // Delete
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    },
};
