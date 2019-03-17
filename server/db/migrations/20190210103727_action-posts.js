exports.up = function (knex, Promise) {
    return knex.schema.createTable('action-posts', function (table) {
      table.increments('id').primary()
      table.string('description')
      table.string('image')
      table.integer('action_type_id').references('action-types.id')
      table.integer('user_id').references('users.id')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('action-posts')
  }