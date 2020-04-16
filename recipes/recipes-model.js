const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as ri') 
        .join('ingredients as i', 'ri.ingredient_id', 'i.id')
        .select('i.name', 'ri.amount')
        .where({ recipe_id })
}

function getInstructions(recipe_id) {
    return db('steps')
        .select('step_number', 'instructions')
        .where({ recipe_id })
        .orderBy('step_number')
}