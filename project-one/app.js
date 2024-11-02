
const die = [
    'diceImages/dice.png',
    'diceImages/dice (1).png',
    'diceImages/dice (2).png',
    'diceImages/dice (3).png',
    'diceImages/dice (4).png',
    'diceImages/dice (5).png'
];

const input = document.querySelector('input');
const rollButton = document.querySelector('#rollButton');
const diceContainer = document.querySelector('#diceContainer');

rollButton.addEventListener('click', function () {
    const numRolls = parseInt(input.value, 10); // Convert input value to an integer
    diceContainer.innerHTML = ""; // Clear previous dice images

    for (let i = 0; i < numRolls; i++) {
        const randIndex = Math.floor(Math.random() * die.length);
        const randImg = die[randIndex];

        const img = document.createElement('img');
        img.src = randImg;
        diceContainer.appendChild(img); // Append each image to the container
    }
});