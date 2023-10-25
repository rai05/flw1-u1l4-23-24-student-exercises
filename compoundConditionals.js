// Scenario:
// You're building an application for a movie streaming platform. The platform 
// wants to recommend movies based on the user's mood and the time of day.


// Change these values to test different scenarios
let mood = "bored";    // Possible values: "happy", "sad", "excited", "bored"
let timeOfDay = "afternoon"; // Possible values: "morning", "afternoon", "evening", "night"

let recommendedMovie = "Titanic";

// 1. Implement the recommendation logic using compound conditionals
// - If the user is "tired" OR it's "night", recommend "Relaxing Ambient Film".
// - If the user is "excited" AND it's NOT "morning", recommend "High-Octane Thriller".
// - If the user is "bored" AND it's "afternoon" OR "happy" AND it's "evening", recommend "Engaging Mystery Film".
// - In all other cases, recommend "Popular Choice Film".

if (mood ="bored" & timeOfDay ="afternoon") {

// 2. Console log the recommended movie
console.log (recommendedMovie);