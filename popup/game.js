window.onload=function() {
    canv=document.getElementById("mac");
    asd=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/12);
}

// x : x axix; y : y axis
px=py=7; // player position
gs=tc=20; // gs: grid size, tc: tile count
bx=by=10; // food position
xv=yv=0; // axis value (velocity)
trail=[];
tail = 5; //starting length of the snake

function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    asd.fillStyle="black";
    asd.fillRect(0,0,canv.width,canv.height);

    asd.fillStyle="blue";
    for(var i=0;i<trail.length;i++) {
        asd.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            tail = 5;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }

    if(bx==px && by==py) {
        tail++;
        bx=Math.floor(Math.random()*tc);
        by=Math.floor(Math.random()*tc);
    }
    asd.fillStyle="yellow";
    asd.fillRect(bx*gs,by*gs,gs-2,gs-2);
}
function keyPush(qwe) {
    switch(qwe.keyCode) {
        case 57:
            xv=-1;yv=0;
            break;
        case 58:
            xv=0;yv=-1;
            break;
        case 59:
            xv=1;yv=0;
            break;
        case 60:
            xv=0;yv=1;
            break;
    }
}
