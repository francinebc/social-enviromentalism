exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary()
      table.string('email').unique()
      table.string('hash')
      table.string('firstName')
      table.string('lastName')
      table.integer('karma').defaultTo(0)
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
  }