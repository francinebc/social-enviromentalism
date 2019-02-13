
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('news-posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('news-posts').insert([
        {id: 77701, date_created: new Date(), title: 'Air pollution could damage DNA for generations, Utah physicians report', link: 'https://www.ksl.com/article/46486835/air-pollution-could-damage-dna-for-generations-utah-physicians-report', user_id: 99901},
        {id: 77702, date_created: new Date(), title: 'Food Co-op event has pioneer potluck—food good for heart and planet ', link: 'https://www.fredericksburg.com/features/food-co-op-event-has-pioneer-potluck-food-good-for/article_28d82f37-2105-5e4e-88b5-9bbfd0e19cb8.html', user_id: 99902},
        {id: 77703, date_created: new Date(), title: 'With eye on environment-friendly commute, govt plans trolley buses for Kolkata streets', link: 'https://timesofindia.indiatimes.com/city/kolkata/with-eye-on-environment-friendly-commute-govt-plans-trolley-buses-for-kolkata-streets/articleshow/67908055.cms', user_id: 99903}
      ]);
    });
};
