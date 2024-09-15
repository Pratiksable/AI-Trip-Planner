/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
// safetySettings: Adjust safety settings
// See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options with HotelName, Hotel Address, Price in indian rupees, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing in indian rupees , rating , Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"hotel\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101, USA\",\n      \"price\": \"₹4,000 - ₹6,000 per night\",\n      \"imageUrl\": \"https://www.thed.com/media/images/home-page-hero-image-desktop.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1423\",\n      \"rating\": \"4.0\",\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street, offering a vibrant atmosphere, live entertainment, and a casino.\"\n    },\n    {\n      \"name\": \"The Golden Nugget Las Vegas\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101, USA\",\n      \"price\": \"₹5,000 - ₹8,000 per night\",\n      \"imageUrl\": \"https://www.goldennugget.com/media/images/las-vegas/golden-nugget-las-vegas-hotel-hero.jpg\",\n      \"geoCoordinates\": \"36.1681, -115.1425\",\n      \"rating\": \"4.5\",\n      \"description\": \"A historic and luxurious hotel with a lively casino, multiple restaurants, and a world-famous shark tank.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109, USA\",\n      \"price\": \"₹3,000 - ₹5,000 per night\",\n      \"imageUrl\": \"https://www.circuscircus.com/media/images/circus-circus-hotel-hero-image.jpg\",\n      \"geoCoordinates\": \"36.1027, -115.1728\",\n      \"rating\": \"3.5\",\n      \"description\": \"A family-friendly hotel with a circus theme, offering affordable rates, a carnival midway, and a wide range of entertainment options.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A vibrant pedestrian mall with a canopy of lights, live entertainment, street performers, and casinos.\",\n          \"placeImageUrl\": \"https://www.fremontstreetexperience.com/media/images/home-page-hero-image-desktop.jpg\",\n          \"geoCoordinates\": \"36.1699, -115.1423\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5\",\n          \"timeToTravel\": \"2-3 hours\"\n        },\n        {\n          \"time\": \"Afternoon (1:00 PM - 4:00 PM)\",\n          \"placeName\": \"The Mob Museum\",\n          \"placeDetails\": \"A museum dedicated to organized crime and its history in Las Vegas.\",\n          \"placeImageUrl\": \"https://www.themobmuseum.org/sites/default/files/styles/hero_image/public/2022-12/mob-museum-exterior_0.jpg\",\n          \"geoCoordinates\": \"36.1718, -115.1435\",\n          \"ticketPricing\": \"₹2,000 per person\",\n          \"rating\": \"4.0\",\n          \"timeToTravel\": \"2-3 hours\"\n        },\n        {\n          \"time\": \"Evening (5:00 PM - 8:00 PM)\",\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"A vibrant outdoor shopping and dining district with attractions like the High Roller observation wheel.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/las-vegas/linq-promenade/linq-promenade-hero.jpg\",\n          \"geoCoordinates\": \"36.1029, -115.1725\",\n          \"ticketPricing\": \"Free (High Roller: ₹1,500 per person)\",\n          \"rating\": \"4.0\",\n          \"timeToTravel\": \"2-3 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A stunning botanical garden featuring seasonal displays, flowers, and sculptures.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/bellagio-conservatory/2022-conservatory-images/Winter-Conservatory/2022-Conservatory-Winter-Hero-desktop-1600x900.jpg\",\n          \"geoCoordinates\": \"36.1111, -115.1740\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5\",\n          \"timeToTravel\": \"1-2 hours\"\n        },\n        {\n          \"time\": \"Afternoon (1:00 PM - 4:00 PM)\",\n          \"placeName\": \"The Venetian and The Palazzo\",\n          \"placeDetails\": \"Luxury resorts with a Venetian-inspired atmosphere, canals, gondolas, and upscale shopping.\",\n          \"placeImageUrl\": \"https://www.venetian.com/content/dam/venetian/venetian-resort/venetian-resort-home-page-hero.jpg\",\n          \"geoCoordinates\": \"36.1129, -115.1753\",\n          \"ticketPricing\": \"Free (Gondola ride: ₹1,000 per person)\",\n          \"rating\": \"4.0\",\n          \"timeToTravel\": \"2-3 hours\"\n        },\n        {\n          \"time\": \"Evening (5:00 PM - 8:00 PM)\",\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"A bustling boulevard with world-class hotels, casinos, restaurants, and entertainment venues.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_landscape_640/public/2023-04/The_Strip_Las_Vegas_Night.jpg\",\n          \"geoCoordinates\": \"36.1129, -115.1753\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"5.0\",\n          \"timeToTravel\": \"2-3 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"plan\": [\n        {\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic park with red sandstone cliffs, hiking trails, and stunning desert views.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/learn/nature/images/RedRockCanyon_landscape.jpg\",\n          \"geoCoordinates\": \"36.1736, -115.2446\",\n          \"ticketPricing\": \"₹150 per vehicle\",\n          \"rating\": \"4.5\",\n          \"timeToTravel\": \"3-4 hours\"\n        },\n        {\n          \"time\": \"Afternoon (1:00 PM - 4:00 PM)\",\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"A historic dam on the Colorado River, offering guided tours and breathtaking views.\",\n          \"placeImageUrl\": \"https://www.usbr.gov/lc/hooverdam/images/hd_dam_09_04_2014_v2.jpg\",\n          \"geoCoordinates\": \"36.0037, -114.9930\",\n          \"ticketPricing\": \"₹200 per person\",\n          \"rating\": \"4.0\",\n          \"timeToTravel\": \"3-4 hours\"\n        },\n        {\n          \"time\": \"Evening (5:00 PM - 8:00 PM)\",\n          \"placeName\": \"The Cosmopolitan of Las Vegas\",\n          \"placeDetails\": \"A stylish hotel with a rooftop pool, multiple restaurants, and a lively atmosphere.\",\n          \"placeImageUrl\": \"https://www.cosmopolitanlasvegas.com/media/images/home-page-hero-image-desktop.jpg\",\n          \"geoCoordinates\": \"36.1146, -115.1739\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": \"4.5\",\n          \"timeToTravel\": \"2-3 hours\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is designed for a budget-conscious couple. You can adjust the activities and dining options based on your preferences and budget.\n* The hotel prices are approximate and may vary depending on the season and availability.\n* The ticket prices are also approximate and may change without notice.\n* Consider using public transportation or ride-sharing services to save on transportation costs.\n* Take advantage of free attractions and activities offered by the hotels and casinos.\n* Look for deals and discounts on food, drinks, and entertainment.\n* Pack comfortable shoes and clothing suitable for walking.\n* Stay hydrated and avoid excessive sun exposure.\n* Have fun and enjoy your trip to Las Vegas!\n"},
      ],
    },
  ],
});



