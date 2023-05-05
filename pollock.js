let myCanvas= document.getElementById("myCanvas")

paper.setup(myCanvas)

function drawCircle(e){
 console.log(e)
 if(isMouseDown){

 let circle = new paper.Path.Circle({
    radius: Math.random()* 55,
    center: {
        x: e.x,
        y: e.y
    }
 })
let red= Math.random() * 255
let blue= Math.random() * 255
let green= Math.random() * 255


let isMouseDown = false

 circle.fillColor="rgb(" + red + ',' + green + "," + blue + ")"
}}

function mouseDown(){
    isMouseDown= true
}

function mouseUp(){
    isMouseDown = false
}

myCanvas.addEventListener("mousemove", drawCircle)
myCanvas.addEventListener("mousedown", mouseDown)
myCanvas.addEventListener("mouseup", mouseUp)
