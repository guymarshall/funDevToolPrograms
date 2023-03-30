setInterval(function() {
    let elements = document.getElementsByTagName("*");
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let index = 0;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = colors[index % colors.length];
        index++;
    }
}, 1000);