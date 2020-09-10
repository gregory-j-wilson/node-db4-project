const express = require('express');

const Ingredients = require('./ingredient-model.js');

const router = express.Router();



router.get('/:id/recipes', (req, res) => {
 
    const { id } = req.params;

Ingredients.getRecipes(id)
    .then(recipe => {
        if (recipe) {
            res.json(recipe);
            } else {
            res.status(404).json({ message: 'Could not find recipes using this ingredient.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes from this ingredient.' });
        });
})


module.exports = router;