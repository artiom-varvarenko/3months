// Set the start date (3 months ago from 26/12/2025)
// 26/09/2025
const startDate = new Date('2025-09-26T00:00:00');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

// Update timer every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .note-card, .dashboard-card, .reason-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add visible class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Love Button Interaction
const loveBtn = document.getElementById('loveBtn');
loveBtn.addEventListener('click', () => {
    // Confetti explosion
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C21E56', '#FFD1DC', '#FFF']
    });

    // Heart burst
    const end = Date.now() + 1000;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#C21E56', '#FFD1DC']
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#C21E56', '#FFD1DC']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    loveBtn.textContent = "Received My Love! ❤️";
    loveBtn.style.backgroundColor = "#ff4d88";

    setTimeout(() => {
        loveBtn.textContent = "Receive My Love ❤️";
        loveBtn.style.backgroundColor = "";
    }, 3000);
});

// Music Player
function playSong() {
    const playerContainer = document.getElementById('player-container');
    const cardContent = document.querySelector('#songCard .card-content');

    // Hide the initial content
    cardContent.style.display = 'none';

    // Show the player container
    playerContainer.style.display = 'block';

    // Insert YouTube Iframe with Autoplay
    // Video ID: n_-W7iqotuc
    // Note: Autoplay with sound might be blocked by browsers without user interaction first.
    // We use the IFrame Player API to control volume.
    playerContainer.innerHTML = `
        <div id="yt-player"></div>
        <button onclick="stopSong()" style="margin-top: 10px; background: none; border: none; color: #666; cursor: pointer; text-decoration: underline;">Close Player</button>
    `;

    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
        createPlayer();
    }
}

function stopSong() {
    const playerContainer = document.getElementById('player-container');
    const cardContent = document.querySelector('#songCard .card-content');

    playerContainer.innerHTML = ''; // Stop video
    playerContainer.style.display = 'none';
    cardContent.style.display = 'block';
}

// 22 Reasons Carousel Logic
let currentReasonIndex = 0;
const totalReasons = 21;

function showReason(index) {
    const cards = document.querySelectorAll('.reason-card');
    const currentNum = document.getElementById('current-reason-num');

    // No wrap around - restrict navigation
    if (index >= totalReasons) return;
    if (index < 0) return;

    currentReasonIndex = index;

    // Hide all
    cards.forEach(card => {
        card.classList.remove('active');
        card.classList.remove('flipped'); // Reset flip
    });

    // Show current
    cards[currentReasonIndex].classList.add('active');

    // Update counter
    currentNum.innerText = currentReasonIndex + 1;
}

function nextReason() {
    showReason(currentReasonIndex + 1);
}

function prevReason() {
    showReason(currentReasonIndex - 1);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextReason();
    if (e.key === 'ArrowLeft') prevReason();
});

let player;

function onYouTubeIframeAPIReady() {
    if (document.getElementById('player-container').style.display === 'block') {
        createPlayer();
    }
}

function createPlayer() {
    if (player) {
        player.destroy();
    }
    player = new YT.Player('yt-player', {
        height: '315',
        width: '100%',
        videoId: 'n_-W7iqotuc',
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'origin': window.location.origin
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(30);
    event.target.playVideo();
}
