const db = require('../connection')

module.exports = {
    getRecipes
}

function getRecipes(ingredientId) {

    return db('recipe_ingredients')
        .join('recipes', 'recipe_ingredients.recipe_id', '=', 'recipes.id')
        .join('ingredients', 'recipe_ingredients.ingredient_id', '=', 'ingredients.id')
        .select('ingredients.ingredient_name', 'recipes.recipe_name')

        .where({ 'recipe_ingredients.ingredient_id': ingredientId })

}