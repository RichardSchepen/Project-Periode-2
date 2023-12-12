window.addEventListener("keydown", onKeyDown, false)
window.addEventListener("keyup", onKeyUp, false)



function onKeyDown(event){
    let keyCode = event.keyCode
    switch (keyCode){
        case 87: //de w toets
            keyW = true
        break;
        case 68: //de d toets
            keyD = true;
        break;
        case 83: //de s toets
            keyS = true;
        break;
        case 65: //de a toets
            keyA = true;
        break;
    }
}
function onKeyUp(event){
    let keyCode = event.keyCode;
    switch(keyCode){
        case 87: //de w toets
            keyW = false
        break;
        case 68: //de d toets
            keyD = false;
        break;
        case 83: //de s toets
            keyS = false;
        break;
        case 65: //de a toets
            keyA = false;
        break;
    }
}
let tickX = 10;
let tickY = 10;

let keyW = false;
let keyA = false;
let keyS = false;
let keyD = false;
let restrain = false;

function drawstuff(){
    window.requestAnimationFrame(drawstuff)
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    ctx.clearRect(0,0,800,700)
    ctx.fillStyle ="yellow";
    ctx.fillRect(tickX, tickY, 50, 50);
    if(tickX <= 0){
        tickX += 5;
    }
    if(tickY <= 0){
        tickY += 5;
    }
    if(0 > tickX  < 750){
        restrain = false
    }
    if(0 > tickY <750){
        restrain = false
    }
    if(tickX >= 750) {
        tickX -= 5;
        restrain = true
    }
    if(tickY >= 650){
        tickY -= 5;
        restrain = true
    }
    if(restrain === false){
        if(keyA === true){
            tickX -= 5;
        }
        if(keyD === true){
            tickX += 5;
        }
        if(keyW === true){
            tickY -= 5;
        }
        if(keyS === true){
            tickY += 5;
        }
    }
}
window.requestAnimationFrame(drawstuff);