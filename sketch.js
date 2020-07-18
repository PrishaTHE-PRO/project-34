//Create variables here
var  dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  happydog_img = loadImage("happdog.png");
dog_img = loadImage("dog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage("dog");
  foodStock=database.ref('food');
foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStoke(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  text("NOTE: Press UP_ARROW Key To Feed Drago Milk!",250,50);
  //add styles here

}

//function to read values from DB
function readStoke(data){
foodS = data.val();
}

//function to write values from DB
function writeStoke(x){
  if(x<=0){
x=0}
else{
  x=x+1;
}
database.ref('/').update({
  Food:x
})
}



