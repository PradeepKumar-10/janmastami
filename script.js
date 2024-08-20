let audio; // Declare the audio variable globally

function openDoors() {
    document.getElementById('door-left').classList.add('open');
    document.getElementById('door-right').classList.add('open');
    document.getElementById('text-bg').classList.remove('hidden');
    document.getElementById('openButton').style.display = 'none'; // Hide the button

    // Start falling flowers effect
    startFallingFlowers();

    // Play the audio with a slower playback rate
    audio = document.getElementById('chantAudio');
    audio.play();

    // Show the video and play it
    const videoElement = document.getElementById('celebrationVideo');
    document.getElementById('video-bg').classList.remove('hidden');
    videoElement.play();

    // Automatically close doors after 35 seconds (35000 milliseconds)
    setTimeout(closeDoors, 40000);
}

function closeDoors() {
    document.getElementById('door-left').classList.remove('open');
    document.getElementById('door-right').classList.remove('open');
    document.getElementById('text-bg').classList.add('hidden');
    document.getElementById('openButton').style.display = 'block'; // Show the button again

    // Stop the audio
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    }

    // Hide the video and pause it
    const videoElement = document.getElementById('celebrationVideo');
    videoElement.pause();
    videoElement.currentTime = 0; // Reset video to the beginning
    document.getElementById('video-bg').classList.add('hidden');

    // Stop falling flowers effect
    stopFallingFlowers();
}

// Function to create falling flowers
function createFlower() {
    const flower = document.createElement('img');
    flower.src = 'flower.png'; // Replace with your flower image file name
    flower.classList.add('falling-flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 2 + 's';
    flower.style.opacity = Math.random();
    document.getElementById('flower-container').appendChild(flower);

    // Remove the flower after it falls
    setTimeout(() => {
        flower.remove();
    }, 5000); // Should be slightly longer than the max animation duration
}

// Function to start the continuous falling flowers effect
function startFallingFlowers() {
    flowerInterval = setInterval(createFlower, 200); // Create a new flower every 200ms
}

// Function to stop the continuous falling flowers effect
function stopFallingFlowers() {
    clearInterval(flowerInterval);
}
