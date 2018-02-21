function Coords(event) {
    x = event.clientX;
    y = event.clientY;
    showCoords(x,y);
    makeBox(x,y); 
}

function showCoords(x,y){
    var coords = "X : " + x + ", Y : " + y;
    document.getElementById("demo").innerHTML = coords;
      
} 

function gun(event){
        var gX = event.clientX;
        var gY = event.clientY;
        var posX = x - 5;
        var posY = y - 5;
        var opacity = 1;
        var gu = document.createElement("canvas");
        gu.style.width = "10px";
        gu.style.height = "10px";
        gu.style.left = posX+ "px";
        gu.style.top = posY + "px";
        gu.style.position = "absolute";
        gu.style.background = "white";
        gu.style.border = "none";
        gu.style.opacity = opacity;
        document.body.appendChild(gu);
        
    }

function makeBox(x,y){
    var height = 15;
    var width = 15;
    var posX = x - 5;
    var posY = y - 5;
    var opacity = 1;
    var box = document.createElement("canvas");
    box.setAttribute("class","circle");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.left = posX+ "px";
    box.style.top = posY + "px";
    box.style.position = "absolute";
    box.style.background = "white";
    box.style.border = "none";
    box.style.opacity = opacity;
    box.style.cursor = "crosshair";
    document.body.appendChild(box);
    
    
    var t = setInterval(move,10);
    function move(){
        opacity -= 0.05;
        posY += 1;
       // height += 2;
       // width += 2;
        box.style.top = posY + "px";
        box.style.opacity = opacity;
        box.style.height = height + "px";
        box.style.width = width + "px";
        if(opacity <= 0){
            document.body.removeChild(box);
            clearInterval(t);
        }
    }
}

    




