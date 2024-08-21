let audio; 

function openDoors() {
    document.getElementById('door-left').classList.add('open');
    document.getElementById('door-right').classList.add('open');
    
    document.getElementById('content').classList.remove('hidden');
    
    document.getElementById('openButton').style.display = 'none';

    startFallingFlowers();

    audio = document.getElementById('chantAudio');
    audio.play();

    const videoElement = document.getElementById('celebrationVideo');
    videoElement.play();

    setTimeout(closeDoors, 40000);
}

function closeDoors() {
    document.getElementById('door-left').classList.remove('open');
    document.getElementById('door-right').classList.remove('open');
    
    document.getElementById('content').classList.add('hidden');

    document.getElementById('openButton').style.display = 'block'; 

    // Stop the audio
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    const videoElement = document.getElementById('celebrationVideo');
    videoElement.pause();
    videoElement.currentTime = 0; 

    stopFallingFlowers();
}

function createFlower() {
    const flower = document.createElement('img');
    flower.src = 'flower.png'; 
    flower.classList.add('falling-flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 2 + 's';
    flower.style.opacity = Math.random();
    document.getElementById('flower-container').appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000); }

function startFallingFlowers() {
    flowerInterval = setInterval(createFlower, 200); 
}

function stopFallingFlowers() {
    clearInterval(flowerInterval);
}
