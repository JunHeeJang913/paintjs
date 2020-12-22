const canvas = document.getElementById(canvas);

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    //console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedonw",onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}