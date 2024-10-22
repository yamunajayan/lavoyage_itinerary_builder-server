export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("cities").del();

  // Inserts seed entries
  await knex("cities").insert([
    // Cities in Italy
    {
      id: 1,
      city_name: "Rome",
      city_description:
        "The capital city of Italy, known for its rich history, including landmarks like the Colosseum and the Vatican.",
      city_image: "https://example.com/rome.jpg", // Replace with actual image URL
      latitude: 41.9028,
      longitude: 12.4964,
      days_to_spend: 3,
      country_id: 1, // Assuming Italy's country_id is 1
    },
    {
      id: 2,
      city_name: "Florence",
      city_description:
        "Famous for its Renaissance art and architecture, including Michelangelo's David and the Duomo.",
      city_image: "https://example.com/florence.jpg", // Replace with actual image URL
      latitude: 43.7696,
      longitude: 11.2558,
      days_to_spend: 2,
      country_id: 1,
    },
    {
      id: 3,
      city_name: "Venice",
      city_description:
        "A city built on water, known for its canals, gondolas, and the Piazza San Marco.",
      city_image: "https://example.com/venice.jpg", // Replace with actual image URL
      latitude: 45.4408,
      longitude: 12.3155,
      days_to_spend: 2,
      country_id: 1,
    },
    {
      id: 4,
      city_name: "Milan",
      city_description:
        "The fashion and design capital of Italy, known for the Milan Cathedral and La Scala opera house.",
      city_image: "https://example.com/milan.jpg", // Replace with actual image URL
      latitude: 45.4642,
      longitude: 9.19,
      days_to_spend: 2,
      country_id: 1,
    },
    {
      id: 5,
      city_name: "Tuscany",
      city_description:
        "A region known for its beautiful landscapes, vineyards, rolling hills, and cities like Florence and Siena, Tuscany is the heart of Italy’s Renaissance.",
      city_image: "https://example.com/tuscany.jpg", // Replace with actual image URL
      latitude: 43.7711,
      longitude: 11.2486,
      days_to_spend: 4,
      country_id: 1, // Italy's country_id
    },
    {
      id: 6,
      city_name: "Cinque Terre",
      city_description:
        "Cinque Terre is a rugged, coastal region made up of five picturesque villages, known for its colorful houses, vineyards, and hiking trails.",
      city_image: "https://example.com/cinque-terre.jpg", // Replace with actual image URL
      latitude: 44.127,
      longitude: 9.7097,
      days_to_spend: 3,
      country_id: 1, // Italy's country_id
    },

    // Cities in India
    {
      id: 7,
      city_name: "New Delhi",
      city_description:
        "The capital city of India, known for its historical monuments like the Red Fort and India Gate.",
      city_image: "https://example.com/newdelhi.jpg", // Replace with actual image URL
      latitude: 28.6139,
      longitude: 77.209,
      days_to_spend: 3,
      country_id: 3, // Assuming India's country_id is 2
    },
    {
      id: 8,
      city_name: "Mumbai",
      city_description:
        "India's financial capital, known for Bollywood, the Gateway of India, and bustling streets.",
      city_image: "https://example.com/mumbai.jpg", // Replace with actual image URL
      latitude: 19.076,
      longitude: 72.8777,
      days_to_spend: 2,
      country_id: 3,
    },
    {
      id: 9,
      city_name: "Jaipur",
      city_description:
        "The Pink City, known for its palaces and forts, including the iconic Hawa Mahal and Amber Fort.",
      city_image: "https://example.com/jaipur.jpg", // Replace with actual image URL
      latitude: 26.9124,
      longitude: 75.7873,
      days_to_spend: 2,
      country_id: 3,
    },
    {
      id: 10,
      city_name: "Agra",
      city_description:
        "Home to the world-famous Taj Mahal, a UNESCO World Heritage Site.",
      city_image: "https://example.com/agra.jpg", // Replace with actual image URL
      latitude: 27.1767,
      longitude: 78.0081,
      days_to_spend: 1,
      country_id: 3,
    },
    {
      id: 11,
      city_name: "Bengaluru",
      city_description:
        "India's IT capital, known for its gardens and modern technology hub.",
      city_image: "https://example.com/bengaluru.jpg", // Replace with actual image URL
      latitude: 12.9716,
      longitude: 77.5946,
      days_to_spend: 2,
      country_id: 3,
    },
    {
      id: 12,
      city_name: "Kolkata",
      city_description:
        "Known for its colonial architecture, vibrant cultural scenes, and the Victoria Memorial.",
      city_image: "https://example.com/kolkata.jpg", // Replace with actual image URL
      latitude: 22.5726,
      longitude: 88.3639,
      days_to_spend: 2,
      country_id: 3,
    },

    // Cities in the USA
    {
      id: 13,
      city_name: "New York City",
      city_description:
        "The most populous city in the USA, known for its iconic landmarks like Times Square and Central Park.",
      city_image: "https://example.com/nyc.jpg", // Replace with actual image URL
      latitude: 40.7128,
      longitude: -74.006,
      days_to_spend: 4,
      country_id: 12, // Assuming USA's country_id is 3
    },
    {
      id: 14,
      city_name: "Los Angeles",
      city_description:
        "The entertainment capital of the world, home to Hollywood and beautiful beaches.",
      city_image: "https://example.com/la.jpg", // Replace with actual image URL
      latitude: 34.0522,
      longitude: -118.2437,
      days_to_spend: 3,
      country_id: 12,
    },
    {
      id: 15,
      city_name: "Chicago",
      city_description:
        "Known for its stunning architecture, museums, and the iconic Cloud Gate sculpture.",
      city_image: "https://example.com/chicago.jpg", // Replace with actual image URL
      latitude: 41.8781,
      longitude: -87.6298,
      days_to_spend: 2,
      country_id: 12,
    },
    {
      id: 16,
      city_name: "Miami",
      city_description:
        "Famous for its beaches, vibrant nightlife, and Cuban culture.",
      city_image: "https://example.com/miami.jpg", // Replace with actual image URL
      latitude: 25.7617,
      longitude: -80.1918,
      days_to_spend: 2,
      country_id: 12,
    },
    {
      id: 17,
      city_name: "San Francisco",
      city_description:
        "Known for the Golden Gate Bridge, Alcatraz, and its steep streets.",
      city_image: "https://example.com/sanfrancisco.jpg", // Replace with actual image URL
      latitude: 37.7749,
      longitude: -122.4194,
      days_to_spend: 3,
      country_id: 12,
    },
    {
      id: 18,
      city_name: "Las Vegas",
      city_description:
        "The entertainment capital, known for its casinos, nightlife, and shows.",
      city_image: "https://example.com/lasvegas.jpg", // Replace with actual image URL
      latitude: 36.1699,
      longitude: -115.1398,
      days_to_spend: 2,
      country_id: 12,
    },

    {
      id: 19,
      city_name: "Bangkok",
      city_description:
        "The vibrant capital of Thailand, known for its street life, temples, and bustling markets.",
      city_image: "https://example.com/bangkok.jpg", // Replace with actual image URL
      latitude: 13.7563,
      longitude: 100.5018,
      days_to_spend: 3,
      country_id: 2,
    },
    {
      id: 20,
      city_name: "Chiang Mai",
      city_description:
        "A city in northern Thailand known for its temples, night markets, and surrounding mountains.",
      city_image: "https://example.com/chiangmai.jpg", // Replace with actual image URL
      latitude: 18.7883,
      longitude: 98.9853,
      days_to_spend: 2,
      country_id: 2,
    },
    {
      id: 21,
      city_name: "Phuket",
      city_description:
        "Thailand’s largest island, famous for its beaches, nightlife, and luxury resorts.",
      city_image: "https://example.com/phuket.jpg", // Replace with actual image URL
      latitude: 7.8804,
      longitude: 98.3923,
      days_to_spend: 3,
      country_id: 2,
    },
    {
      id: 22,
      city_name: "Pattaya",
      city_description:
        "A popular beach resort city on the Gulf of Thailand, known for its nightlife and water activities.",
      city_image: "https://example.com/pattaya.jpg", // Replace with actual image URL
      latitude: 12.9236,
      longitude: 100.8825,
      days_to_spend: 2,
      country_id: 2,
    },
    {
      id: 23,
      city_name: "Ayutthaya",
      city_description:
        "A historical city north of Bangkok, known for its ancient temple ruins.",
      city_image: "https://example.com/ayutthaya.jpg", // Replace with actual image URL
      latitude: 14.3532,
      longitude: 100.5684,
      days_to_spend: 1,
      country_id: 2,
    },
    {
      id: 24,
      city_name: "Krabi",
      city_description:
        "A coastal town known for its limestone cliffs, clear waters, and beautiful beaches.",
      city_image: "https://example.com/krabi.jpg", // Replace with actual image URL
      latitude: 8.0863,
      longitude: 98.9063,
      days_to_spend: 2,
      country_id: 2,
    },
    {
      id: 25,
      city_name: "Cairo",
      city_description:
        "The capital of Egypt, known for its rich history, including the Pyramids of Giza and the Egyptian Museum.",
      city_image: "https://example.com/cairo.jpg", // Replace with actual image URL
      latitude: 30.0444,
      longitude: 31.2357,
      days_to_spend: 3,
      country_id: 4,
    },
    {
      id: 26,
      city_name: "Alexandria",
      city_description:
        "A Mediterranean port city in Egypt known for its Greco-Roman history and ancient sites.",
      city_image: "https://example.com/alexandria.jpg", // Replace with actual image URL
      latitude: 31.2001,
      longitude: 29.9187,
      days_to_spend: 2,
      country_id: 4,
    },
    {
      id: 27,
      city_name: "Luxor",
      city_description:
        "A city on the east bank of the Nile, famous for its ancient temples and the Valley of the Kings.",
      city_image: "https://example.com/luxor.jpg", // Replace with actual image URL
      latitude: 25.6872,
      longitude: 32.6396,
      days_to_spend: 2,
      country_id: 4,
    },
    {
      id: 28,
      city_name: "Aswan",
      city_description:
        "A city on the Nile River, known for its archaeological sites, including the Philae Temple.",
      city_image: "https://example.com/aswan.jpg", // Replace with actual image URL
      latitude: 24.0889,
      longitude: 32.8998,
      days_to_spend: 2,
      country_id: 4,
    },
    {
      id: 29,
      city_name: "Sharm El Sheikh",
      city_description:
        "A popular resort town on the Red Sea, known for diving and snorkeling.",
      city_image: "https://example.com/sharmelsheikh.jpg", // Replace with actual image URL
      latitude: 27.9158,
      longitude: 34.3299,
      days_to_spend: 3,
      country_id: 4,
    },
    {
      id: 30,
      city_name: "Hurghada",
      city_description:
        "Another famous Red Sea resort town, known for water sports and coral reefs.",
      city_image: "https://example.com/hurghada.jpg", // Replace with actual image URL
      latitude: 27.2579,
      longitude: 33.8116,
      days_to_spend: 2,
      country_id: 4,
    },

    // Cities in France (country_id: 5)
    {
      id: 31,
      city_name: "Paris",
      city_description:
        "The capital city of France, known for the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.",
      city_image: "https://example.com/paris.jpg", // Replace with actual image URL
      latitude: 48.8566,
      longitude: 2.3522,
      days_to_spend: 4,
      country_id: 5,
    },
    {
      id: 32,
      city_name: "Nice",
      city_description:
        "A beautiful city on the French Riviera, known for its beaches and promenade.",
      city_image: "https://example.com/nice.jpg", // Replace with actual image URL
      latitude: 43.7102,
      longitude: 7.262,
      days_to_spend: 2,
      country_id: 5,
    },
    {
      id: 33,
      city_name: "Lyon",
      city_description:
        "A city in eastern France known for its historical and architectural landmarks.",
      city_image: "https://example.com/lyon.jpg", // Replace with actual image URL
      latitude: 45.764,
      longitude: 4.8357,
      days_to_spend: 2,
      country_id: 5,
    },
    {
      id: 34,
      city_name: "Marseille",
      city_description:
        "A port city in southern France, known for its maritime history and multicultural influence.",
      city_image: "https://example.com/marseille.jpg", // Replace with actual image URL
      latitude: 43.2965,
      longitude: 5.3698,
      days_to_spend: 2,
      country_id: 5,
    },
    {
      id: 35,
      city_name: "Bordeaux",
      city_description:
        "Famous for its wine, Bordeaux is a port city on the Garonne River in southwestern France.",
      city_image: "https://example.com/bordeaux.jpg", // Replace with actual image URL
      latitude: 44.8378,
      longitude: -0.5792,
      days_to_spend: 2,
      country_id: 5,
    },
    {
      id: 36,
      city_name: "Toulouse",
      city_description:
        "A city in southwestern France, known for its aeronautics industry and historic architecture.",
      city_image: "https://example.com/toulouse.jpg", // Replace with actual image URL
      latitude: 43.6047,
      longitude: 1.4442,
      days_to_spend: 2,
      country_id: 5,
    },
    {
      id: 37,
      city_name: "Pisa",
      city_description:
        "Famous for the Leaning Tower, Pisa is a city in Italy’s Tuscany region known for its medieval architecture and historic university.",
      city_image: "https://example.com/pisa.jpg", // Replace with actual image URL
      latitude: 43.7228,
      longitude: 10.4017,
      days_to_spend: 2,
      country_id: 1, // Italy's country_id
    },
    {
      id: 38,
      city_name: "Sicily",
      city_description:
        "The largest Mediterranean island, Sicily is rich in history, archaeological sites, beautiful beaches, and culinary traditions.",
      city_image: "https://example.com/sicily.jpg", // Replace with actual image URL
      latitude: 37.6,
      longitude: 14.0154,
      days_to_spend: 5,
      country_id: 1, // Italy's country_id
    },
  ]);
}
