// Array of colors
const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "gray", "skyblue"];

// Select button and text color element
const btn = document.getElementById('btn');
const textcolor = document.getElementById('textcolor');

// Add event listener on button
btn.addEventListener('click', () => {
// Get a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Change background color
    document.body.style.backgroundColor = randomColor; 
    // Change text color
    textcolor.textContent = randomColor;
});
