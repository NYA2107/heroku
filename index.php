<!DOCTYPE html>
<html>
    <head>
        <style>
            div{
                width : 97%;
                height : 500px;
                border : 5px solid white;
                position : relative;
                cursor: crosshair;
/*                margin-top: 60px;*/
            }
            body{
                background: black;
            }
            #header{
                width: 97%;
                height: 50px;
                position: static;
                background: white;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <script src="mouse.js"></script>
        <header>
            <div id="header">
                <h5>THIS PROGRAM DETECT YOUR CURSOR POSITION AND CREATE AN ELEMENT WHEN IT MOVES</h5>

            </div>
        </header>
        <div onmousemove="Coords(event)" onclick="gun(event)">
        </div>
        <p id="demo"></p>
    </body>
</html>
