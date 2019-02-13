
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friendships').del()
    .then(function () {
      // Inserts seed entries
      return knex('friendships').insert([
        {user_id_1: 99901, user_id_2: 99902},
        {user_id_1: 99901, user_id_2: 99903},
        {user_id_1: 99902, user_id_2: 99903}
      ]);
    });
};
