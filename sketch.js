var Doctor;
var Canvas;
var database;
var Vaccine;
var Virus;
var backgroundImage;

function preload(){

Doctor=loadImage("Doctor.png");
Vaccine=loadImage("Vaccine.png");
Virus=loadImage("virus.png");
backgroundImage = loadImage("bg.png");

}


function setup() {
canvas = createCanvas(windowWidth, windowHeight);


}



function draw() {
if(keydown("up")){
Doctor.velocityY=-8;

}
drawSprites();
}

function windowResized() {
resizeCanvas(800, 800);

}