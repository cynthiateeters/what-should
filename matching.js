/**
 * Matching functions for your recommendation system
 *
 * Write functions that check if an item matches user preferences.
 * You need at least 4 functions using different JS concepts:
 *
 * 1. Single criteria match (simple conditional)
 * 2. Range check (comparison operators)
 * 3. Multiple criteria match (logical operators: &&)
 * 4. Classification function (if/else chain)
 */

// ============================================================
// EXAMPLE FUNCTIONS - Replace these with your own!
// ============================================================

/**
 * Checks if an item matches the desired mood
 * @param {Object} item - An item from your data
 * @param {string} desiredMood - The mood the user wants
 * @returns {boolean} - True if the item matches the mood
 */
function matchesMood(item, desiredMood) {
  // If no mood preference, everything matches
  if (!desiredMood) {
    return true;
  }

  // Check if the item's mood matches the desired mood
  return item.mood === desiredMood;
}

/**
 * Checks if an item fits within the available time
 * @param {Object} item - An item from your data
 * @param {number} availableMinutes - Maximum time available
 * @returns {boolean} - True if the item fits in the time
 */
function fitsTimeAvailable(item, availableMinutes) {
  // If no time constraint, everything fits
  if (!availableMinutes) {
    return true;
  }

  // Check if item's duration is within available time
  return item.timeMinutes <= availableMinutes;
}

/**
 * Checks if an item matches multiple criteria at once
 * @param {Object} item - An item from your data
 * @param {Object} preferences - Object with user preferences
 * @returns {boolean} - True if item matches ALL criteria
 */
function meetsAllCriteria(item, preferences) {
  // Use && to combine multiple checks
  return (
    matchesMood(item, preferences.mood) &&
    fitsTimeAvailable(item, preferences.time)
    // Add more checks here as needed
  );
}

/**
 * Returns a message based on how well an item matches
 * @param {number} matchScore - How many criteria matched (0-3)
 * @returns {string} - A recommendation message
 */
function getMatchMessage(matchScore) {
  if (matchScore === 3) {
    return "Perfect match!";
  } else if (matchScore === 2) {
    return "Great option";
  } else if (matchScore === 1) {
    return "Worth considering";
  } else {
    return "Might work";
  }
}

// ============================================================
// YOUR FUNCTIONS GO HERE
// ============================================================

// TODO: Write your own matching functions for your domain
// Remember: You need at least 4 functions!
