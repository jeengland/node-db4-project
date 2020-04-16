
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'Crush and mince garlic', recipe_id: 1},
        {id: 2, step_number: 2, instructions: 'Soften butter', recipe_id: 1},
        {id: 3, step_number: 3, instructions: 'Mix garlic and butter together', recipe_id: 1},
        {id: 4, step_number: 4, instructions: 'Slice bread if needed and spread garlic butter on one side', recipe_id: 1},
        {id: 5, step_number: 5, instructions: 'Put in oven and toast under broiler until golden brown', recipe_id: 1},
        {id: 6, step_number: 1, instructions: 'Slice bread if necessary and toast in toaster', recipe_id: 2},
        {id: 7, step_number: 2, instructions: 'Spread jam on toast', recipe_id: 2},
        {id: 8, step_number: 1, instructions: 'Boil water', recipe_id: 3},
        {id: 9, step_number: 2, instructions: 'Put noodles and seasoning in water and reduce heat; cook for 5 minutes', recipe_id: 3}
      ]);
    });
};
