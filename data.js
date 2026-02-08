/**
 * Your recommendation data goes here!
 *
 * Replace this example with your own domain (movies, restaurants, games, etc.)
 * Keep the same structure: an object with an "options" array.
 *
 * Each option should have properties that help you make recommendations.
 * Think about: What information do I need to match user preferences?
 */

const data = {
  // Describe your domain
  domain: "Your Domain Here",
  description: "A brief description of what you're recommending",

  // Your options array - aim for 15-25 items
  options: [
    // Example structure - replace with your own!
    {
      title: "Example Item 1",
      category: "category-a",
      mood: "relaxed",
      timeMinutes: 30,
      // Add more properties relevant to your domain
    },
    {
      title: "Example Item 2",
      category: "category-b",
      mood: "energetic",
      timeMinutes: 60,
    },
    // Add more options...
  ],
};

// Note: This file is loaded via a script tag, so `data` becomes a global variable
// that matching.js and app.js can access.
