## 1. Introduction to shapes.

# Creating your first shapes using the p5 processing library.

The library consist of some basic api calls which allows you to create basic shapes, such as rectangles, circles, ellipses, lines, etc.
Following the reference https://p5js.org/reference/
The api library calls should be added to the draw() function in the p5 processing sketch after the background() function call.
Note: Remember instructions are executed in sequence one by one.

# 1.1 Drawing a circle.

To draw a circle we need to make call the library function circle().
This function contains 4 parameters (order is preserved):
  - an x coordinate
  - a y coordinate
  - the width of the circle
  - the height of the circle
Thus, the signature of the function is: circle( x_coordinate, y_coordinate, width, height );

For example the function call
  circle( 50, 50, 20, 20 );
will create a circle at position x = 50, y = 50 and width = 20, height = 20 (for the respective parameters).
