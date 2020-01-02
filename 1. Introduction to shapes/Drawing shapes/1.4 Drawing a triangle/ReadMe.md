# Drawing a triangle.

To draw a triangle we need to make call the library function triangle().

<a href="https://p5js.org/reference/#/p5/triangle" target="_blank">https://p5js.org/reference/#/p5/triangle</a>

The signature of the function is triangle( x1, y1, x2, y2, x3, y3 ) where
  - x1 x coordinate/position of the first point
  - y1 y coordinate/position of the first point
  - x2 x coordinate/position of the second point
  - y2 y coordinate/position of the second point
  - x3 x coordinate/position of the third point
  - y3 y coordinate/position of the third point

The triangle is drawn by specifying each point of the triangle as an x, y co-ordinate/position.
For example the function call triangle( 200, 100, 100, 300, 300, 300 ); will create a triangle with
  - point 1 = (200, 100)
  - point 2 = (100, 100)
  - point 3 = (300, 300)

Example:
<div>
  <code><object data="Example.js" width="400" height="200"></object></code>
</div>
