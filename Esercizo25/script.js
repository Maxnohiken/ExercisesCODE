function Coordinate(e){
    document.getElementById("x").innerHTML = "x = " + e.pageX;
    document.getElementById("y").innerHTML = "y = " + e.pageY;
}

document.getElementById('box').addEventListener('mousemove', Coordinate)