// Show loading screen immediately
document.querySelector('.loading-screen').style.display = 'flex';
document.querySelector('.content').style.display = 'none';

// When everything is loaded
window.addEventListener('load', function() {
    setTimeout(function() {
        // Hide loading screen
        document.querySelector('.loading-screen').style.opacity = '0';
        
        // Show content
        document.querySelector('.content').style.display = 'flex';
        
        // Create particles
        createNatureParticles();
        
        // Remove loading screen after fade out
        setTimeout(function() {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 1500); // Minimum 1.5s loading time
});

function createNatureParticles() {
    const colors = ['#5E8C61', '#8B786D', '#C8C8A9', '#7A9CC6', '#4A6670'];
    const shapes = ['🍃', '🌿', '❄', '✨', '•']; 
    
    for (let i = 0; i < 160; i++) {
        const particle = document.createElement('div');
        particle.className = 'nature-particle';
        
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * -100 + 'px';
        
        if (Math.random() > 0.3) {
            particle.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.fontSize = (Math.random() * 14 + 12) + 'px';
        } else {
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.width = (Math.random() * 8 + 4) + 'px';
            particle.style.height = (Math.random() * 8 + 4) + 'px';
        }
        
        particle.style.animationDuration = (Math.random() * 8 + 12) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationName = Math.random() > 0.5 ? 'particle-fall' : 'particle-drift';
        
        document.body.appendChild(particle);
    }
}
