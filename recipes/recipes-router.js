const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
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

router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then((ingredients) => {
            res.status(200).json({ ingredients })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Shopping list could not be retrieved.'
            })
        })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then((steps) => {
            res.status(200).json({ steps })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Instructions could not be retrieved.'
            })
        })
})

module.exports = router;