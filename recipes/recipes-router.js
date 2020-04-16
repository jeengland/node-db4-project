const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.findRecipes()
        .then((recipes) => {
            res.status(200).json({ recipes })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Recipes could not be retrieved.'
            })
        })
})

module.exports = router;