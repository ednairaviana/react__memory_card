# Memory Card Game

> A card memory game built with React as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

**Live Demo:** [ednairaviana.github.io/react__memory_card](https://ednairaviana.github.io/react__memory_card/)

<img width="2378" height="1403" alt="image" src="https://github.com/user-attachments/assets/8ca30c3f-534f-43f7-a381-0d2be831b44e" />


---

## Tech Stack

- **React**
- **Vite**
- **JavaScript** (ES6+)
- **CSS / Tailwind**

---

## Goal

Click on all cards **without clicking the same card twice**.

This project focuses on practicing:

- `useEffect`
- State management in React
- Handling asynchronous data (`fetch`)
- Game logic and UI states

---

## Features

- Dynamic card rendering from an external API
- **Game states:** Loading · Success · Error
- **Score system:** Current score + Best score (session-based)
- Game over and win states
- Retry system on fetch error

---

## How It Works

Character data is fetched from the [Rick and Morty API](https://rickandmortyapi.com/).

### Data Fetching

A random array of character IDs is generated and used in the request:

```js
fetch(`https://rickandmortyapi.com/api/character/${ids}`)
```

This approach ensures better randomness across game sessions.

### Fetch States

| State | Behavior |
|-------|----------|
| **Loading** | Displays a loading indicator |
| **Success** | Renders the character cards |
| **Error** | Shows an error message with a reset button |

### Game Logic

- Each click checks whether the card was already selected
  - **Already clicked →** Game Over
  - **Not clicked yet →** Score increases and cards are reshuffled
- Cards reshuffle continuously until none remain unclicked
- Clicking all cards without repeating → **You win!**

---

## Shuffle Logic

The most challenging part of this project was the shuffle implementation.

Common issues in similar projects:

- Repeated cards on screen
- Dead-end states with no valid moves available

To address this, a custom shuffle algorithm was built that:

- Balances clicked and unclicked cards in each round
- Randomizes how many previously clicked cards are shown
- Ensures the game always remains playable and fair

### Edge Cases Handled

- No clicked cards at the start of the game
- End-game scenarios with very few remaining cards

> This logic was written without AI assistance to strengthen problem-solving skills. AI was only used to help with a utility function for randomizing array order.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ednairaviana/react__memory_card.git

# Install dependencies
npm install

# Start the development server
npm run dev
```
