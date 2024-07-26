function setup() {
    createCanvas(400, 400);
    backround('black');
  }
  
  function draw() {
    stroke('blue');
    fill('red');
  
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }