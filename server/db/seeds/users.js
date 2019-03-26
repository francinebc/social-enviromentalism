
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'sam@gmail.com', hash: '$argon2id$v=19$m=8,t=2,p=1$rjLbF7V74+cYrDUDGHD+EQ$CyEs+ASk/tI3oT0aaff0uZttzXDY9u5yiztWTUj7ts0', firstName: 'sam', lastName: 'smith', karma: 0},
        {id: 2, email: 'cindy@gmail.com', hash: '$argon2id$v=19$m=8,t=2,p=1$rjLbF7V74+cYrDUDGHD+EQ$CyEs+ASk/tI3oT0aaff0uZttzXDY9u5yiztWTUj7ts0', firstName: 'cindy', lastName: 'cyna', karma: 0},
        {id: 3, email: 'garfield@gmail.com', hash: '$argon2id$v=19$m=8,t=2,p=1$rjLbF7V74+cYrDUDGHD+EQ$CyEs+ASk/tI3oT0aaff0uZttzXDY9u5yiztWTUj7ts0', firstName: 'garfield', lastName: 'gramp', karma: 0}
      ]);
    });
};
