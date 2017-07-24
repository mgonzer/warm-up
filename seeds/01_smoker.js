const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(2);


exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE smoker RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('smoker').insert([
        {name: 'BIll', email: 'william@bill.com', password: bcrypt.hashSync('bigbill', salt)},
        {name: 'Fred', email: 'funkyfred@chill.com', password: bcrypt.hashSync('mrsmoker', salt)}
      ]);
    });
};
