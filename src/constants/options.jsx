export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    description: "Solo travel for one person",
    icon: "🧍", // You can replace this with an actual icon or component
    people: "1"
  },
  {
    id: 2,
    title: "Couple",
    description: "Travel for two people",
    icon: "👫", // Replace with an appropriate icon
    people: "2"
  },
  {
    id: 3,
    title: "Family",
    description: "Travel for the whole family",
    icon: "👨‍👩‍👦", // Replace with a family icon or component
    people: "3+"
  },
  {
    id: 4,
    title: "Group",
    description: "Travel with friends or colleagues",
    icon: "👥", // Replace with group icon
    people: "4+"
  }
];


export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    description: "Stay conscious of costs",
    icon: "💸", // Represents budget-friendly option
  },
  {
    id: 2,
    title: "Moderate",
    description: "Balanced cost with comfort",
    icon: "💰", // Represents moderate spending
  },
  {
    id: 3,
    title: "Luxury",
    description: "Premium experiences, no expense spared",
    icon: "💎", // Represents a luxury option
  }
];

export const AI_PROMPT = 'Generate Travel Plan for Location: {loacation}, for {totalDays} Days for {traveler} people with a {budget} budget, Give me a Hotels options with HotelName, Hotel Address, Price in indian rupees, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing in indian rupees, rating , Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'