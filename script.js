const diceSix =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>';

const diceFive =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>';

const diceFour =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>';

const diceThree =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>';

const diceTwo =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM352 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>';

const diceOne =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>';

const diceIcons = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

const quotes = ["To succeed in life you need two things:ignorance and confidence",
    "To be or note to be,that is the question.",
    "Be the change you wish to see in the world.",
    "Beleive you can and you're halfway there.",
    "Don't watch the clock; do what it does.Keep going."
];
 const author = ["-Mark Twain",
    "-William Shakespeare",
    "-Mahatma Gandhi",
    "-Theodore Roosevelt",
    "-Sam Levenson"
 ];

// Select Dice Button
const diceButton = document.querySelector("#dice");
// Select h1
let heading = document.querySelector("h1");
let para = document.querySelector("p");

const randomDice = () => {
  // Rotate Button
  diceButton.style.transform = "rotate(120deg)";
  const random = Math.floor(Math.random() * 5);
  diceButton.innerHTML = diceIcons[random];

  //   Insert Quote
  const randomQuote = Math.floor(Math.random() * 5);
  heading.innerHTML = quotes[randomQuote];

  //  insert authors

  const randomAuthor = Math.floor(Math.random() * 5);
  para.innerHTML = author[randomAuthor];

  setTimeout(() => {
    // Rotate Button
    diceButton.style.transform = "rotate(0deg)";
  }, 200);
};

diceButton.addEventListener("click", randomDice);
