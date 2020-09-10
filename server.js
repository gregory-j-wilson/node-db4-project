const express = require('express');

const RecipesRouter = require('./recipes/recipe-router.js');
const IngredientsRouter = require('./ingredients/ingredient-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);
server.use('/api/ingredients', IngredientsRouter);

module.exports = server;