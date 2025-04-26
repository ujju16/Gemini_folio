// script.js
console.log("Portfolio script chargé !");

const animatedBackground = document.getElementById('animated-background');
const numberOfLines = 550; // Nombre de lignes à générer

function createCircuitLine() {
    const line = document.createElement('div');
    line.classList.add('circuit-line');

    const width = Math.random() * 50 + 50; // Longueur aléatoire
    const height = Math.random() * 2 + 1;   // Épaisseur aléatoire
    const x = Math.random() * 100;         // Position X aléatoire (%)
    const y = Math.random() * 100;         // Position Y aléatoire (%)
    const speed = Math.random() * 5 + 2;   // Vitesse d'animation aléatoire (en s)
    const directionX = Math.random() > 0.5 ? 1 : -1; // Direction horizontale aléatoire
    const directionY = Math.random() > 0.5 ? 1 : -1; // Direction verticale aléatoire

    line.style.width = `${width}px`;
    line.style.height = `${height}px`;
    line.style.left = `${x}%`;
    line.style.top = `${y}%`;
    line.style.transform = `translate(<span class="math-inline"></span>)`; // Centrer l'origine

    // Animation plus complexe pour un effet de mouvement continu
    line.style.animation = `move ${speed}s linear infinite alternate`;

    // Modifier légèrement l'animation pour chaque ligne pour plus de variété
    const moveX = (Math.random() - 0.5) * 20;
    const moveY = (Math.random() - 0.5) * 20;
    const duration = speed * (Math.random() * 0.5 + 0.75); // Durée légèrement différente

    line.style.animationName = 'abstractCircuitMove';
    line.style.animationDuration = `${duration}s`;
    line.style.animationTimingFunction = 'linear';
    line.style.animationIterationCount = 'infinite';
    line.style.animationDirection = 'alternate';

    animatedBackground.appendChild(line);
}

// Définir l'animation keyframes en JavaScript pour plus de contrôle
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `@keyframes abstractCircuitMove {
    0% { transform: translateX(0) }
    50% { transform: translateY(100) }    
    100% { transform: rotate() }
};`

document.head.appendChild(styleSheet);


for (let i = 0; i < numberOfLines; i++) {
    createCircuitLine();
}