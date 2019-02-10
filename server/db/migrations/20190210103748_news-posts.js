exports.up = function (knex, Promise) {
    return knex.schema.createTable('news-posts', function (table) {
      table.increments('id').primary()
      table.string('title')
      table.string('link')
      table.date('date_created')
      table.integer('user_id').references('users.id')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('news-posts')
  }