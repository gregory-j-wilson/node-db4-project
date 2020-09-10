const db = require('../connection')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}


function getRecipes() {
    return db('recipes')
}


function getShoppingList(recipe_id) {

    return db('recipe_ingredients')
        .join('recipes', 'recipe_ingredients.recipe_id', '=', 'recipes.id')
        .select('recipes.recipe_name')
        .join('ingredients', 'recipe_ingredients.ingredient_id', '=', 'ingredients.id')
        .select('ingredients.ingredient_name', 'recipe_ingredients.ingredient_quantity')
        
        .where({ 'recipe_ingredients.recipe_id': recipe_id })
}


function getInstructions(recipe_id) {

    return db('instructions')
        .join('recipes', 'instructions.recipe_id', '=', 'recipes.id')
        .select('recipes.recipe_name', 'instructions.instruction')
        .where({ 'instructions.recipe_id': recipe_id})

}