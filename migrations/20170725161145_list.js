
exports.up = function(knex, Promise) {
  return knex.schema.createTable('grocery', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('brand');
    table.integer('quantity').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('grocery');
};
