export function up(knex) {
  return knex.schema.createTable("city_itinerary", (table) => {
    table.increments("id").primary(); // Primary key
    table
      .integer("itinerary_id")
      .unsigned()
      .references("id")
      .inTable("itineraries")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("city_id")
      .unsigned()
      .references("id")
      .inTable("cities")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.timestamps(true, true); // Automatically manages created_at and updated_at
  });
}

export function down(knex) {
  return knex.schema.dropTable("city_itinerary");
}
