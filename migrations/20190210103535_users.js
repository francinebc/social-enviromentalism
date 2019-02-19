exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary()
      table.string('username').unique()
      table.string('hash')
      table.string('name')
      table.string('image')
      table.integer('karma').defaultTo(0)
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
  }