
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Cup of butter'},
        {id: 2, ingredient_name: 'Spoon of salt'},
        {id: 3, ingredient_name: 'Cup of flour'},
        {id: 4, ingredient_name: 'Tablespoon of sugar'}
      ]);
    });
};
