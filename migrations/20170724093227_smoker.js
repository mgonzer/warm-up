
exports.up = function(knex, Promise) {
  return knex.schema.createTable('smoker', table=>{
    table.increments('id').primary();
    table.string('name');
    table.unique('email').notNullable();
    table.text('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('smoker')
};
