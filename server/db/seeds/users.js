
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 99901, name: 'anna', image: 'anna.jpeg', karma: 30},
        {id: 99902, name: 'bella', image: 'bella.jpeg', karma: 0},
        {id: 99903, name: 'charlie', image: 'charlie.jpeg', karma: 2500}
      ]);
    });
};
