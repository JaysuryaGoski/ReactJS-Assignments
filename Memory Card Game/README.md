# React Memory Card Game

## Description

This is a simple memory card game built with React. The objective of the game is to match pairs of cards with the same image. The game tracks the number of moves and the best score (fastest time to complete the game) using local storage.

## Features

- **Responsive Design**: The game is fully responsive and works on all screen sizes.
- **Local Storage**: The best score is saved in local storage, so it persists across sessions.
- **Animations**: Cards flip with a smooth animation, and correct/wrong matches are indicated with colors and animations.
- **Start Button**: The game starts when the user clicks the "Start Game" button.
- **Initial Display**: Cards are shown for 5 seconds at the start of the game to help the user memorize their positions.

## Technologies Used

- React
- CSS

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-memory-card-game.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-memory-card-game
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173`.

## Components

### `Cards.jsx`

This component manages the state of the game, including the cards, moves, pairs matched, and best score. It also handles the game logic, such as checking for matches and updating the state.

### `Card.jsx`

This component represents a single card in the game. It receives props from the `Cards` component and handles the click events.

## CSS

The CSS file (`index.css`) contains styles for the game, including the layout, card styles, animations, and responsive design.

## How to Play

1. Click the "Start Game" button to begin.
2. Memorize the positions of the cards during the initial 5-second display.
3. Click on a card to flip it and reveal the image.
4. Click on another card to try to find a match.
5. If the cards match, they will stay flipped. If not, they will flip back after a short delay.
6. The game ends when all pairs are matched. Your time and number of moves will be displayed.
7. Try to beat your best score!


