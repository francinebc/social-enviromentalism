exports.up = function (knex, Promise) {
    return knex.schema.createTable('action-types', function (table) {
      table.increments('id').primary()
      table.string('title')
      table.string('description')
      table.string('image')
      table.integer('karma')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('action-types')
  }