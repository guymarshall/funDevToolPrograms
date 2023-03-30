setInterval(function() {
    let elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        elements[i].style.backgroundColor = randomColor;
    }
}, 1000);