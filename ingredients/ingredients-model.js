const db = require('../data/db-config.js');

module.exports = {
    getRecipesByIngredient
}

function getRecipesByIngredient(ingredient_id) {
    return db('recipe_ingredients as ri')
        .join('recipes as r', 'ri.recipe_id', 'r.id')
        .select('r.name')
        .where({ ingredient_id })
}