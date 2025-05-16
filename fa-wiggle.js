const elements = document.querySelectorAll("*");

elements.forEach(element => {
    let x = 0, y = 0;
    setInterval(function() {
        x += (Math.random() * 1 - 0.5);
        y += (Math.random() * 1 - 0.5);
        element.style.transform = `translate(${x}px, ${y}px)`;
    }, 50);
});