
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, instruction: 'Mix ingredients in bowl', recipe_id: 1},
        {id: 2, instruction: 'Cook in Oven for 1 hour', recipe_id: 1},
        {id: 3, instruction: 'Make crust and filling and bake', recipe_id: 2},
      ]);
    });
};
