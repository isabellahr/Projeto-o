let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  
  createCanvas(1000, 1000); // criar cenário
background("lightblue"); // cor cenário
cor = color(random(0, 200), random(0, 150), random(0, 230)); // gerar cor aleatória
posicaoHorizontal = 200;
posicaoVertical = 200;
}

function draw() {
  
fill (cor); // cor do círculo
circle(posicaoHorizontal, posicaoVertical, 50); 
  
 if(mouseX < posicaoHorizontal) {
  posicaoHorizontal = posicaoHorizontal - 1; // pro lado -1
 }
   if(mouseX > posicaoHorizontal) {
  posicaoHorizontal = posicaoHorizontal + 1; // pro lado +1
 }
  
   if(mouseY < posicaoVertical) { // pra cima -1
  posicaoVertical --;
   }
  
   if(mouseY > posicaoVertical) { // pra cima +1
  posicaoVertical ++;
 }
  if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0,255)),
random(0, 100);
}
}
