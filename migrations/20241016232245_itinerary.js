export function up(knex) {
  return knex.schema.createTable("itineraries", (table) => {
    table.increments("id").primary();
    table.integer("days_to_spend").notNullable(); // Days to spend
    table.json("itinerary").notNullable();
    table.json("good_to_travel");
    table.json("cities_included");
    table
      .integer("country_id")
      .unsigned()
      .references("id")
      .inTable("countries")
      .onDelete("CASCADE") // If a country is deleted, its cities are too
      .onUpdate("CASCADE"); // Automatically update city records if the country ID changes

    table.timestamps(true, true); // Automatically manages created_at and updated_at
  });
}

export function down(knex) {
  return knex.schema.dropTable("itineraries");
}
