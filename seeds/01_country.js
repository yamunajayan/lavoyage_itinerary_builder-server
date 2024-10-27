import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("countries").del();

  // Inserts seed entries
  const countries = [
    {
      id: 1,
      country_name: "Italy",
      country_image: "http://localhost:8080/images/Italy/italy-2.avif",
      budget_7_days_usd: "$1,000–$1,500 USD",
      country_description:
        "Italy is known foItaly is best known for its rich cultural heritage, iconic art, and delicious cuisine. From the breathtaking architecture of  Rome to amazing vineyards of Tuscany to the picturesque canals of Venice, it offers a blend of history and beauty. Additionally, Italy's world-renowned dishes  like pizza, pasta, and gelato make it a top  destination for food lovers.",
      latitude: 41.87194,
      longitude: 12.56738,
      best_months_to_visit: JSON.stringify([
        "April",
        "May",
        "September",
        "October",
      ]),
      transportation: JSON.stringify([
        {
          mode: "Trains",
          message:
            "Italy's high-speed train network (Frecciarossa and Italo) connects major cities like Rome, Florence, and Venice efficiently.",
          transportation:
            "Trains are the fastest and most convenient way to travel between cities.",
        },
        {
          mode: "Buses",
          message:
            "Local buses operate within each city and connect to nearby towns, but walking is often preferred for city exploration.",
          transportation:
            "Buses and regional trains are available for local travel.",
        },
        {
          mode: "Car Rentals",
          message:
            "Car rentals are useful for trips to the Italian countryside or smaller towns, though not necessary within major cities like Rome, Florence, or Venice.",
          transportation:
            "Services like Hertz, Europcar, and Avis are widely available. An international driving permit is required.",
        },
      ]),
      finalReminders: JSON.stringify({
        safety: "Stay vigilant in crowded tourist areas to avoid pickpockets.",
        culturalEtiquette:
          "Respect local customs and dress appropriately when visiting religious sites.",
        dining:
          "Try authentic Italian cuisine at local trattorias, and remember, tipping is not mandatory in Italy.",
      }),
    },
    {
      id: 2,
      country_name: "Thailand",
      country_image: "http://localhost:8080/images/Thailand/Thailand-1.avif",
      budget_7_days_usd: "$500–$1,000 USD",
      country_description:
        "Thailand is famous for its tropical beaches, royal palaces, and temples.",
      latitude: 15.87003,
      longitude: 100.99254,
      best_months_to_visit: JSON.stringify(["November", "February"]),
      transportation: JSON.stringify([
        {
          mode: "Tuk-tuks",
          message:
            "These three-wheeled taxis are a popular way to experience local travel within the city.",
          transportation:
            "Tuk-tuks are widely available, though fares should be negotiated beforehand.",
        },
        {
          mode: "Long-tail Boats",
          message:
            "Travel along Bangkok’s canals and the Chao Phraya River to experience the city from a unique perspective.",
          transportation:
            "Long-tail boat services are available at most river piers and provide scenic routes.",
        },
        {
          mode: "Intercity Buses & Trains",
          message:
            "Intercity buses and trains connect major tourist destinations and are affordable ways to explore Thailand.",
          transportation:
            "Express buses and overnight trains are popular for long-distance travel.",
        },
        {
          mode: "Motorbike Rentals",
          message:
            "Motorbikes are widely rented, especially on islands like Phuket and Koh Samui, for convenient exploration.",
          transportation:
            "Helmets and international permits are recommended for safety.",
        },
      ]),
      finalReminders: JSON.stringify({
        safety:
          "Be cautious of pickpockets, especially in crowded tourist areas.",
        culturalEtiquette:
          "Dress modestly and remove shoes when entering temples.",
        dining:
          "Try local street food but ensure it’s from a busy stall to ensure freshness.",
      }),
    },
    {
      id: 3,
      country_name: "India",
      country_image: "http://localhost:8080/images/India/India-1.avif",
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
      country_image: "http://localhost:8080/images/Egypt/Egypt-1.jpeg",
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
      country_image: "http://localhost:8080/images/France/France-2.jpeg",
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
      country_image: "http://localhost:8080/images/Bali/Bali-1.webp",
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
      country_image: "http://localhost:8080/images/Australia/Australia-1.avif",
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
      country_image: "http://localhost:8080/images/Japan/Japan-1.avif",
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
      country_image: "http://localhost:8080/images/Brazil/Brazil-1.avif",
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
      country_image: "http://localhost:8080/images/Mexico/Mexico-1.jpeg",
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
      country_image:
        "http://localhost:8080/images/SouthAfrica/SouthAfrica-1.jpeg",
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
      country_image: "http://localhost:8080/images/USA/USA-1.webp",
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
      country_image: "http://localhost:8080/images/Canada/Canada-1.webp",
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
      country_image: "http://localhost:8080/images/Spain/Spain-1.avif",
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
      country_image: "http://localhost:8080/images/Greece/Greece-1.jpeg",
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
      country_image:
        "http://localhost:8080/images/NewZealand/NewZealand-1.avif",
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
      country_image: "http://localhost:8080/images/Turkey/Turkey-1.webp",
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
  ];

  // const updatedCountries = countries.map((country) => ({
  //   ...country,
  //   country_image: `${
  //     process.env.BASE_URL
  //   }/images/${country.country_name.toLowerCase()}/${country.country_name.toLowerCase()}.jpg`,
  // }));

  // Inserts seed entries
  await knex("countries").insert(countries);
}
