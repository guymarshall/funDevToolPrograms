function getRandomSize() {
  return Math.floor(Math.random() * 100) + 50; // Returns a random number between 50 and 150
}

function animateElement(element) {
  const size = getRandomSize();
  const duration = Math.floor(Math.random() * 1000) + 500; // Returns a random duration between 500 and 1500 ms
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
  }, Math.floor(Math.random() * 2000) + 500); // Returns a random interval between 500 and 2500 ms
});