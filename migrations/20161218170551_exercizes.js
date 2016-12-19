
exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercizes', function(exercize){
    exercize.increments();
    exercize.text('exercize').notNullable();
    exercize.datetime('date_used').notNullable();
    exercize.decimal('muscle').notNullable();
    exercize.integer('reps')
    exercize.integer('weight')
    // exercize.integer('user_id').references('user.id').unsigned().onDelete('CASCADE');
  });


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('exercizes');
};
