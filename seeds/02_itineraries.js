import readItineraryBackupData from "../utils/read_backup_data.js";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("itineraries").del();

  const itinerayData = readItineraryBackupData();

  // Inserts seed entries
  await knex("itineraries").insert(
    //   [
    //   {
    //     id: 1,
    //     days_to_spend: 7,
    //     itinerary: JSON.stringify([
    //       {
    //         day: 1,
    //         plan: "Arrival in Rome - The Eternal City offers iconic landmarks like the Colosseum, Roman Forum, and Trevi Fountain. Start your day with a leisurely exploration of these historic sites.",
    //         transportation:
    //           "Public transportation options include buses, trams, and the metro. Taxis are available, but walking is ideal for exploring central Rome.",
    //       },
    //       {
    //         day: 2,
    //         plan: "Rome continued - Visit the Vatican City, including St. Peter's Basilica and the Sistine Chapel. End your day with a stroll through Piazza Navona and the Pantheon.",
    //         transportation:
    //           "Use the metro or buses for Vatican City. Walking is the best way to explore the surrounding areas.",
    //       },
    //       {
    //         day: 3,
    //         plan: "Travel to Florence - Enjoy a scenic train ride from Rome to Florence. Once in Florence, visit the Duomo, Piazza della Signoria, and Uffizi Gallery.",
    //         transportation:
    //           "Take a high-speed train (Frecciarossa or Italo) from Rome to Florence in about 1.5 hours. Walking or using local buses for Florence sightseeing.",
    //       },
    //       {
    //         day: 4,
    //         plan: "Florence continued - Explore more of Florence, including the Ponte Vecchio, Boboli Gardens, and Michelangelo's David at the Galleria dell'Accademia.",
    //         transportation:
    //           "Florence is very walkable, but buses are available for longer distances.",
    //       },
    //       {
    //         day: 5,
    //         plan: "Travel to Venice - Head to Venice by train and spend the day exploring St. Mark's Square, St. Mark's Basilica, and the Doge's Palace.",
    //         transportation:
    //           "Take a high-speed train from Florence to Venice (2 hours). In Venice, use water buses (vaporetti) to get around or walk through the winding streets.",
    //       },
    //       {
    //         day: 6,
    //         plan: "Venice continued - Enjoy a gondola ride, visit the Rialto Bridge, and explore the islands of Murano (for glass-making) and Burano (for colorful houses).",
    //         transportation:
    //           "Gondolas and water buses are the main forms of transportation within Venice. Ferries are available to the nearby islands.",
    //       },
    //       {
    //         day: 7,
    //         plan: "Departure - Depending on your flight time, relax in a café or visit the Venice Biennale art exhibition before heading to the airport.",
    //         transportation:
    //           "Take a water taxi or Alilaguna (water bus) to Venice Marco Polo Airport.",
    //       },
    //     ]),
    //     good_to_travel: JSON.stringify({
    //       month: "December",
    //       isGoodMonth: true,
    //       message:
    //         "December can be a great time to visit Italy, especially for those who enjoy festive Christmas markets, fewer tourists, and cooler weather. Rome and Florence are lively with holiday lights and events.",
    //     }),
    //     cities_included: JSON.stringify(["Rome", "Florence", "Venice"]),
    //     country_id: 1,
    //   },
    //   {
    //     id: 2,
    //     days_to_spend: 7,
    //     itinerary: JSON.stringify([
    //       {
    //         day: 1,
    //         plan: "Arrival in Bangkok - December is a great time to visit Bangkok due to cooler, less humid weather. Visit iconic spots like the Grand Palace, Wat Phra Kaew, and Wat Arun.",
    //         transportation:
    //           "Public transport options include taxis, Tuk-Tuks, and the Skytrain (BTS).",
    //       },
    //       {
    //         day: 2,
    //         plan: "Bangkok continued - Explore the Chatuchak Weekend Market, take a Chao Phraya River cruise, and visit Chinatown for unique experiences.",
    //         transportation:
    //           "Use the BTS Skytrain to navigate inner-city travel and avoid traffic.",
    //       },
    //       {
    //         day: 3,
    //         plan: "Travel to Phuket - Take a 1.5-hour flight from Bangkok or opt for a bus or train ride, which takes around 12-13 hours. Upon arrival, explore Old Town Phuket and visit the Big Buddha.",
    //         transportation:
    //           "Fly via domestic airlines like AirAsia or Thai Lion Air, or use buses/trains for longer travel.",
    //       },
    //       {
    //         day: 4,
    //         plan: "Phuket sightseeing - Enjoy Patong Beach, Freedom Beach, and water activities like snorkeling or kayaking.",
    //         transportation:
    //           "Rent a motorbike or car, or use Tuk-Tuks for travel around the city.",
    //       },
    //       {
    //         day: 5,
    //         plan: "Travel to Krabi - Take a ferry (2 hours) or bus (3-4 hours) from Phuket to Krabi. Relax at Ao Nang Beach after arrival.",
    //         transportation:
    //           "Ferries are a scenic option; buses offer a cheaper alternative.",
    //       },
    //       {
    //         day: 6,
    //         plan: "Krabi exploration - Visit Railay Beach and enjoy island hopping at the Four Islands (Chicken Island, Tup Island, Poda Island, Phra Nang Cave Beach).",
    //         transportation:
    //           "Long-tail boats are best for island hopping, while motorbikes or Tuk-Tuks work well for city travel.",
    //       },
    //       {
    //         day: 7,
    //         plan: "Departure - Depending on your flight time, visit the Emerald Pool or Hot Springs before heading to Krabi International Airport.",
    //         transportation:
    //           "Krabi Airport offers flights back to Bangkok and other international destinations.",
    //       },
    //     ]),
    //     good_to_travel: JSON.stringify({
    //       month: "December",
    //       isGoodMonth: true,
    //       message:
    //         "December is an excellent time to visit Thailand due to pleasant weather and fewer chances of rain. It's the peak tourist season, so expect more crowds, especially in popular areas like Bangkok and Phuket.",
    //     }),
    //     cities_included: JSON.stringify(["Bangkok", "Phuket", "Krabi"]),
    //     country_id: 2,
    //   },
    //   {
    //     id: 3,
    //     days_to_spend: 6,
    //     itinerary: JSON.stringify([
    //       {
    //         day: 1,
    //         plan: "Start your journey in the historic city of Rome with a tour of the iconic Colosseum. In the afternoon, visit the Roman Forum and Palatine Hill for a sense of the Ancient Roman civilisation.  Finish off your day by throwing a coin into the Trevi Fountain, the largest Baroque fountain in Rome promising a return to Rome.",
    //         transportation:
    //           "Subway to Colosseum, walk to Roman Forum, Palatine Hill and Trevi Fountain.",
    //       },
    //       {
    //         day: 2,
    //         plan: "Devote the day to Vatican City. Start at the Vatican Museums, home to an immense collection of art and history. Don’t miss the Sistine Chapel, with its famous frescoed ceiling by Michelangelo. In the afternoon, explore St. Peter’s Basilica, the largest church in the world.",
    //         transportation: "Subway to Ottaviano, then walk to the Vatican City.",
    //       },
    //       {
    //         day: 3,
    //         plan: "Visit the beautiful Spanish Steps and nearby Trinità dei Monti. Continue to Piazza Navona, a public space established in the 1st Century AD, now bustling with street artists, cafes and restaurants. Visit the Pantheon, a remarkably well-preserved temple dedicated to Rome’s gods. Finish your day in Rome with a walk along Via del Corso for shopping.",
    //         transportation: "Walk or bus around the city center.",
    //       },
    //       {
    //         day: 4,
    //         plan: "Travel to the mesmerizing city of Venice. Spend your first evening enjoying a romantic gondola ride in its famed canals, and discover the city's unparalled charm.",
    //         transportation:
    //           "Take a high-speed train from Rome to Venice, then use vaporetto (water bus) and walking. Gondola ride in the evening.",
    //       },
    //       {
    //         day: 5,
    //         plan: "Tour the heart of Venice at the Piazza San Marco. Visit San Marco Basilica and Doge's Palace, then ascend the Campanile for panoramic views of the city. In the afternoon, take a Vaporetto to the Rialto Bridge and enjoy the Grand Canal view.",
    //         transportation: "Walk and vaporetto to major attractions.",
    //       },
    //       {
    //         day: 6,
    //         plan: "Escape the city to the islands of Murano and Burano. In Murano be mesmerized by the art of glass blowing and take time to explore Burano known for its lace-making and brightly-colored houses. After returning to Venice, wrap up your trip with an aperitivo and meal at a local bacaro (wine bar).",
    //         transportation:
    //           "Vaporetto to Murano and Burano. Walk or vaporetto back to Venice city center.",
    //       },
    //     ]),
    //     good_to_travel: JSON.stringify({
    //       month: "December",
    //       isGoodMonth: true,
    //       message:
    //         "December can be a great time to visit Italy, especially for those who enjoy festive Christmas markets, fewer tourists, and cooler weather. Rome and Florence are lively with holiday lights and events.",
    //     }),
    //     cities_included: JSON.stringify(["Rome", "Venice"]),
    //     country_id: 1,
    //   },
    // ]
    itinerayData
  );
}
