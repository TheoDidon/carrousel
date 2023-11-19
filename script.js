document.body.onload=function() {
    nbr = 6;
    i = nbr;
    p = 0;
    container = document.getElementById("container");
    g = document.getElementById("g");
    d = document.getElementById("d");
    container.style.width = (800*nbr) + "px";

    while (i >= 0) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('./assets/image"+i+".jpeg')";
        container.appendChild(div);
        i--;
    }
    DisplayOrNot();

    g.onclick = function() {
        if (p < 0){
            p++;
        }
        container.style.transform = "translate("+p*800+"px)";
        container.style.transition = "all 0.5s ease";
        DisplayOrNot();
    }
    
    d.onclick = function() {
        if (p > -nbr+1) {
            p--;
        }
        container.style.transform = "translate("+p*800+"px)";
        container.style.transition = "all 0.5s ease";
        DisplayOrNot();
    }

    function DisplayOrNot() {
        if ( p == nbr + 1) {
            d.style.visibility = "hidden";
        }
        else {
            d.style.visibility = "visible";
        }
        if ( p == 0 ) {
            g.style.visibility = "hidden"; 
        }
        else {
            g.style.visibility = "visible";
        }
    }
}