export function up(knex) {
  return knex.schema.createTable("countries", (table) => {
    table.increments("id").primary();
    table.string("country_name").notNullable();
    table.string("budget_7_days_usd").notNullable();
    table.text("country_image").nullable(); // URL for the country image
    table.text("country_description").nullable();
    table.decimal("latitude", 10, 8).nullable(); // Decimal precision for lat/long
    table.decimal("longitude", 11, 8).nullable();
    table.json("best_months_to_visit").nullable();
    table.timestamps(true, true); // Automatically manages created_at and updated_at
  });
}

export function down(knex) {
  return knex.schema.dropTable("countries");
}
