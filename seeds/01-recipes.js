
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Cake'},
        {id: 2, recipe_name: 'Pie'},
        {id: 3, recipe_name: 'Pizza'},
        {id: 4, recipe_name: 'Bread'}
      ]);
    });
};
