let aquarium=document.getElementById("aquarium")
let turtle= new RealTurtle.default(aquarium, {autoStart: true})
turtle.setPosition(0,0)
turtle.setFillStyle('Darkblue')
turtle.beginPath()
for(let i=0; i<4; i++){

   turtle.right(90)
   turtle.forward(300)
}
turtle.closePath()
turtle.fill()

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



