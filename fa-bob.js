function getRandomSize() {
    return Math.floor(Math.random() * 100) + 50;
}

function animateElement(element) {
    const size = getRandomSize();
    const duration = Math.floor(Math.random() * 1000) + 500;
    element.animate([
        { transform: `scale(1)` },
        { transform: `scale(${size / 100})` },
        { transform: `scale(1)` }
    ], {
        duration,
        easing: 'ease-in-out'
    });
}

document.querySelectorAll('*').forEach(element => {
    setInterval(() => {
        animateElement(element);
    }, Math.floor(Math.random() * 2000) + 500);
});