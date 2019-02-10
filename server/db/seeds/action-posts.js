
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action-posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('action-posts').insert([
        {id: 66601, description: 'Planted this sick tree!', image: 'sappling1.jpeg', action_type_id: 88802, user_id: 99901},
        {id: 66602, description: 'Wow so much micro-plastic!', image: 'jamjar1.jpg', action_type_id: 88801, user_id: 99901},
        {id: 66603, description: 'This is only a small jam jar but still :) <3', image: 'jamjar2.jpg', action_type_id: 88801, user_id: 99902},
        {id: 66604, description: 'This smells so bad :(', image: 'rubbish1.jpeg', action_type_id: 88803, user_id: 99902},
        {id: 66605, description: 'We planted this native in our backyard.', image: 'sappling2.jpeg', action_type_id: 88802, user_id: 99903},
        {id: 66606, description: 'Mostly just plastic bags...', image: 'rubbish2.jpeg', action_type_id: 88803, user_id: 99903}

      ]);
    });
};
