
function shuffleAndDeal(numPlayers, cardsPerPlayer , numDecks = 1) {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = [
        'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
        'Jack', 'Queen', 'King'
    ];
    const deck = [];

    // Create the deck
    for (let deckIndex = 0; deckIndex < numDecks; deckIndex++) {
        for (const suit of suits) {
            for (const rank of ranks) {
                deck.push(`${rank} of ${suit}`); // once card is created, it is pushed into the deck array
            }
        }
    }

    // Shuffle the deck
    for (let i = deck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]]; // This is a Fisher-Yates shuffle algorithm
    }

    // Deal the cards
    const totalCardsNeeded = numPlayers * cardsPerPlayer;

    if (numPlayers <= 0 || cardsPerPlayer <= 0) {
        throw new Error('Number of players and cards per player must be positive integers.');
    }
    if (totalCardsNeeded > deck.length) {
        throw new Error('Not enough cards in the deck to deal.');
    }

    const hands = Array.from({ length: numPlayers }, () => []);
    for (let i = 0; i < totalCardsNeeded; i++) {
        hands[i % numPlayers].push(deck.pop());
    }
    return hands;

}
// shuffleAndDeal(1,5)

export default shuffleAndDeal;


// TODO: Write a function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1)
// that simulates shuffling and dealing a deck of cards.

// TODO: Create a standard 52-card deck (or 104 if numDecks is 2).

// TODO: Implement input validation to handle invalid inputs:
//       -  numPlayers should be a positive integer.
//       -  cardsPerPlayer should be a positive integer.
//       -  Throw an error if the requested cards exceed the deck size.

// TODO: Shuffle the deck using a suitable algorithm
//       -  Consider time complexity and randomness.

// TODO: Deal cards to the specified number of players.

// TODO: Return the hands dealt as an array of arrays.

// TODO: Test the function with various inputs, including edge cases:
//       -  Dealing the entire deck.
//       -  Single player.
//       -  Minimum cards per hand.



