
function preload() {
    //load the images here
    bg=loadImage("images/iss.png")
    sleep=loadImage("images/sleep.png")
    brush=loadImage("images/brush.png")

    gym=loadAnimation("images/gym12.png","images/gym11.png")
    gym2=loadAnimation("images/gym1.png","images/gym2.png")
    eat=loadAnimation("images/eat1.png","images/eat2.png")
    drink=loadAnimation("images/drink1.png","images/drink2.png")
    move=loadAnimation("images/move.png","images/move1.png")
    bath=loadAnimation("images/bath1.png","images/bath2.png")
}

function setup(){
    createCanvas(1000,800);
    //create Astronaut sprite here
  astronaut = createSprite (500,600)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
}

function draw() {
 background(bg);
 
 if(keyDown(UP_ARROW)){
     astronaut.addAnimation("brushing",brush)
     astronaut.changeAnimation("brushing",brush)
     astronaut.velocityX=0
     astronaut.velocityY=0
 }

if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming",gym)
    astronaut.velocityX=0
    astronaut.velocityY=0
     }
    
    
 if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("gymming",gym2)
    astronaut.changeAnimation("gymming",gym2)
    astronaut.velocityX=0
    astronaut.velocityY=0
                }

if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating",eat)
    astronaut.velocityX=0
    astronaut.velocityY=0
}
//keycode for d    
if(keyCode=="68"){
    astronaut.addAnimation("drinking",drink)
    astronaut.changeAnimation("drinking",drink)
    astronaut.velocityX=0
    astronaut.velocityY=0
} 
//keycode for s   
if(keyCode=="83"){
    astronaut.addAnimation("sleeping",sleep)
    astronaut.changeAnimation("sleeping",sleep)
    astronaut.velocityX=0
    astronaut.velocityY=0
    
    
}

//Keycode for b
if(keyCode=="66"){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing",bath)
    astronaut.velocityX=0
    astronaut.velocityY=0
}

//keycode for m
if(keyCode=="77"){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving",move)
    astronaut.velocityX=0
    astronaut.velocityY=0
}
drawSprites();
}
