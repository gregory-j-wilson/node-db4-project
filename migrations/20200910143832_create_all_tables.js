
exports.up = function (knex) {

    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.text('recipe_name', 255)
                .notNullable()
                // .onUpdate('CASCADE')
                // .onDelete('RESTRICT')
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.text('ingredient_name', 255)
                .notNullable()
                // .onUpdate('CASCADE')
                // .onDelete('RESTRICT')
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id').inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id').inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
            tbl.integer('ingredient_quantity')
                .unsigned()
                .notNullable()
                
        })
        .createTable('instructions', tbl => {
            tbl.increments()
            tbl.text('instruction')
                .notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id').inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
        })

};

exports.down = function (knex) {

    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
