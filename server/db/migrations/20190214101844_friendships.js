exports.up = function (knex, Promise) {
    return knex.schema.createTable('friendships', function (table) {
      table.integer('user_id_1').references('users.id')
      table.integer('user_id_2').references('users.id')
    })
  }
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('friendships')
  }