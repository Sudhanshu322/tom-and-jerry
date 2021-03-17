var tom,tomImg1,tomImg2
var jerry,jerryImg1,jerryImg2
var bg;
function preload() {
    //load the images here
    tomImg1=loadImage("images/cat1.png")
    tomImg2=loadImage("images/cat2.png")
    bg=loadImage("images/garden.png")
    jerryImg1=loadImage("images/mouse1.png")
    jerryImg2=loadImage("images/mouse2.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(900,600);
    tom.addImage(tomImg1);
    tom.scale = 0.2

    jerry = createSprite(200,600);
    jerry.addImage(jerryImg1)
    jerry.scale=0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addImage(tomImg2);
        tom.x = 300;
        tom.scale = 0.2
        jerry.addImage(jerryImg2)
        jerry.scale = 0.15
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addImage(tomImg2);
        jerry.addImage(jerryImg2);
    }

}
