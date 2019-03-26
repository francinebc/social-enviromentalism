
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friendships').del()
    .then(function () {
      // Inserts seed entries
      return knex('friendships').insert([
        {user_id_1: 1, user_id_2: 2},
        {user_id_1: 1, user_id_2: 3},
        {user_id_1: 2, user_id_2: 3}
      ]);
    });
};
