const db = require('../data/db-config.js');

module.exports = {

}

function getRecipes() {
    return db('recipes')
}