function love() {
    var name1 = document.getElementById("n1").value;
    var name2 = document.getElementById("n2").value;

    if (name1.length < 2) {
        alert("Yo! Enter at least 3 characters");
        return;
    }
    if (name2.length < 2) {
        alert("Yo! Enter at least 3 characters");
        return;
    } else {
        var rand = Math.floor(Math.random() * 100);
        document.getElementById("print").innerHTML = name1 + " and " + name2 + " Your love is " + rand + " % strong!";
    }
}