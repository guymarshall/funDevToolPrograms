setInterval(function() {
    var elements = document.getElementsByTagName("*");
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var index = 0;
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = colors[index % colors.length];
        index++;
    }
}, 1000);