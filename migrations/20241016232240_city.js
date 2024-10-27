export function up(knex) {
  return knex.schema.createTable("cities", (table) => {
    table.increments("id").primary();
    table.string("city_name").notNullable();
    table.text("city_description").nullable();
    table.text("city_image").nullable(); // URL for the country image
    table.decimal("latitude", 10, 8).nullable(); // Decimal precision for lat/long
    table.decimal("longitude", 11, 8).nullable();
    table.integer("days_to_spend").notNullable(); // Days to spend in the city
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
  return knex.schema.dropTable("cities");
}
