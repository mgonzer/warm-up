
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cigar', table => {
    table.increments('id').primary();
    table.text('cigar_name').notNullable();
    table.text('wrapper').notNullable();
    table.integer('smoker_id').references('smoker.id').unsigned().onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cigar');
};
