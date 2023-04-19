let aquarium=document.getElementById("aquarium")


let turtle= new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(2,6,0)
turtle.setFillStyle('gold')

turtle.setPosition(90,90)

turtle.beginPath()
for(let i=0; i<4; i++){
   turtle.forward(24)
   turtle.right(55)
   turtle.right(95)
   turtle.forward(46)
   turtle.forward(35)
}



turtle.closePath()
turtle.fill()




