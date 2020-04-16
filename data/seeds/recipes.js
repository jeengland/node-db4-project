
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Garlic Bread'},
        {id: 2, name: 'Toast With Jam'},
        {id: 3, name: '5 Minute Ramen Packet'}
      ]);
    });
};
