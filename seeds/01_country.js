export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("countries").del();

  // Inserts seed entries
  await knex("countries").insert([
    {
      id: 1,
      country_name: "Italy",
      country_image: "https://example.com/italy-image.jpg",
      budget_7_days_usd: "$1,000–$1,500 USD",
      country_description: "Italy is known for its art, history, and cuisine.",
      latitude: 41.87194,
      longitude: 12.56738,
      best_months_to_visit: JSON.stringify([
        "April",
        "May",
        "September",
        "October",
      ]),
    },
    {
      id: 2,
      country_name: "Thailand",
      country_image: "https://example.com/thailand-image.jpg",
      budget_7_days_usd: "$500–$1,000 USD",
      country_description:
        "Thailand is famous for its tropical beaches, royal palaces, and temples.",
      latitude: 15.87003,
      longitude: 100.99254,
      best_months_to_visit: JSON.stringify(["November", "February"]),
    },
    {
      id: 3,
      country_name: "India",
      country_image: "https://example.com/india-image.jpg",
      budget_7_days_usd: "$400–$1,000 USD",
      country_description:
        "India is a country of diverse landscapes, culture, and history.",
      latitude: 20.59368,
      longitude: 78.96288,
      best_months_to_visit: JSON.stringify(["October", "March"]),
    },
    {
      id: 4,
      country_name: "Egypt",
      country_image: "https://example.com/egypt-image.jpg",
      budget_7_days_usd: "$700–$1,200 USD",
      country_description:
        "Egypt is known for its ancient civilization and monumental sites like the pyramids.",
      latitude: 26.82055,
      longitude: 30.8025,
      best_months_to_visit: JSON.stringify(["October", "April"]),
    },
    {
      id: 5,
      country_name: "France",
      country_image: "https://example.com/france-image.jpg",
      budget_7_days_usd: "$1,200–$1,800 USD",
      country_description:
        "France is celebrated for its wine, art, history, and landmarks like the Eiffel Tower.",
      latitude: 46.60335,
      longitude: 1.88833,
      best_months_to_visit: JSON.stringify([
        "April",
        "June",
        "September",
        "October",
      ]),
    },
    {
      id: 6,
      country_name: "Bali",
      country_image: "https://example.com/bali-image.jpg",
      budget_7_days_usd: "$500–$900 USD",
      country_description:
        "Bali is an Indonesian island known for its forested volcanic mountains and beaches.",
      latitude: -8.40952,
      longitude: 115.18892,
      best_months_to_visit: JSON.stringify(["April", "October"]),
    },
    {
      id: 7,
      country_name: "Australia",
      country_image: "https://example.com/australia-image.jpg",
      budget_7_days_usd: "$1,200–$1,800 USD",
      country_description:
        "Australia is known for its diverse landscapes, wildlife, and beaches.",
      latitude: -25.2744,
      longitude: 133.7751,
      best_months_to_visit: JSON.stringify([
        "September",
        "November",
        "March",
        "May",
      ]),
    },
    {
      id: 8,
      country_name: "Japan",
      country_image: "https://example.com/japan-image.jpg",
      budget_7_days_usd: "$1,000–$1,600 USD",
      country_description:
        "Japan offers a mix of traditional culture and modern technology.",
      latitude: 36.2048,
      longitude: 138.2529,
      best_months_to_visit: JSON.stringify([
        "March",
        "April",
        "October",
        "November",
      ]),
    },
    {
      id: 9,
      country_name: "Brazil",
      country_image: "https://example.com/brazil-image.jpg",
      budget_7_days_usd: "$700–$1,200 USD",
      country_description:
        "Brazil is known for its Amazon rainforest and vibrant Carnival festival.",
      latitude: -14.235,
      longitude: -51.9253,
      best_months_to_visit: JSON.stringify([
        "April",
        "June",
        "September",
        "October",
      ]),
    },
    {
      id: 10,
      country_name: "Mexico",
      country_image: "https://example.com/mexico-image.jpg",
      budget_7_days_usd: "$700–$1,200 USD",
      country_description:
        "Mexico is famous for its beaches, ancient ruins, and vibrant culture.",
      latitude: 23.6345,
      longitude: -102.5528,
      best_months_to_visit: JSON.stringify(["November", "April"]),
    },
    {
      id: 11,
      country_name: "South Africa",
      country_image: "https://example.com/south-africa-image.jpg",
      budget_7_days_usd: "$700–$1,200 USD",

      country_description:
        "South Africa is known for its wildlife, landscapes, and cultural diversity.",
      latitude: -30.5595,
      longitude: 22.9375,
      best_months_to_visit: JSON.stringify(["May", "September"]),
    },
    {
      id: 12,
      country_name: "United States",
      country_image: "https://example.com/us-image.jpg",
      budget_7_days_usd: "$1,400–$2,200 USD",

      country_description:
        "The United States offers a wide range of landscapes and iconic cities.",
      latitude: 37.0902,
      longitude: -95.7129,
      best_months_to_visit: JSON.stringify(["May", "September"]),
    },
    {
      id: 13,
      country_name: "Canada",
      country_image: "https://example.com/canada-image.jpg",
      budget_7_days_usd: "$1,200–$1,800 USD",
      country_description:
        "Canada is known for its natural beauty, national parks, and cities like Toronto and Vancouver.",
      latitude: 56.1304,
      longitude: -106.3468,
      best_months_to_visit: JSON.stringify(["June", "September"]),
    },
    {
      id: 14,
      country_name: "Spain",
      country_image: "https://example.com/spain-image.jpg",
      budget_7_days_usd: "$800–$1,400 USD",

      country_description:
        "Spain is famous for its vibrant culture, cuisine, and landmarks.",
      latitude: 40.4637,
      longitude: -3.7492,
      best_months_to_visit: JSON.stringify([
        "April",
        "June",
        "September",
        "October",
      ]),
    },
    {
      id: 15,
      country_name: "Greece",
      country_image: "https://example.com/greece-image.jpg",
      budget_7_days_usd: "$700–$1,200 USD",

      country_description:
        "Greece is known for its ancient history, islands, and beautiful coastlines.",
      latitude: 39.0742,
      longitude: 21.8243,
      best_months_to_visit: JSON.stringify(["May", "June", "September"]),
    },
    {
      id: 16,
      country_name: "New Zealand",
      country_image: "https://example.com/nz-image.jpg",
      budget_7_days_usd: "$1,200–$1,800 USD",

      country_description:
        "New Zealand offers stunning landscapes, beaches, and adventure activities.",
      latitude: -40.9006,
      longitude: 174.886,
      best_months_to_visit: JSON.stringify(["November", "April"]),
    },
    {
      id: 17,
      country_name: "Turkey",
      country_image: "https://example.com/turkey-image.jpg",
      budget_7_days_usd: "$600–$1,000 USD",

      country_description:
        "Turkey is known for its rich history, architecture, and landscapes.",
      latitude: 38.9637,
      longitude: 35.2433,
      best_months_to_visit: JSON.stringify([
        "April",
        "May",
        "September",
        "October",
      ]),
    },
  ]);
}
