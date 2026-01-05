// ============================================
// Particle System Configuration
// ============================================
const config = {
    particleCount: 100,
    particleSize: 2,
    particleSpeed: 1,
    connectionDistance: 150,
    mouseRadius: 150,
    themes: {
        cosmic: {
            colors: ['#7c3aed', '#a78bfa', '#c084fc'],
            name: '宇宙'
        },
        aurora: {
            colors: ['#00d4aa', '#00f2c3', '#7afdd6'],
            name: 'オーロラ'
        },
        sunset: {
            colors: ['#ff6b6b', '#ffa500', '#ffd93d'],
            name: '夕焼け'
        },
        ocean: {
            colors: ['#0ea5e9', '#06b6d4', '#22d3ee'],
            name: '海洋'
        },
        neon: {
            colors: ['#ff00ff', '#00ffff', '#ffff00'],
            name: 'ネオン'
        }
    },
    currentTheme: 'cosmic'
};

// ============================================
// Canvas Setup
// ============================================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: null, y: null, radius: config.mouseRadius };
let animationId;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// ============================================
// Particle Class
// ============================================
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * config.particleSize + 1;
        this.speedX = (Math.random() - 0.5) * config.particleSpeed;
        this.speedY = (Math.random() - 0.5) * config.particleSpeed;
        this.color = this.getRandomColor();
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    getRandomColor() {
        const colors = config.themes[config.currentTheme].colors;
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                const dx = this.x - this.baseX;
                this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
                const dy = this.y - this.baseY;
                this.y -= dy / 10;
            }
        }

        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > width || this.x < 0) {
            this.speedX = -this.speedX;
            this.baseX = this.x;
        }
        if (this.y > height || this.y < 0) {
            this.speedY = -this.speedY;
            this.baseY = this.y;
        }
    }

    draw() {
        // Draw particle with glow effect
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    }
}

// ============================================
// Particle System
// ============================================
function initParticles() {
    particles = [];
    for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < config.connectionDistance) {
                const opacity = 1 - (distance / config.connectionDistance);
                const gradient = ctx.createLinearGradient(
                    particles[a].x, particles[a].y,
                    particles[b].x, particles[b].y
                );
                gradient.addColorStop(0, particles[a].color);
                gradient.addColorStop(1, particles[b].color);

                ctx.strokeStyle = gradient;
                ctx.globalAlpha = opacity * 0.3;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    }
}

// ============================================
// Animation Loop
// ============================================
let lastTime = 0;
let fps = 0;
let frameCount = 0;
let lastFpsUpdate = 0;

function animate(currentTime) {
    // Clear canvas with trailing effect
    ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
    ctx.fillRect(0, 0, width, height);

    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Connect particles
    connectParticles();

    // Calculate FPS
    frameCount++;
    if (currentTime - lastFpsUpdate > 1000) {
        fps = frameCount;
        frameCount = 0;
        lastFpsUpdate = currentTime;
        document.getElementById('fpsCounter').textContent = fps;
    }

    animationId = requestAnimationFrame(animate);
}

// ============================================
// Event Listeners
// ============================================
canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

canvas.addEventListener('click', (e) => {
    // Create burst effect on click
    for (let i = 0; i < 10; i++) {
        const particle = new Particle();
        particle.x = e.x;
        particle.y = e.y;
        particle.baseX = e.x;
        particle.baseY = e.y;
        particle.speedX = (Math.random() - 0.5) * 5;
        particle.speedY = (Math.random() - 0.5) * 5;
        particles.push(particle);
    }

    // Remove extra particles after a short delay
    setTimeout(() => {
        particles = particles.slice(0, config.particleCount);
    }, 2000);
});

// ============================================
// UI Controls
// ============================================
const particleCountSlider = document.getElementById('particleCount');
const particleSizeSlider = document.getElementById('particleSize');
const particleSpeedSlider = document.getElementById('particleSpeed');
const connectionDistanceSlider = document.getElementById('connectionDistance');

particleCountSlider.addEventListener('input', (e) => {
    config.particleCount = parseInt(e.target.value);
    document.getElementById('particleCountValue').textContent = e.target.value;
    document.getElementById('activeParticles').textContent = e.target.value;
    initParticles();
});

particleSizeSlider.addEventListener('input', (e) => {
    config.particleSize = parseFloat(e.target.value);
    document.getElementById('particleSizeValue').textContent = e.target.value;
});

particleSpeedSlider.addEventListener('input', (e) => {
    config.particleSpeed = parseFloat(e.target.value);
    document.getElementById('particleSpeedValue').textContent = e.target.value;
    particles.forEach(particle => {
        const angle = Math.atan2(particle.speedY, particle.speedX);
        particle.speedX = Math.cos(angle) * config.particleSpeed;
        particle.speedY = Math.sin(angle) * config.particleSpeed;
    });
});

connectionDistanceSlider.addEventListener('input', (e) => {
    config.connectionDistance = parseInt(e.target.value);
    document.getElementById('connectionDistanceValue').textContent = e.target.value;
});

// ============================================
// Theme Switching
// ============================================
const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        config.currentTheme = theme;

        // Update active button
        themeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update CSS variables
        document.documentElement.setAttribute('data-active-theme', theme);

        // Update particle colors
        particles.forEach(particle => {
            particle.color = particle.getRandomColor();
        });
    });
});

// ============================================
// Action Buttons
// ============================================
document.getElementById('clearBtn').addEventListener('click', () => {
    initParticles();
});

document.getElementById('screenshotBtn').addEventListener('click', () => {
    // Create a temporary canvas with white background
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');

    // Fill with current background
    const gradient = tempCtx.createLinearGradient(0, 0, width, height);
    const bgStart = getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-gradient-start').trim();
    const bgEnd = getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-gradient-end').trim();
    gradient.addColorStop(0, bgStart);
    gradient.addColorStop(1, bgEnd);
    tempCtx.fillStyle = gradient;
    tempCtx.fillRect(0, 0, width, height);

    // Draw current canvas on top
    tempCtx.drawImage(canvas, 0, 0);

    // Download
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    link.download = `cosmic-particle-art-${timestamp}.png`;
    link.href = tempCanvas.toDataURL();
    link.click();
});

// ============================================
// Welcome Screen
// ============================================
const welcomeOverlay = document.getElementById('welcomeOverlay');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
    welcomeOverlay.classList.add('hidden');
    setTimeout(() => {
        welcomeOverlay.style.display = 'none';
    }, 400);
});

// ============================================
// Initialize
// ============================================
initParticles();
animate(0);

// Update active particles display
document.getElementById('activeParticles').textContent = config.particleCount;

console.log('🌟 Cosmic Particle Art initialized!');
console.log('💡 Click anywhere to create a burst effect!');
