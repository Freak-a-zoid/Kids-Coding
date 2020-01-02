function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // To fill shapes with colour we first need to set the colour by calling fill().
  fill( 0, 0, 255 );
  // Note: All shapes after this API call will be drawn blue.

  // Add code to draw shapes here:
  circle( 200, 200, 75 );
}
