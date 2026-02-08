# Copilot instructions

Instructions for GitHub Copilot when working on this project.

## Project context

This is a "What should I...?" recommendation tool.

**Domain:** [Your domain here - e.g., movies, restaurants, games]

**Purpose:** Help users find recommendations based on their preferences.

## Code style

- Use `const` and `let`, never `var`
- Use meaningful variable names
- Add JSDoc comments to functions
- Use strict equality (`===`) for comparisons

## Data structure

The data lives in `data.js` as a JavaScript object:

```javascript
const data = {
  domain: "Your domain",
  description: "What this recommender does",
  options: [
    // Array of items to recommend
  ],
};
```

## Matching functions

Functions in `matching.js` should:

- Return `true` or `false` for matching functions
- Handle empty/null preferences (return `true` if no preference)
- Use descriptive parameter names

## Customization

Update this file as you work! Add notes about:

- Your specific data properties
- Naming conventions you're using
- Edge cases to watch for
