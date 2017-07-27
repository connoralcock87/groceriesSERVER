
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grocery').del()
    .then(function () {
      // Inserts seed entries
      return knex('grocery').insert([
        { id: 1, name: 'eggs', brand: 'cage free', quantity: 12 },
        { id: 2, name: 'bread', brand: "Dave's Killer", quantity: 1 },
        { id: 3, name: 'bean burrito', brand: "Amy's", quantity: 3 },
        { id: 4, name: 'macaroni and cheese', brand: "Annie's", quantity: 6 },
        { id: 5, name: 'hot sauce', brand: 'Sriracha', quantity: 1 },
      ]);
    });
};
