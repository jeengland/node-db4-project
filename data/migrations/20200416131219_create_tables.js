
exports.up = function(knex) {
    return knex.schema 
        .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name').notNullable().unique().index();
        })
        .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name').notNullable().unique();
        })
        .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.float('amount').notNullable();
        tbl
           .integer('recipe_id')
           .notNullable()
           .references('id')
           .inTable('recipes')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
        tbl
           .integer('ingredient_id')
           .notNullable()
           .references('id')
           .inTable('ingredients')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('step_number').notNullable();
            tbl.string('instructions').notNullable();
            tbl
               .integer('recipe_id')
               .notNullable()
               .references('id')
               .inTable('recipe')
               .onDelete('RESTRICT')
               .onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('steps');
};
