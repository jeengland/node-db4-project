
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'loaf of bread'},
        {id: 2, name: 'tablespoons of butter'},
        {id: 3, name: 'cloves of garlic'},
        {id: 4, name: 'jar of jam'},
        {id: 5, name: 'packet of ramen'}
      ]);
    });
};
