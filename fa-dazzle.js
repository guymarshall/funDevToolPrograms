setInterval(function() {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        elements[i].style.backgroundColor = randomColor;
    }
}, 1000);