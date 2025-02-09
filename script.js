// Get the button element
const button = document.getElementById('clickMeBtn');
const panda = document.getElementById('panda');

// Add a click event listener to the button
button.addEventListener('click', function() {
    alert("Happy Teddy Day Madam Jiii....! 🎉🐼💖 Hope you have a wonderful day full of love and joy!");

    // Trigger panda dancing animation
    panda.style.animation = 'pandaDance 1s infinite ease-in-out';

    // Change background color after click for a fun surprise!
    document.body.style.background = 'linear-gradient(to bottom, #FFEBEE, #FFCDD2)';
});
