const express = require('express');

const Ingredients = require('./ingredients-model.js');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    Ingredients.getRecipesByIngredient(req.params.id)
        .then((recipes) => {
            res.status(200).json({ recipes })
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json({
                message: 'Recipes could not be retrieved.'
            })
        })
})

module.exports = router;