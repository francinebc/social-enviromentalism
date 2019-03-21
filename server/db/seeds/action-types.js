
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action-types').del()
    .then(function () {
      // Inserts seed entries
      return knex('action-types').insert([
        {id: 88801, title: 'jar challenge', description: 'Fill a jam jar with micro-plastics.', image: 'jam-jar.jpeg', karma: 30},
        {id: 88802, title: 'plant a tree', description: 'Plant a tree at this reserve for juicy karma.', image: 'sappling.jpeg', karma: 100},
        {id: 88803, title: 'rubbish bag challenge', description: 'Fil one rubbish bag with rubbish from around your local beach', image: 'rubbish.jpeg', karma: 30}
      ]);
    });
};
