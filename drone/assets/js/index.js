var spin = new TimelineMax();
var loading = new TimelineMax({
    repeat: -1
});

spin.to($('.blade'), 0.6, {
    rotation: 360,
    repeat: -1,
    transformOrigin: '50% 50%',
    ease: Linear.easeNone
});

loading.to($('.loadingText'), 1, {
        opacity: 0,
        ease: Linear.easeNone
    })
    .to($('.loadingText'), 1, {
        opacity: 1,
        ease: Linear.easeNone
    });

let drone = document.getElementById('drone_shape');

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Set the object's initial position
let x = 0;
let y = 0;
drone.style.left = x + 'px';
drone.style.top = y + 'px';

// Listen for arrow key presses
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            y = Math.max(0, y - 10);
            break;
        case 'ArrowDown':
            y = Math.min(screenHeight - 300, y + 10);
            break;
        case 'ArrowLeft':
            x = Math.max(0, x - 10);
            break;
        case 'ArrowRight':
            x = Math.min(screenWidth - 300, x + 10);
            break;
    }
    // Move the drone to its new position
    drone.style.left = x + 'px';
    drone.style.top = y + 'px';
});
