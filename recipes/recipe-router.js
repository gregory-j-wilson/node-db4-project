const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();


// Get recipes
router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});


// Get recipe name, and the corresponding ingredients and quantity of ingredients
router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
  .then(ingredient => {
    if (ingredient) {
      res.json(ingredient);
    } else {
      res.status(404).json({ message: 'Could not find recipe ingredients.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipe ingredients.' });
  });
});



router.get('/:id/instructions', (req, res) => {
    const {id} = req.params

    Recipes.getInstructions(id)
        .then(instruction => {
            if (instruction) {
                res.json(instruction)
            } else {
                res.status(404).json({ message: 'Could not find recipe instructions.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
          });
})



module.exports = router;