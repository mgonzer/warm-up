
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate cigar restart identity cascade')
    .then(function () {

      return knex('cigar').insert([
        {cigar_name:'La Flor Dominicana', wrapper:'Ecuador', smoker_id: 1},
        {cigar_name:'Rocky Patel Sun Grown', wrapper:'Conn broadlead', smoker_id:1},
        {cigar_name:'Partagas Serie E NO. 2', wrapper:'Cuba', smoker_id:1},
        {cigar_name:'E.P. Carrillo', wrapper:'Mexico', smoker_id:2},
        {cigar_name:'Padron Serie 1926', wrapper:'Nicaragua', smoker_id:2}
      ]);
    });
};
