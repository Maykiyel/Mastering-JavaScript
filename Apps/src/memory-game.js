const movesDisplay = document.getElementById("movesDisplay");
const timeDisplay = document.getElementById("timeDisplay");
const resetBtn = document.getElementById("resetBtn");
const cardsGrid = document.getElementById("cardsGrid");
const resultDisplay = document.getElementById("resultDisplay");
const movesElement = document.getElementById("moves");
const timeElement = document.getElementById("time");

let moves = 0;
let matchedPairs = 0;
let flippedCards = [];
let canFlip = true;
let startTime;
let timerInterval;

// Shuffle cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
}
// Generate cards dynamically
function generateCards() {
  const cardData = [
    { name: "card1", image: "../Cards/Card1.png" },
    { name: "card2", image: "../Cards/Card2.png" },
    { name: "card3", image: "../Cards/Card3.png" },
    { name: "card4", image: "../Cards/Card4.png" },
    { name: "card5", image: "../Cards/Card5.png" },
    { name: "card6", image: "../Cards/Card6.png" },
  ];

  const cards = cardData.flatMap((card) => [
    Object.assign({}, card),
    Object.assign({}, card),
  ]);

  return shuffle(cards);
}

// Render cards on the grid
function renderCards() {
  const shuffledCards = generateCards();
  shuffledCards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card-container");

    cardElement.innerHTML = `<div class="card">
      <div class="back"></div>
      <div class="front">
        <img src="${card.image}" alt="${card.name}" class="size-full"/>
      </div>
    </div>`;
    cardElement.addEventListener("click", () => flipCard(cardElement, card));
    cardsGrid.appendChild(cardElement);
  });
}

// Handle card flip
function flipCard(cardContainer, card) {
  if (!canFlip || cardContainer.classList.contains("flipped")) return;

  const cardElement = cardContainer.querySelector(".card");
  cardElement.classList.add("flipped");

  if (!startTime) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimerDisplay, 1000);
  }

  flippedCards.push({ element: cardElement, card });

  if (flippedCards.length === 2) {
    canFlip = false;
    setTimeout(checkMatch, 300);
  }
}

// Check if flipped cards match
function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.card.name === card2.card.name) {
    card1.element.classList.add("match");
    card2.element.classList.add("match");
    matchedPairs++;

    if (matchedPairs === 6) {
      endGame();
    }
  } else {
    flippedCards.forEach(({ element }) => element.classList.remove("flipped"));
  }

  flippedCards = [];
  canFlip = true;
  moves++;
  movesDisplay.textContent = moves;
}

// Update the timer display
function updateTimerDisplay() {
  const currentTime = new Date().getTime();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// End the game
function endGame() {
  clearInterval(timerInterval);
  resultDisplay.classList.remove("hidden");
  resultDisplay.classList.add("transition-all", "duration-200", "scale-100");
  resultDisplay.classList.remove("scale-0");
  resultDisplay.textContent = `You won in ${moves} moves and ${timeDisplay.textContent}!`;
}

// Reset the game
resetBtn.addEventListener("click", () => {
  window.location.reload();
});

// Initialize game
function initializeGame() {
  renderCards();
}

initializeGame();
