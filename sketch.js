//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog_img= loadImage("images/dogImg.png", 250, 250);
  dog_Happpy= loadImage("images/dogImg1.png", 250, 250);
  milk= loadImage("images/Milk.png", 200, 200);
}

function setup() {
  database= firebase.database();
  createCanvas(500, 500);
  dog= createSprite(250, 250, 10, 10);
  dog.addImage(dog_img);
  dog.scale= 0.1;
  foodStock= database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog_Happpy);
  }

  drawSprites();
  textSize(14);
  fill("White");
  text("Note: Press UP_ARROW Key To feed Drago Milk!", 100, 50);
  //add styles here

}
function readStock(data){
  foodS= data.val();
}

function writeStock(x){

  if(x <= 0){
    x=0
  } else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

