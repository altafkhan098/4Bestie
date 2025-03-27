// Create cosmic background
function createCosmos() {
    const cosmos = document.getElementById('cosmos');
    const starCount = window.innerWidth < 600 ? 100 : 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
       
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
     
        const size = 1 + Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
    
        star.style.setProperty('--duration', `${5 + Math.random() * 10}s`);
        star.style.setProperty('--opacity', `${0.3 + Math.random() * 0.7}`);
        
        cosmos.appendChild(star);
    }
}

// Magic Button Effects
document.getElementById('magicBtn').addEventListener('click', function() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createSparkle();
        }, i * 50);
    }
    
    const audio = new Audio('assets/music/Main Agar Kahoon.mp3');
    audio.play();
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');

    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${window.innerHeight + 50}px`;
    
    const size = Math.random() * 30 + 20;
    heart.style.fontSize = `${size}px`;
  
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = `${duration}s`;
    
    const hue = 330 + Math.random() * 30; 
    heart.style.color = `hsl(${hue}, 100%, 70%)`;
    
    document.body.appendChild(heart);
  
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.filter = 'blur(1px)';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
 
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 100 + 50;
    
    sparkle.style.left = `${centerX + Math.cos(angle) * radius}px`;
    sparkle.style.top = `${centerY + Math.sin(angle) * radius}px`;
    
    
    sparkle.style.transform = 'scale(0)';
    sparkle.style.transition = 'all 0.5s ease-out';
    
    document.body.appendChild(sparkle);
    

    setTimeout(() => {
        sparkle.style.transform = 'scale(2)';
        sparkle.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');

musicToggle.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        this.innerHTML = '♫';
        this.style.background = 'var(--primary)';
        this.style.color = 'white';
    } else {
        bgMusic.pause();
        this.innerHTML = '♫';
        this.style.background = 'white';
        this.style.color = 'inherit';
    }
});

// Friendship counter
function updateCounter() {
    const startDate = new Date(2024, 5, 15);
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('daysCount').textContent = diffDays;
}

window.addEventListener('load', () => {
    createCosmos();
    updateCounter();
 
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 300);
    }
    
    setInterval(updateCounter, 86400000); 
});

// Responsive adjustments
window.addEventListener('resize', () => {
    document.getElementById('cosmos').innerHTML = '';
    createCosmos();
});