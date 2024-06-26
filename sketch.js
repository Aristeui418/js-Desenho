function setup() {
    createCanvas(500,500);
    background("Whith");
  }
  
  function draw() {
    
    stroke("Blue")
    fill("Black")
    
   // console.log(mouseIsPressed)
    
    if (mouseIsPressed){
    rect(mouseX,mouseY,30,45);  
    }
  }