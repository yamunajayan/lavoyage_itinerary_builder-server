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
      city_image: "/images/Italy/rome-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/Italy/florence-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/Italy/venice-1.avif", // Replace with actual image URL
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
      city_image: "/images/Italy/milan-1.avif", // Replace with actual image URL
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
      city_image: "/images/Italy/Tuscany.jpeg", // Replace with actual image URL
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
      city_image: "/images/Italy/cinque-terre.jpeg", // Replace with actual image URL
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
      city_image: "/images/India/delhi-1.webp", // Replace with actual image URL
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
      city_image: "/images/India/mumbai-1.avif", // Replace with actual image URL
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
      city_image: "/images/India/jaipur-1.avif", // Replace with actual image URL
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
      city_image: "/images/India/agra-1.avif", // Replace with actual image URL
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
      city_image: "/images/India/bangalore-1.jpeg", // Replace with actual image URL
      latitude: 12.9716,
      longitude: 77.5946,
      days_to_spend: 2,
      country_id: 3,
    },
    {
      id: 12,
      city_name: "Kerala",
      city_description:
        "Known for its colonial architecture, vibrant cultural scenes, and the Victoria Memorial.",
      city_image: "/images/India/kerala.avif", // Replace with actual image URL
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
      city_image: "/images/USA/new_york.jpeg", // Replace with actual image URL
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
      city_image: "/images/USA/los_angeles.webp", // Replace with actual image URL
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
      city_image: "/images/USA/chicago.jpeg", // Replace with actual image URL
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
      city_image: "/images/USA/miami.jpeg", // Replace with actual image URL
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
      city_image: "/images/USA/san_francisco.jpeg", // Replace with actual image URL
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
      city_image: "/images/USA/las_vegas.webp", // Replace with actual image URL
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
      city_image: "/images/Thailand/bangkok-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/Thailand/chiang-mai-1.avif", // Replace with actual image URL
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
      city_image: "/images/Thailand/phuket-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/Thailand/pattaya-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/Thailand/ayutthaya-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/Thailand/krabi-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/Egypt/cairo-1.avif", // Replace with actual image URL
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
      city_image: "/images/Egypt/ALEXANDRIA-1.avif", // Replace with actual image URL
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
      city_image: "/images/Egypt/luxor-1.avif", // Replace with actual image URL
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
      city_image: "/images/Egypt/aswan-1.avif", // Replace with actual image URL
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
      city_image: "/images/Egypt/SHARM-EL-SHEIKH-1.avif", // Replace with actual image URL
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
      city_image: "/images/Egypt/HURGHADA-1.avif", // Replace with actual image URL
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
      city_image: "/images/France/paris-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/France/nice-1.avif", // Replace with actual image URL
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
      city_image: "/images/France/lyon-1.avif", // Replace with actual image URL
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
      city_image: "/images/France/marseille-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/France/bordeaux-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/France/toulouse-1.jpeg", // Replace with actual image URL
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
      city_image: "/images/Italy/pisa.avif", // Replace with actual image URL
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
      city_image: "/images/Italy/sicily.avif", // Replace with actual image URL
      latitude: 37.6,
      longitude: 14.0154,
      days_to_spend: 5,
      country_id: 1, // Italy's country_id
    },
    {
      id: 39,
      city_name: "Ubud",
      city_description:
        "Known as the cultural heart of Bali, Ubud is famous for its art scene, lush rice terraces, and traditional Balinese ceremonies.",
      city_image: "/images/Bali/ubud.jpeg", // Replace with actual image URL
      latitude: -8.5069,
      longitude: 115.2623,
      days_to_spend: 4,
      country_id: 6, // Indonesia's country_id
    },
    {
      id: 40,
      city_name: "Kuta Beach",
      city_description:
        "A world-famous beach destination, Kuta is known for its surf-friendly waves, vibrant nightlife, and beautiful sunsets.",
      city_image: "/images/Bali/kuta.webp", // Replace with actual image URL
      latitude: -8.7251,
      longitude: 115.168,
      days_to_spend: 3,
      country_id: 6, // Indonesia's country_id
    },
    {
      id: 41,
      city_name: "Nusa Dua",
      city_description:
        "An upscale resort area, Nusa Dua is famous for its pristine beaches, luxury hotels, and tranquil environment, ideal for relaxation.",
      city_image: "/images/Bali/nusa_dua.jpeg", // Replace with actual image URL
      latitude: -8.8031,
      longitude: 115.228,
      days_to_spend: 5,
      country_id: 6, // Indonesia's country_id
    },
    {
      id: 42,
      city_name: "Tanah Lot",
      city_description:
        "A famous sea temple perched on a rock formation, Tanah Lot is known for its stunning sunset views and cultural significance.",
      city_image: "/images/Bali/tanah_lot.jpeg", // Replace with actual image URL
      latitude: -8.6308,
      longitude: 115.0875,
      days_to_spend: 2,
      country_id: 6, // Indonesia's country_id
    },
    {
      id: 43,
      city_name: "Sydney",
      city_description:
        "Australia's largest city, Sydney is famous for its stunning harbor, iconic Sydney Opera House, and beautiful beaches like Bondi.",
      city_image: "/images/Australia/sydney.jpeg", // Replace with actual image URL
      latitude: -33.8688,
      longitude: 151.2093,
      days_to_spend: 5,
      country_id: 7, // Australia's country_id
    },
    {
      id: 44,
      city_name: "Melbourne",
      city_description:
        "Known for its vibrant arts scene, diverse culture, and coffee shops, Melbourne is often considered Australia's cultural capital.",
      city_image: "/images/Australia/melbourne.avif", // Replace with actual image URL
      latitude: -37.8136,
      longitude: 144.9631,
      days_to_spend: 4,
      country_id: 7, // Australia's country_id
    },
    {
      id: 45,
      city_name: "Great Barrier Reef",
      city_description:
        "The world's largest coral reef system, the Great Barrier Reef offers stunning underwater experiences, including snorkeling and scuba diving.",
      city_image: "/images/Australia/Great_Barrier-Reef.jpeg", // Replace with actual image URL
      latitude: -16.2985,
      longitude: 145.1005,
      days_to_spend: 5,
      country_id: 7, // Australia's country_id
    },
    {
      id: 46,
      city_name: "Brisbane",
      city_description:
        "Brisbane is known for its sunny weather, vibrant urban precincts, and proximity to natural attractions like the Gold Coast and Sunshine Coast.",
      city_image: "/images/Australia/brisbane.jpeg", // Replace with actual image URL
      latitude: -27.4698,
      longitude: 153.0251,
      days_to_spend: 3,
      country_id: 7, // Australia's country_id
    },
    {
      id: 47,
      city_name: "Tokyo",
      city_description:
        "Japan's bustling capital, Tokyo is known for its modern skyline, vibrant culture, and historic sites like the Senso-ji Temple.",
      city_image: "/images/Japan/tokyo-1.avif", // Replace with actual image URL
      latitude: 35.6762,
      longitude: 139.6503,
      days_to_spend: 5,
      country_id: 8, // Japan's country_id
    },
    {
      id: 48,
      city_name: "Kyoto",
      city_description:
        "Renowned for its classical Buddhist temples, stunning gardens, and traditional wooden houses, Kyoto is a cultural hub of Japan.",
      city_image: "/images/Japan/kyoto-1.avif", // Replace with actual image URL
      latitude: 35.0116,
      longitude: 135.7681,
      days_to_spend: 4,
      country_id: 8, // Japan's country_id
    },
    {
      id: 49,
      city_name: "Mount Fuji",
      city_description:
        "An iconic symbol of Japan, Mount Fuji is a stratovolcano known for its breathtaking beauty and is popular for hiking and photography.",
      city_image: "/images/Japan/mount-fuji-1.jpeg", // Replace with actual image URL
      latitude: 35.3606,
      longitude: 138.7274,
      days_to_spend: 3,
      country_id: 8, // Japan's country_id
    },
    {
      id: 50,
      city_name: "Hiroshima",
      city_description:
        "A city known for its historical significance, Hiroshima is home to the Peace Memorial Park and Museum, dedicated to the victims of the atomic bomb.",
      city_image: "/images/Japan/hiroshima-1.jpeg", // Replace with actual image URL
      latitude: 34.3853,
      longitude: 132.4553,
      days_to_spend: 2,
      country_id: 8, // Japan's country_id
    },
    {
      id: 51,
      city_name: "Rio de Janeiro",
      city_description:
        "Famous for its stunning beaches, vibrant culture, and iconic landmarks like Christ the Redeemer, Rio de Janeiro is a must-visit destination in Brazil.",
      city_image: "/images/Brazil/Rio_de _aneiro.avif", // Replace with actual image URL
      latitude: -22.9068,
      longitude: -43.1729,
      days_to_spend: 5,
      country_id: 9, // Brazil's country_id
    },
    {
      id: 52,
      city_name: "São Paulo",
      city_description:
        "As Brazil's largest city, São Paulo is known for its rich cultural scene, diverse cuisine, and bustling nightlife.",
      city_image: "/images/Brazil/sao_paulo.jpeg", // Replace with actual image URL
      latitude: -23.5505,
      longitude: -46.6333,
      days_to_spend: 4,
      country_id: 9, // Brazil's country_id
    },
    {
      id: 53,
      city_name: "Salvador",
      city_description:
        "Known for its colonial architecture and Afro-Brazilian culture, Salvador is famous for its Carnival celebrations and vibrant music scene.",
      city_image: "/images/Brazil/salvador.avif", // Replace with actual image URL
      latitude: -12.9714,
      longitude: -38.5014,
      days_to_spend: 3,
      country_id: 9, // Brazil's country_id
    },
    {
      id: 54,
      city_name: "Amazon Rainforest",
      city_description:
        "The Amazon Rainforest is one of the world's most biodiverse regions, offering unique wildlife experiences and opportunities for eco-tourism.",
      city_image: "/images/Brazil/amazon_rainforest.jpeg", // Replace with actual image URL
      latitude: -3.4653,
      longitude: -62.2159,
      days_to_spend: 5,
      country_id: 9, // Brazil's country_id
    },
    {
      id: 55,
      city_name: "Cancún",
      city_description:
        "Famous for its beautiful beaches and vibrant nightlife, Cancún is a popular destination for travelers seeking sun and fun.",
      city_image: "/images/Mexico/cancun.jpeg", // Replace with actual image URL
      latitude: 21.1619,
      longitude: -86.8515,
      days_to_spend: 5,
      country_id: 10, // Mexico's country_id
    },
    {
      id: 56,
      city_name: "Mexico City",
      city_description:
        "The capital of Mexico, Mexico City is known for its rich history, vibrant culture, and attractions like the Zócalo and Frida Kahlo Museum.",
      city_image: "/images/Mexico/mexico_city.webp", // Replace with actual image URL
      latitude: 19.4326,
      longitude: -99.1332,
      days_to_spend: 4,
      country_id: 10, // Mexico's country_id
    },
    {
      id: 57,
      city_name: "Tulum",
      city_description:
        "Known for its stunning coastal ruins, Tulum offers beautiful beaches, eco-friendly resorts, and a laid-back atmosphere.",
      city_image: "/images/Mexico/tulum-2.jpeg", // Replace with actual image URL
      latitude: 20.211,
      longitude: -87.4659,
      days_to_spend: 3,
      country_id: 10, // Mexico's country_id
    },
    {
      id: 58,
      city_name: "Guadalajara",
      city_description:
        "Famous for mariachi music and tequila, Guadalajara is a cultural hub known for its historic architecture and vibrant local markets.",
      city_image: "/images/Mexico/guadalajara.avif", // Replace with actual image URL
      latitude: 20.6767,
      longitude: -103.3509,
      days_to_spend: 4,
      country_id: 10, // Mexico's country_id
    },
    {
      id: 59,
      city_name: "Cape Town",
      city_description:
        "Known for its stunning landscapes, iconic Table Mountain, and vibrant cultural scene, Cape Town is a top destination in South Africa.",
      city_image: "/images/SouthAfrica/cape_town.jpeg", // Replace with actual image URL
      latitude: -33.9249,
      longitude: 18.4241,
      days_to_spend: 5,
      country_id: 11, // South Africa's country_id
    },
    {
      id: 60,
      city_name: "Johannesburg",
      city_description:
        "As the largest city in South Africa, Johannesburg is known for its rich history, cultural attractions, and vibrant art scene.",
      city_image: "/images/SouthAfrica/johannesburg.webp", // Replace with actual image URL
      latitude: -26.2041,
      longitude: 28.0473,
      days_to_spend: 4,
      country_id: 11, // South Africa's country_id
    },
    {
      id: 61,
      city_name: "Kruger National Park",
      city_description:
        "One of Africa's largest game reserves, Kruger National Park offers incredible wildlife viewing opportunities and diverse ecosystems.",
      city_image: "/images/SouthAfrica/kruger_national_park.avif", // Replace with actual image URL
      latitude: -23.9884,
      longitude: 31.5704,
      days_to_spend: 5,
      country_id: 11, // South Africa's country_id
    },
    {
      id: 62,
      city_name: "Durban",
      city_description:
        "Known for its beautiful beaches and warm climate, Durban is a coastal city that offers a mix of cultures and vibrant street markets.",
      city_image: "/images/SouthAfrica/durban.webp", // Replace with actual image URL
      latitude: -29.8587,
      longitude: 31.0218,
      days_to_spend: 4,
      country_id: 11, // South Africa's country_id
    },
  ]);
}
